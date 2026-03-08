import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";

const supportItems = [
  { name: "전달 완료 안내 템플릿", category: "메시지 템플릿", status: "사용중" },
  { name: "다운로드 기간 안내", category: "메시지 템플릿", status: "사용중" },
  { name: "게시 동의 요청", category: "동의 템플릿", status: "검토중" },
  { name: "재전달 요청 답변", category: "CS 템플릿", status: "초안" },
];

export default function AdminSupportPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Support Control"
        title="공지/FAQ보다 먼저 메시지 템플릿 운영이 중요한 구조입니다"
        description="바꿔모드의 고객지원은 상품 하자 대응보다 전달 안내, 동의 확인, 재전달 응대가 큰 비중을 차지합니다. 그래서 템플릿 관리 중심으로 구성했습니다."
      />

      <SectionCard title="운영 템플릿" description="전달형 서비스에 필요한 템플릿 관리 예시입니다.">
        <div className="space-y-3">
          {supportItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.category}</p>
              </div>
              <StatusBadge label={item.status} tone={item.status === "사용중" ? "mint" : item.status === "검토중" ? "amber" : "slate"} />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}