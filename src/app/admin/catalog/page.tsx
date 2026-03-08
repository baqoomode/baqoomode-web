import { AdminPageHeader, SectionCard, StatusBadge } from "@/components/admin/admin-ui";
import { modeCatalog, productCatalog } from "@/lib/admin-dashboard-data";

export default function AdminCatalogPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        eyebrow="Catalog Control"
        title="모드 패키지와 제품 라인업을 운영 관점에서 관리합니다"
        description="바꿔모드의 판매 구조는 일반 재고 판매보다 패키지 제안형에 가깝습니다. 그래서 B2C 모드와 B2B 라인업을 함께 관리하되, 카피/노출/프로모션 상태를 중심으로 보는 구성이 적합합니다."
      />

      <SectionCard title="B2C 모드 관리" description="감성 카피와 패키지 설명, 가격, 프로모션 상태를 한눈에 관리합니다.">
        <div className="grid gap-4 xl:grid-cols-2">
          {modeCatalog.map((mode) => (
            <div
              key={mode.name}
              className={`rounded-[28px] border border-white/8 bg-gradient-to-br ${mode.accent} via-white/[0.03] p-6`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{mode.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{mode.summary}</p>
                </div>
                <StatusBadge label={mode.status} tone={mode.status === "프로모션" ? "amber" : "mint"} />
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                <p className="text-sm text-zinc-400">기본 가격</p>
                <p className="font-semibold text-white">{mode.price}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="B2B 제품 라인업" description="기술 사양과 노출 상태 중심으로 제품 카탈로그를 관리하는 영역입니다.">
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {productCatalog.map((product) => (
            <div key={product.name} className="rounded-3xl border border-white/8 bg-[#0d1117] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{product.type}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
                </div>
                <StatusBadge
                  label={product.status}
                  tone={product.status === "준비중" ? "amber" : product.status === "노출중" ? "mint" : "violet"}
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{product.summary}</p>
              <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">주요 스펙</p>
                <p className="mt-2 text-sm text-zinc-200">{product.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}