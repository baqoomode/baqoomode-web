import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { contentItems } from "@/lib/admin-dashboard-data";

export default function AdminContentsPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Digital Contents"
        title="고객별 제작 파일과 홍보용 파생 콘텐츠를 함께 관리합니다"
        description="작업건은 고객 단위라면, 이 화면은 파일 단위 관리에 가깝습니다. 최종 영상, 이모티콘 ZIP, 홍보 숏클립, 썸네일까지 연결 상태를 빠르게 확인할 수 있습니다."
      />

      <SectionCard title="콘텐츠 보관 현황" description="만료형 전달 파일과 장기 열람용 홍보 파일을 구분해서 관리하는 예시입니다.">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              <tr className="border-b border-white/5">
                <th className="pb-3 font-medium">콘텐츠번호</th>
                <th className="pb-3 font-medium">파일명</th>
                <th className="pb-3 font-medium">유형</th>
                <th className="pb-3 font-medium">소유 고객</th>
                <th className="pb-3 font-medium">상태</th>
                <th className="pb-3 font-medium">만료</th>
              </tr>
            </thead>
            <tbody>
              {contentItems.map((item) => (
                <tr key={item.id} className="border-b border-white/5 text-zinc-300 last:border-0">
                  <td className="py-4 font-medium text-white">{item.id}</td>
                  <td className="py-4">{item.name}</td>
                  <td className="py-4 text-zinc-400">{item.type}</td>
                  <td className="py-4">{item.owner}</td>
                  <td className="py-4">
                    <StatusBadge
                      label={item.state}
                      tone={item.state === "승인 완료" ? "mint" : item.state === "검토중" ? "amber" : item.state === "게시 완료" ? "violet" : "slate"}
                    />
                  </td>
                  <td className="py-4 text-zinc-400">{item.expiresAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}