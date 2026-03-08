import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { consentItems } from "@/lib/admin-dashboard-data";

export default function AdminConsentsPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Consent Control"
        title="공개 여부와 홍보 활용 범위를 명확히 관리합니다"
        description="반려동물, 가족, 기념일 영상처럼 민감한 콘텐츠가 많기 때문에 공개 업로드와 홍보 활용은 반드시 고객 동의를 기준으로 관리해야 합니다."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["공개 동의", "6건", "mint"],
          ["비공개 요청", "9건", "rose"],
          ["재확인 필요", "3건", "amber"],
          ["홍보 활용 가능", "5건", "violet"],
        ].map(([label, value, tone]) => (
          <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <StatusBadge label={label} tone={tone as "mint" | "rose" | "amber" | "violet"} />
            <p className="mt-4 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="동의 현황 리스트" description="고객별 공개/비공개 여부와 플랫폼 허용 범위를 정리한 표입니다.">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                <tr className="border-b border-white/5">
                  <th className="pb-3 font-medium">동의번호</th>
                  <th className="pb-3 font-medium">고객</th>
                  <th className="pb-3 font-medium">공개 공유</th>
                  <th className="pb-3 font-medium">홍보 활용</th>
                  <th className="pb-3 font-medium">유튜브</th>
                  <th className="pb-3 font-medium">SNS</th>
                  <th className="pb-3 font-medium">갱신일</th>
                </tr>
              </thead>
              <tbody>
                {consentItems.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                    <td className="py-4 font-medium text-white">{item.id}</td>
                    <td className="py-4">{item.customer}</td>
                    <td className="py-4">
                      <StatusBadge label={item.publicSharing} tone={item.publicSharing === "동의" ? "mint" : item.publicSharing === "비동의" ? "rose" : "amber"} />
                    </td>
                    <td className="py-4">
                      <StatusBadge label={item.promotionalUse} tone={item.promotionalUse.includes("동의") ? "violet" : item.promotionalUse === "비동의" ? "rose" : "amber"} />
                    </td>
                    <td className="py-4 text-zinc-400">{item.youtube}</td>
                    <td className="py-4 text-zinc-400">{item.sns}</td>
                    <td className="py-4 text-zinc-400">{item.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="운영 체크리스트" description="공개 활용과 관련해 내부적으로 반드시 지켜야 하는 기준입니다.">
          <div className="space-y-3 text-sm leading-6 text-zinc-300">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">고객이 공개를 원하지 않으면 유튜브/인스타/틱톡 게시를 모두 차단합니다.</div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">유튜브 일부공개도 완전한 비밀 보관이 아니므로 고객에게 명확히 고지합니다.</div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">반려동물·가족·아동 관련 콘텐츠는 기본값을 비공개로 두는 운영이 안전합니다.</div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">동의 철회 요청이 들어오면 게시 링크 제거와 내부 기록 갱신이 동시에 이뤄져야 합니다.</div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}