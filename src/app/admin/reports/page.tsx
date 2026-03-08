import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";

const reportCards = [
  { label: "문의 → 작업건 전환율", value: "58%", tone: "mint" as const },
  { label: "전달 완료율", value: "91%", tone: "violet" as const },
  { label: "공개 동의율", value: "34%", tone: "amber" as const },
  { label: "재전달 요청률", value: "8%", tone: "rose" as const },
];

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Insight Snapshot"
        title="무엇이 잘 팔리는지보다 무엇이 잘 전달되는지 보는 리포트"
        description="이 관리자 구조의 핵심은 주문량보다 운영 전환입니다. 문의가 작업건으로 이어지는지, 전달이 잘 끝나는지, 공개 동의가 얼마나 나오는지가 중요합니다."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((card) => (
          <div key={card.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <StatusBadge label={card.label} tone={card.tone} />
            <p className="mt-4 text-3xl font-black text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <SectionCard title="리포트 활용 가이드" description="실제 데이터가 붙으면 우선 봐야 할 지표 방향입니다.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
            카카오톡과 이메일 중 어떤 채널에서 전달 완료율이 높은지 비교해 기본 정책을 최적화합니다.
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
            공개 동의율이 높은 모드나 상품을 파악하면 향후 브랜딩/후기 운영 전략을 더 정교하게 가져갈 수 있습니다.
          </div>
        </div>
      </SectionCard>
    </div>
  );
}