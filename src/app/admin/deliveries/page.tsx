import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { deliveries } from "@/lib/admin-dashboard-data";

export default function AdminDeliveriesPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Delivery Management"
        title="카카오톡과 이메일 전달 이력을 중심으로 관리합니다"
        description="바꿔모드의 디지털 콘텐츠는 고객에게 전달된 뒤 직접 저장하도록 안내하는 방식이므로, 발송 성공 여부와 만료 일정이 핵심 운영 지표가 됩니다."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["카카오톡 전달", "12건", "mint"],
          ["이메일 전달", "7건", "violet"],
          ["재전달 요청", "2건", "amber"],
          ["발송 실패", "1건", "rose"],
        ].map(([label, value, tone]) => (
          <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <StatusBadge label={label} tone={tone as "mint" | "violet" | "amber" | "rose"} />
            <p className="mt-4 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard title="전달 이력" description="채널별 발송 결과와 만료일을 한 번에 확인할 수 있습니다.">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                <tr className="border-b border-white/5">
                  <th className="pb-3 font-medium">전달번호</th>
                  <th className="pb-3 font-medium">고객</th>
                  <th className="pb-3 font-medium">채널</th>
                  <th className="pb-3 font-medium">콘텐츠</th>
                  <th className="pb-3 font-medium">상태</th>
                  <th className="pb-3 font-medium">만료일</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                    <td className="py-4 font-medium text-white">{item.id}</td>
                    <td className="py-4">{item.customer}</td>
                    <td className="py-4 text-zinc-400">{item.channel}</td>
                    <td className="py-4">{item.content}</td>
                    <td className="py-4">
                      <StatusBadge
                        label={item.status}
                        tone={
                          item.status === "전달 완료"
                            ? "violet"
                            : item.status === "발송 예정"
                              ? "amber"
                              : item.status === "발송 실패"
                                ? "rose"
                                : "slate"
                        }
                      />
                    </td>
                    <td className="py-4 text-zinc-400">{item.expiresAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="전달 운영 가이드" description="실제 운영에서 반드시 체크해야 하는 전달 원칙입니다.">
          <div className="space-y-3">
            {[
              "카카오톡 전달 후 동일 링크를 이메일로 백업 발송합니다.",
              "다운로드 가능 기간과 개인 저장 안내 문구를 함께 전송합니다.",
              "유튜브 링크는 전달 완료 후 별도 안내하며 영구 보관을 약속하지 않습니다.",
              "발송 실패 시 연락처 재확인 후 재전달 이력으로 남깁니다.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}