import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductDetailClient } from "@/app/products/[id]/product-detail-client";

// export const runtime = "edge";

const PRODUCTS_DATA = {
    "light-board": {
        id: "light-board",
        name: "발광보드 (이미지 교체형 면발광 보드)",
        description: "인테리어 마감재와 조화롭게 사용 가능한 신소재 보드. 이미지 교체만으로 공간의 분위기를 즉각 전환합니다.",
        specs: [
            { label: "특징 1", value: "이미지 패널 교체로 즉시 무드 전환" },
            { label: "특징 2", value: "인테리어 마감재와 혼용 시공 가능" },
            { label: "구조", value: "슬림 & 경량 프로파일" },
            { label: "적용", value: "프랜차이즈 간판, 실내 아트월" }
        ],
        powerSpecs: "DC 48V, 4500lux 이상, 색온도 5700k, CRI 80이상, 조사각 170°",
        modelSpecs: [
            { model: "IB-624", size: "600×2400mm", power: "60W", weight: "4.5kg", note: "벽면 전면 시공용 (두께 10t)" },
            { model: "IB-1212", size: "1200×1200mm", power: "60W", weight: "4.5kg", note: "두께 10t" },
            { model: "IB-1224", size: "1200×2400mm", power: "110W", weight: "9.2kg", note: "최대 사이즈 (두께 10t)" },
            { model: "SB-48", size: "500×500mm", power: "18W", weight: "1.5kg", note: "사각 Type (두께 7t)" },
            { model: "SB-90", size: "900×900mm", power: "30W", weight: "2.6kg", note: "사각 Type (두께 7t)" },
            { model: "RB-72", size: "460×720mm (34\")", power: "12W", weight: "1.6kg", note: "직사각 Type (두께 7t)" },
            { model: "RB-90", size: "550×900mm (41\")", power: "18W", weight: "2.3kg", note: "직사각 Type (두께 7t)" },
            { model: "RB-112", size: "720×1120mm (52\")", power: "30W", weight: "4.0kg", note: "직사각 Type (두께 7t)" }
        ]
    },
    "polygon-board": {
        id: "polygon-board",
        name: "다각형보드 (조형적 다각형 라이팅)",
        description: "삼각, 육각, 원형 등 정형화된 사각형을 벗어난 조형적 라이팅. 공간에 강렬한 포인트를 제공합니다.",
        specs: [
            { label: "디자인", value: "조형적 디자인 포인트 부여" },
            { label: "활용", value: "다각형 내 이미지 패널 교체 가능" },
            { label: "제작", value: "비규격 형상 맞춤 협의 가능" },
            { label: "효과", value: "3D 입체 효과 및 다각도 시선 집중" }
        ],
        powerSpecs: "DC 48V, 4500lux 이상, 색온도 5700k, 두께 7t",
        modelSpecs: [
            { model: "TB (삼각형)", size: "643×742mm", power: "11W", weight: "1.4kg", note: "-" },
            { model: "HB (육각형)", size: "373×646mm", power: "18W", weight: "1.5kg", note: "-" },
            { model: "CB (원형)", size: "외경 975mm", power: "42W", weight: "4.4kg", note: "-" }
        ]
    },
    "round-board": {
        id: "round-board",
        name: "라운드보드 (플렉시블 곡면 보드)",
        description: "곡면(Wave) 구조를 구현할 수 있는 플렉시블 보드. 기둥이나 곡선 벽면 등 구조적 제약을 최소화합니다.",
        specs: [
            { label: "형태", value: "플렉시블 곡면 구현" },
            { label: "기능", value: "곡면에서도 꺾임 없는 균일한 발광" },
            { label: "가공", value: "맞춤형 곡률(R값) 정밀 제작 지원" },
            { label: "적용", value: "원형 기둥, 유선형 프론트 데스크" }
        ],
        powerSpecs: "프로젝트별 맞춤 설계 — 별도 문의를 통해 협의해 주세요.",
    },
    "hanji-board": {
        id: "hanji-board",
        name: "한지보드 (한지 감성 면발광 보드)",
        description: "한지 특유의 질감과 면발광 기술이 어우러진 감성 보드. 눈부심 없는 안정적인 조도를 제공합니다.",
        specs: [
            { label: "조도", value: "부드러운 빛 확산 (Glare-free 설계)" },
            { label: "소재", value: "전통 한지 텍스처의 독특한 감성" },
            { label: "분위기", value: "안정적이고 정적인 무드 조성" },
            { label: "적용", value: "고급 한식당, 갤러리, 프라이빗 룸" }
        ],
        powerSpecs: "DC 48V, 4500lux 이상, 색온도 5700k",
        modelSpecs: [
            { model: "표준폼 500", size: "500×500mm", power: "18W", weight: "1.5kg", note: "-" },
            { model: "표준폼 900", size: "900×900mm", power: "30W", weight: "2.6kg", note: "-" },
            { model: "멀티 624", size: "600×2400mm", power: "60W", weight: "4.5kg", note: "대형 벽면용" },
            { model: "멀티 1212", size: "1200×1200mm", power: "60W", weight: "4.5kg", note: "-" },
            { model: "멀티 1224", size: "1200×2400mm", power: "110W", weight: "9.2kg", note: "-" }
        ]
    },
    "line-board": {
        id: "line-board",
        name: "띠보드 (라인형 고휘도 조명)",
        description: "코너, 벽 상부, 기둥용으로 특화된 라인형 고휘도(8000lux) 조명. 죽어있는 코너 공간을 가치 있게 전환합니다.",
        specs: [
            { label: "밝기", value: "고휘도 8000lux 이상 파워 발광" },
            { label: "형태", value: "90° 코너 / 볼록형 / ㄷ자형 다양한 적용" },
            { label: "크기", value: "초슬림 5.1mm 두께로 완벽 밀착" },
            { label: "적용", value: "매장 백라이트, 쇼케이스 라인 조명" }
        ],
        powerSpecs: "DC 48V, 8000lux 이상, 두께 5.1mm, 색온도 5700k",
        modelSpecs: [
            { model: "S-770", size: "200×770mm", power: "9W", weight: "-", note: "-" },
            { model: "S-1020", size: "200×1020mm", power: "12W", weight: "-", note: "-" },
            { model: "S-1520", size: "200×1520mm", power: "18W", weight: "-", note: "-" },
            { model: "S-2270", size: "200×2270mm", power: "27W", weight: "-", note: "최장 라인" }
        ]
    },
    "custom-image": {
        id: "custom-image",
        name: "이미지조명 (맞춤형 이미지 조명)",
        description: "사진, 아트워크, 브랜드 로고를 고해상도 조명 콘텐츠로 구현. 시각적 메시지를 담는 완벽한 매개체입니다.",
        specs: [
            { label: "출력", value: "생생한 고해상도 콘텐츠 정밀 구현" },
            { label: "용도", value: "기업 홍보 월 / 메인 광고 패널" },
            { label: "제작", value: "사이즈 및 디자인 완전 맞춤형 (Custom Order)" },
            { label: "관리", value: "이지스냅 방식으로 손쉬운 패널 교체" }
        ],
        powerSpecs: "프로젝트별 맞춤 설계 — 별도 문의를 통해 협의해 주세요.",
    }
};

export async function generateStaticParams() {
    return Object.keys(PRODUCTS_DATA).map((id) => ({
        id,
    }));
}

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    const productData = PRODUCTS_DATA[resolvedParams.id as keyof typeof PRODUCTS_DATA];

    if (!productData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 md:py-24">

                {/* Basic Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white mb-8 transition-colors group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 -translate-x-1 group-hover:-translate-x-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        전체 라인업으로 가기
                    </Link>

                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                            For Business (B2B)
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            {productData.name}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {productData.description}
                        </p>
                    </div>
                </div>

                {/* Interactive Client Component for B2B Inquiry Workflow */}
                <ProductDetailClient product={productData} />

            </div>
        </div>
    );
}
