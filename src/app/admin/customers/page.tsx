import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { customerItems } from "@/lib/admin-dashboard-data";

export default function AdminCustomersPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Customer Ledger"
        title="회원 정보와 실제 고객 관계 이력을 함께 보는 화면입니다"
        description="소셜 로그인 여부만 보는 것이 아니라, 작업건 수, 공개 성향, 전달 선호까지 함께 확인할 수 있도록 구성했습니다."
      />

      <SectionCard title="고객 목록" description="실제 운영에서는 문의, 작업건, 전달, 게시 이력과 연결되는 중심 화면이 됩니다.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              <tr className="border-b border-white/5">
                <th className="pb-3 font-medium">고객명</th>
                <th className="pb-3 font-medium">연락처</th>
                <th className="pb-3 font-medium">이메일</th>
                <th className="pb-3 font-medium">로그인</th>
                <th className="pb-3 font-medium">작업건</th>
                <th className="pb-3 font-medium">공개 성향</th>
              </tr>
            </thead>
            <tbody>
              {customerItems.map((item) => (
                <tr key={item.email} className="border-b border-white/5 text-zinc-300 last:border-0">
                  <td className="py-4 font-medium text-white">{item.name}</td>
                  <td className="py-4 text-zinc-400">{item.contact}</td>
                  <td className="py-4">{item.email}</td>
                  <td className="py-4 text-zinc-400">{item.login}</td>
                  <td className="py-4">{item.works}건</td>
                  <td className="py-4">
                    <StatusBadge label={item.preference} tone={item.preference.includes("동의") ? "mint" : item.preference.includes("검토") ? "amber" : "slate"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}