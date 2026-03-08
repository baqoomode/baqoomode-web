import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { workItems } from "@/lib/admin-dashboard-data";

export default function AdminWorkItemsPage() {
  const columns = [
    { title: "제작중", items: workItems.filter((item) => item.production !== "완료" && item.production !== "최종본 완료") },
    { title: "전달대기", items: workItems.filter((item) => item.delivery.includes("대기") || item.delivery === "미준비") },
    { title: "게시/동의대기", items: workItems.filter((item) => item.publishing.includes("대기") || item.publishing === "미정") },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Work Item Pipeline"
        title="고객별 제작건을 한 화면에서 추적할 수 있게 설계했습니다"
        description="일반 주문번호 대신 작업번호를 중심으로, 액자/사진/영상/이모티콘 패키지를 하나의 운영 단위로 관리합니다. 이후 전달/게시/동의 상태까지 모두 연결됩니다."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {columns.map((column) => (
          <SectionCard
            key={column.title}
            title={column.title}
            description={`${column.items.length}건이 현재 이 구간에 머물러 있습니다.`}
            className="bg-[#0d1117]"
          >
            <div className="space-y-3">
              {column.items.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{item.customer}</p>
                    <StatusBadge label={item.mode} tone="slate" />
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{item.packageType}</p>
                  <div className="mt-4 space-y-2 text-xs text-zinc-500">
                    <p>제작: {item.production}</p>
                    <p>전달: {item.delivery}</p>
                    <p>게시: {item.publishing}</p>
                    <p>담당자: {item.owner} · 마감 {item.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="전체 작업건 리스트" description="작업 유형, 전달 상태, 게시 상태를 동시에 볼 수 있는 상세 목록입니다.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              <tr className="border-b border-white/5">
                <th className="pb-3 font-medium">작업번호</th>
                <th className="pb-3 font-medium">고객</th>
                <th className="pb-3 font-medium">모드/유형</th>
                <th className="pb-3 font-medium">제작 상태</th>
                <th className="pb-3 font-medium">전달 상태</th>
                <th className="pb-3 font-medium">게시 상태</th>
                <th className="pb-3 font-medium">담당자</th>
                <th className="pb-3 font-medium">마감</th>
              </tr>
            </thead>
            <tbody>
              {workItems.map((item) => (
                <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                  <td className="py-4 font-medium text-white">{item.id}</td>
                  <td className="py-4">{item.customer}</td>
                  <td className="py-4">
                    <div>
                      <p>{item.mode}</p>
                      <p className="mt-1 text-xs text-zinc-500">{item.packageType}</p>
                    </div>
                  </td>
                  <td className="py-4"><StatusBadge label={item.production} tone="violet" /></td>
                  <td className="py-4"><StatusBadge label={item.delivery} tone="amber" /></td>
                  <td className="py-4"><StatusBadge label={item.publishing} tone="slate" /></td>
                  <td className="py-4 text-zinc-400">{item.owner}</td>
                  <td className="py-4 text-zinc-400">{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}