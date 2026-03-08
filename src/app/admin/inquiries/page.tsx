import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { recentInquiries } from "@/lib/admin-dashboard-data";

function toneByStatus(status: string) {
  if (["신규", "협의중"].includes(status)) return "mint" as const;
  if (["검토중", "견적발송", "연락완료"].includes(status)) return "amber" as const;
  if (["완료"].includes(status)) return "violet" as const;
  return "slate" as const;
}

export default function AdminInquiriesPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Inquiry Management"
        title="유입 채널별 문의를 빠르게 분류하고 후속 작업으로 연결하세요"
        description="홈페이지, 카카오채널, 인스타 DM, 이메일 등으로 들어오는 문의를 하나의 흐름으로 모았습니다. 이후 작업건 생성과 담당자 배정까지 이어지는 시작점입니다."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["전체 문의", "24건"],
          ["신규 문의", "8건"],
          ["B2B 문의", "5건"],
          ["동의 확인 필요", "3건"],
        ].map(([label, value], index) => (
          <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <StatusBadge label={label} tone={index === 1 ? "mint" : index === 3 ? "amber" : "slate"} />
            <p className="mt-4 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <SectionCard title="문의 리스트" description="유형, 채널, 상태 기준으로 빠르게 분류할 수 있도록 설계했습니다.">
        <div className="mb-5 grid gap-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <Input placeholder="고객명, 문의번호, 회사명 검색" className="border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500" />
          <Select defaultValue="all-status">
            <SelectTrigger className="w-full border-white/10 bg-white/[0.03] text-white">
              <SelectValue placeholder="상태 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">전체 상태</SelectItem>
              <SelectItem value="new">신규</SelectItem>
              <SelectItem value="review">검토중</SelectItem>
              <SelectItem value="sent">견적발송</SelectItem>
              <SelectItem value="done">완료</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-channel">
            <SelectTrigger className="w-full border-white/10 bg-white/[0.03] text-white">
              <SelectValue placeholder="채널 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-channel">전체 채널</SelectItem>
              <SelectItem value="homepage">홈페이지</SelectItem>
              <SelectItem value="kakao">카카오채널</SelectItem>
              <SelectItem value="insta">인스타그램</SelectItem>
              <SelectItem value="email">이메일</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              <tr className="border-b border-white/5">
                <th className="pb-3 font-medium">문의번호</th>
                <th className="pb-3 font-medium">고객</th>
                <th className="pb-3 font-medium">문의 유형</th>
                <th className="pb-3 font-medium">관심 항목</th>
                <th className="pb-3 font-medium">유입 채널</th>
                <th className="pb-3 font-medium">상태</th>
                <th className="pb-3 font-medium">접수일</th>
              </tr>
            </thead>
            <tbody>
              {recentInquiries.map((item) => (
                <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                  <td className="py-4 font-medium text-white">{item.id}</td>
                  <td className="py-4">{item.customer}</td>
                  <td className="py-4">{item.type}</td>
                  <td className="py-4 text-zinc-400">{item.target}</td>
                  <td className="py-4 text-zinc-400">{item.channel}</td>
                  <td className="py-4">
                    <StatusBadge label={item.status} tone={toneByStatus(item.status)} />
                  </td>
                  <td className="py-4 text-zinc-400">{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}