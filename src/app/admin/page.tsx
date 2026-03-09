import { Boxes, Clock3, Film, MessageSquareText, ShieldCheck, Users } from "lucide-react";
import { count, desc, eq, gt, gte } from "drizzle-orm";
import { AdminPageHeader, MetricCard, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { db } from "@/db";
import { adminUser, inquiry, product, productVariant, session, user } from "@/db/schema";
import { getAdminRoleLabel } from "@/lib/admin-access";

export const runtime = "edge";

const policyCards = [
  {
    title: "메인 전달 채널",
    desc: "카카오톡과 이메일을 기본으로 사용하고, 고객이 직접 저장하도록 안내합니다.",
    icon: MessageSquareText,
  },
  {
    title: "장기 열람 보조",
    desc: "유튜브는 고객 동의 시 공개/일부공개로 활용하며, 영구 보관을 보장하지 않습니다.",
    icon: Film,
  },
  {
    title: "공개 동의 우선",
    desc: "반려동물·가족·기념일 콘텐츠 특성상 공개 여부와 홍보 활용 범위를 별도 관리합니다.",
    icon: ShieldCheck,
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

function formatInquiryStatus(status: string | null) {
  switch (status) {
    case "pending":
      return "대기";
    case "processing":
      return "진행중";
    case "completed":
      return "완료";
    default:
      return status ?? "미정";
  }
}

function inquiryTone(status: string | null) {
  if (status === "pending") return "mint" as const;
  if (status === "processing") return "amber" as const;
  if (status === "completed") return "violet" as const;
  return "slate" as const;
}

export default async function AdminDashboardPage() {
  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const [
    inquiryStatusRows,
    todayInquiryRows,
    productCountRows,
    variantCountRows,
    userCountRows,
    activeSessionCountRows,
    recentInquiries,
    recentProducts,
    recentUsers,
    activeAdmins,
  ] = await Promise.all([
    db.select({ status: inquiry.status, count: count() }).from(inquiry).groupBy(inquiry.status),
    db.select({ count: count() }).from(inquiry).where(gte(inquiry.createdAt, startOfToday)),
    db.select({ count: count() }).from(product),
    db.select({ productId: productVariant.productId, count: count() }).from(productVariant).groupBy(productVariant.productId),
    db.select({ count: count() }).from(user),
    db.select({ count: count() }).from(session).where(gt(session.expiresAt, now)),
    db.query.inquiry.findMany({
      columns: {
        id: true,
        name: true,
        company: true,
        subject: true,
        status: true,
        createdAt: true,
      },
      orderBy: (table, { desc }) => [desc(table.createdAt)],
      limit: 5,
    }),
    db.query.product.findMany({
      columns: {
        id: true,
        name: true,
        category: true,
        description: true,
        updatedAt: true,
      },
      orderBy: (table, { desc }) => [desc(table.updatedAt)],
      limit: 4,
    }),
    db.query.user.findMany({
      columns: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
      },
      orderBy: (table, { desc }) => [desc(table.createdAt)],
      limit: 4,
    }),
    db
      .select({
        id: adminUser.id,
        role: adminUser.role,
        createdAt: adminUser.createdAt,
        userName: user.name,
        userEmail: user.email,
      })
      .from(adminUser)
      .innerJoin(user, eq(adminUser.userId, user.id))
      .where(eq(adminUser.isActive, true))
      .orderBy(desc(adminUser.createdAt)),
  ]);

  const inquiryCountByStatus = new Map(
    inquiryStatusRows.map((row) => [row.status ?? "unknown", Number(row.count)])
  );
  const totalInquiryCount = inquiryStatusRows.reduce((sum, row) => sum + Number(row.count), 0);
  const pendingInquiryCount = inquiryCountByStatus.get("pending") ?? 0;
  const processingInquiryCount = inquiryCountByStatus.get("processing") ?? 0;
  const completedInquiryCount = inquiryCountByStatus.get("completed") ?? 0;
  const todayInquiryCount = Number(todayInquiryRows[0]?.count ?? 0);
  const productCount = Number(productCountRows[0]?.count ?? 0);
  const variantCount = variantCountRows.reduce((sum, row) => sum + Number(row.count), 0);
  const userCount = Number(userCountRows[0]?.count ?? 0);
  const activeSessionCount = Number(activeSessionCountRows[0]?.count ?? 0);
  const activeAdminCount = activeAdmins.length;
  const productsWithVariantsCount = variantCountRows.length;
  const productsWithoutVariantsCount = Math.max(productCount - productsWithVariantsCount, 0);
  const variantCountByProduct = new Map(
    variantCountRows.map((row) => [row.productId, Number(row.count)])
  );
  const followUpInquiryCount = pendingInquiryCount + processingInquiryCount;

  const dashboardMetrics = [
    {
      label: "전체 문의",
      value: `${totalInquiryCount}건`,
      description: `오늘 접수 ${todayInquiryCount}건 · 최근 상태별 누적 기준`,
      tone: "mint" as const,
    },
    {
      label: "처리 대기 문의",
      value: `${pendingInquiryCount}건`,
      description: `진행중 ${processingInquiryCount}건 · 완료 ${completedInquiryCount}건`,
      tone: "amber" as const,
    },
    {
      label: "상품 카탈로그",
      value: `${productCount}개 / ${variantCount}종`,
      description: "상품 테이블과 옵션 테이블을 합산한 현재 운영 자산입니다.",
      tone: "violet" as const,
    },
    {
      label: "회원 현황",
      value: `${userCount}명`,
      description: `활성 관리자 ${activeAdminCount}명 · 로그인 세션 ${activeSessionCount}개`,
      tone: "rose" as const,
    },
  ];

  const priorityBlocks = [
    {
      title: "문의 후속 대응",
      description: "대기와 진행중 문의를 우선 처리해 작업건 전환 흐름을 만들 수 있습니다.",
      value: `${followUpInquiryCount}건`,
      icon: MessageSquareText,
      tone: "mint" as const,
    },
    {
      title: "카탈로그 보완 대상",
      description:
        productsWithoutVariantsCount > 0
          ? `옵션이 아직 없는 상품 ${productsWithoutVariantsCount}개를 상세화할 수 있습니다.`
          : "현재 등록된 모든 상품에 최소 1개 이상의 옵션이 연결되어 있습니다.",
      value: `${productsWithoutVariantsCount}개`,
      icon: Boxes,
      tone: "amber" as const,
    },
    {
      title: "권한/접속 점검",
      description: `활성 관리자 ${activeAdminCount}명 기준으로 현재 로그인 세션을 확인합니다.`,
      value: `${activeSessionCount}개`,
      icon: Users,
      tone: "rose" as const,
    },
  ];

  const activityFeed = [
    `오늘 새로 접수된 문의는 ${todayInquiryCount}건입니다.`,
    `후속 대응이 필요한 문의는 대기 ${pendingInquiryCount}건, 진행중 ${processingInquiryCount}건입니다.`,
    `현재 상품 ${productCount}개에 연결된 옵션은 총 ${variantCount}종입니다.`,
    `운영 계정은 전체 ${userCount}명이며 활성 관리자 ${activeAdminCount}명이 접근할 수 있습니다.`,
    "작업건·전달·동의 데이터는 다음 단계에서 별도 테이블 설계 후 연동할 예정입니다.",
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Operations Overview"
        title="현재 운영 실데이터를 한눈에 확인하세요"
        description="관리자 홈은 현재 DB에 연결된 문의, 상품, 회원, 권한 데이터를 기준으로 우선순위를 보여줍니다. 작업건·전달·동의 영역은 다음 단계에서 별도 테이블 설계 후 확장할 예정입니다."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {priorityBlocks.map((block) => {
          const Icon = block.icon;
          return (
            <SectionCard
              key={block.title}
              title={block.title}
              description={block.description}
              className="bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <StatusBadge label="실데이터 기준" tone={block.tone} />
                  <p className="mt-4 text-3xl font-black tracking-tight text-white">{block.value}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-zinc-200">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </SectionCard>
          );
        })}
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="최근 문의" description="현재 inquiry 테이블에 저장된 최신 문의를 바로 보여줍니다.">
          {recentInquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  <tr className="border-b border-white/5">
                    <th className="pb-3 font-medium">문의번호</th>
                    <th className="pb-3 font-medium">고객</th>
                    <th className="pb-3 font-medium">회사명</th>
                    <th className="pb-3 font-medium">제목</th>
                    <th className="pb-3 font-medium">상태</th>
                    <th className="pb-3 font-medium">접수</th>
                  </tr>
                </thead>
                <tbody>
                  {recentInquiries.map((item) => (
                    <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                      <td className="py-4 font-medium text-white">{item.id}</td>
                      <td className="py-4">{item.name}</td>
                      <td className="py-4 text-zinc-400">{item.company || "개인 고객"}</td>
                      <td className="py-4">{item.subject}</td>
                      <td className="py-4">
                        <StatusBadge label={formatInquiryStatus(item.status)} tone={inquiryTone(item.status)} />
                      </td>
                      <td className="py-4 text-zinc-400">{formatRelativeTime(item.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm leading-6 text-zinc-400">아직 저장된 문의가 없습니다.</p>
          )}
        </SectionCard>

        <SectionCard title="운영 데이터 피드" description="현재 연결된 실데이터에서 바로 읽은 핵심 상황입니다.">
          <div className="space-y-4">
            {activityFeed.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-[#00dfb6]/10 p-2 text-[#00dfb6]">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="카탈로그 현황" description="product / product_variant 테이블 기준 최근 업데이트된 항목입니다.">
          {recentProducts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {recentProducts.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{item.name}</p>
                    <StatusBadge label={item.category} tone="slate" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description || "등록된 설명이 아직 없습니다."}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                    <span>옵션 {variantCountByProduct.get(item.id) ?? 0}종</span>
                    <span>업데이트 {formatDateTime(item.updatedAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-6 text-zinc-400">아직 등록된 상품이 없습니다.</p>
          )}
        </SectionCard>

        <SectionCard title="권한 및 계정 현황" description="활성 관리자와 최근 가입 계정을 함께 확인합니다.">
          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">활성 관리자</h3>
                <span className="text-xs text-zinc-500">{activeAdminCount}명</span>
              </div>
              <div className="space-y-3">
                {activeAdmins.length > 0 ? (
                  activeAdmins.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-white">{item.userName}</p>
                          <p className="mt-1 text-sm text-zinc-400">{item.userEmail}</p>
                        </div>
                        <StatusBadge label={getAdminRoleLabel(item.role)} tone="violet" />
                      </div>
                      <p className="mt-3 text-xs text-zinc-500">권한 부여 {formatDateTime(item.createdAt)}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm leading-6 text-zinc-400">활성 관리자 계정이 아직 없습니다.</p>
                )}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">최근 가입 회원</h3>
                <span className="text-xs text-zinc-500">최신 4명</span>
              </div>
              <div className="space-y-3">
                {recentUsers.length > 0 ? (
                  recentUsers.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                          <p className="mt-1 text-sm text-zinc-400">{item.email}</p>
                        </div>
                        <StatusBadge
                          label={item.emailVerified ? "인증완료" : "미인증"}
                          tone={item.emailVerified ? "mint" : "amber"}
                        />
                      </div>
                      <p className="mt-3 text-xs text-zinc-500">가입 {formatDateTime(item.createdAt)}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm leading-6 text-zinc-400">아직 가입한 회원이 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="콘텐츠 운영 원칙" description="이번 관리자 홈의 기준이 되는 전달형 운영 정책입니다.">
        <div className="grid gap-4 md:grid-cols-3">
          {policyCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/[0.05] p-3 text-zinc-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}