import { redirect } from "next/navigation";
import { and, count, eq, gt } from "drizzle-orm";
import {
  CalendarClock,
  ClipboardList,
  Film,
  ImageIcon,
  Mail,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { AdminPageHeader, MetricCard, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { db } from "@/db";
import { inquiry, session as sessionTable } from "@/db/schema";
import { getCurrentAdminContext } from "@/lib/admin-auth";

const comingSoonCards = [
  {
    title: "작업 진행 현황",
    description: "액자 제작, 사진 선별, 영상 편집, 이모티콘 시안 단계를 순서대로 보여줄 예정입니다.",
    icon: ClipboardList,
  },
  {
    title: "최종 전달 보관함",
    description: "카카오톡·이메일로 전달된 최종 영상, 사진, 이모티콘 링크를 다시 확인할 수 있게 확장합니다.",
    icon: Mail,
  },
  {
    title: "공개·홍보 동의 관리",
    description: "유튜브 장기 열람, 인스타/틱톡 홍보 활용 여부를 고객 기준으로 정리할 예정입니다.",
    icon: Film,
  },
  {
    title: "주문·패키지 이력",
    description: "선택한 패키지 구성과 추가 옵션, 재전달 요청 이력을 한곳에서 관리하도록 이어집니다.",
    icon: ImageIcon,
  },
];

function toDate(value: Date | string | null | undefined) {
  if (!value) return null;
  const parsed = value instanceof Date ? value : new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateTime(value: Date | string | null | undefined) {
  const date = toDate(value);
  if (!date) return "-";

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatRelativeTime(value: Date | string | null | undefined) {
  const date = toDate(value);
  if (!date) return "-";

  const diffMinutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60000));
  if (diffMinutes < 1) return "방금 전";
  if (diffMinutes < 60) return `${diffMinutes}분 전`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}일 전`;

  return formatDateTime(date);
}

function getProviderLabel(providerId: string) {
  switch (providerId) {
    case "google":
      return "Google";
    case "kakao":
      return "Kakao";
    case "naver":
      return "Naver";
    default:
      return providerId;
  }
}

function formatInquiryStatus(status: string | null) {
  switch (status) {
    case "pending":
      return "접수 대기";
    case "processing":
      return "진행 중";
    case "completed":
      return "응대 완료";
    default:
      return status ?? "확인 예정";
  }
}

function inquiryTone(status: string | null) {
  if (status === "pending") return "amber" as const;
  if (status === "processing") return "mint" as const;
  if (status === "completed") return "violet" as const;
  return "slate" as const;
}

export default async function ProfilePage() {
  const { session } = await getCurrentAdminContext();

  if (!session) {
    redirect("/auth/login?redirectTo=/profile");
  }

  const now = new Date();
  const userEmail = session.user.email;

  const [profile, accounts, activeSessionRows, recentSessions, inquiryCountRows, recentInquiries] = await Promise.all([
    db.query.user.findFirst({
      columns: {
        name: true,
        email: true,
        image: true,
        emailVerified: true,
        createdAt: true,
      },
      where: (table, { eq }) => eq(table.id, session.user.id),
    }),
    db.query.account.findMany({
      columns: {
        id: true,
        providerId: true,
        createdAt: true,
      },
      where: (table, { eq }) => eq(table.userId, session.user.id),
      orderBy: (table, { asc }) => [asc(table.createdAt)],
    }),
    db
      .select({ count: count() })
      .from(sessionTable)
      .where(and(eq(sessionTable.userId, session.user.id), gt(sessionTable.expiresAt, now))),
    db.query.session.findMany({
      columns: {
        id: true,
        userAgent: true,
        ipAddress: true,
        createdAt: true,
        expiresAt: true,
      },
      where: (table, { eq }) => eq(table.userId, session.user.id),
      orderBy: (table, { desc }) => [desc(table.createdAt)],
      limit: 3,
    }),
    db.select({ count: count() }).from(inquiry).where(eq(inquiry.email, userEmail)),
    db.query.inquiry.findMany({
      columns: {
        id: true,
        subject: true,
        company: true,
        status: true,
        createdAt: true,
      },
      where: (table, { eq }) => eq(table.email, userEmail),
      orderBy: (table, { desc }) => [desc(table.createdAt)],
      limit: 5,
    }),
  ]);

  const inquiryCount = Number(inquiryCountRows[0]?.count ?? 0);
  const activeSessionCount = Number(activeSessionRows[0]?.count ?? 0);
  const pendingInquiryCount = recentInquiries.filter((item) => item.status !== "completed").length;

  const metrics = [
    {
      label: "연결된 로그인",
      value: `${accounts.length}개`,
      description: "소셜 계정 연동 현황 기준",
      tone: "mint" as const,
    },
    {
      label: "활성 세션",
      value: `${activeSessionCount}개`,
      description: "현재 만료되지 않은 로그인 세션 수",
      tone: "violet" as const,
    },
    {
      label: "내 문의 이력",
      value: `${inquiryCount}건`,
      description: `후속 확인 필요 ${pendingInquiryCount}건`,
      tone: "amber" as const,
    },
    {
      label: "계정 상태",
      value: profile?.emailVerified ? "정상 이용 중" : "확인 진행 중",
      description: profile?.emailVerified ? "이메일 확인이 완료된 계정입니다." : "소셜 계정 정보 기준으로 상태를 확인 중입니다.",
      tone: profile?.emailVerified ? "rose" as const : "slate" as const,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-black">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <AdminPageHeader
          eyebrow="My baQoo MODE"
          title="내 계정과 진행 현황을 확인하세요"
          description="현재 마이페이지는 계정 정보, 연결된 소셜 로그인, 최근 로그인 상태, 내 문의 이력을 우선 제공합니다. 작업 진행·전달·동의 관리 영역은 바꿔모드의 실제 제작 흐름에 맞춰 다음 단계에서 순차 확장됩니다."
          actions={<SignOutButton className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.05]" />}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="내 계정 요약" description="현재 로그인한 계정과 권한 상태를 보여줍니다.">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/[0.05] p-3 text-zinc-200">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">기본 프로필</p>
                    <p className="text-lg font-semibold text-white">{profile?.name ?? session.user.name}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-zinc-300">
                  <p>{profile?.email ?? session.user.email}</p>
                  <p>가입일 {formatDateTime(profile?.createdAt)}</p>
                  <div className="flex flex-wrap gap-2">
                    <StatusBadge label={profile?.emailVerified ? "이메일 인증 완료" : "이메일 인증 확인중"} tone={profile?.emailVerified ? "mint" : "amber"} />
                    <StatusBadge label={`연결 계정 ${accounts.length}개`} tone="slate" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/[0.05] p-3 text-zinc-200">
                    <CalendarClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">로그인 상태</p>
                    <p className="text-lg font-semibold text-white">최근 접속 {formatRelativeTime(recentSessions[0]?.createdAt)}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-zinc-300">
                  <p>활성 세션 {activeSessionCount}개</p>
                  <p>최근 로그인 기기와 접속 상태를 아래에서 다시 확인할 수 있습니다.</p>
                  <p className="text-zinc-500">마이페이지는 계정 확인과 문의 흐름 파악에 집중한 사용자용 공간입니다.</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="연결된 로그인 계정" description="현재 계정에 연결된 소셜 로그인 수단입니다.">
            <div className="space-y-3">
              {accounts.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{getProviderLabel(item.providerId)}</p>
                      <p className="mt-1 text-sm text-zinc-400">연결일 {formatDateTime(item.createdAt)}</p>
                    </div>
                    <StatusBadge label="연결됨" tone="mint" />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="내 문의 이력" description="현재 로그인 이메일과 일치하는 문의만 모아 보여줍니다.">
            {recentInquiries.length > 0 ? (
              <div className="space-y-3">
                {recentInquiries.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/8 bg-[#0d1117] p-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-medium text-white">{item.subject}</p>
                        <p className="mt-1 text-sm text-zinc-400">
                          문의번호 {item.id} · {item.company || "개인 문의"}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <StatusBadge label={formatInquiryStatus(item.status)} tone={inquiryTone(item.status)} />
                        <span className="text-xs text-zinc-500">{formatRelativeTime(item.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-sm leading-6 text-zinc-400">
                현재 로그인한 이메일로 접수된 문의가 아직 없습니다. 문의를 남기면 이 영역에서 진행 이력을 먼저 확인할 수 있게 확장합니다.
              </div>
            )}
          </SectionCard>

          <SectionCard title="최근 접속 정보" description="보안을 위해 최근 로그인 흔적을 간단히 확인할 수 있습니다.">
            <div className="space-y-3">
              {recentSessions.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{item.userAgent || "기기 정보 없음"}</p>
                      <p className="mt-1 text-sm text-zinc-400">IP {item.ipAddress || "기록 없음"}</p>
                    </div>
                    <StatusBadge label={toDate(item.expiresAt) && toDate(item.expiresAt)! > now ? "유효" : "만료 예정"} tone="slate" />
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">로그인 {formatDateTime(item.createdAt)} · 만료 {formatDateTime(item.expiresAt)}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="바꿔모드 작업 준비중" description="실제 운영 흐름에 맞춘 마이페이지 확장 예정 영역입니다.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {comingSoonCards.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-2xl bg-white/[0.05] p-3 text-zinc-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <StatusBadge label="준비중" tone="amber" />
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard title="다음 단계 안내" description="사용자 기준으로 마이페이지가 확장될 다음 영역입니다.">
          <div className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-[#00dfb6]/10 p-3 text-[#00dfb6]">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">문의 → 제작 → 전달 흐름으로 순차 확장됩니다.</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  현재는 계정과 문의 중심으로 먼저 보이고, 이후 작업 진행 현황·최종 전달물·공개 동의 관리까지 이 마이페이지 안에서 자연스럽게 이어지도록 설계되어 있습니다.
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}