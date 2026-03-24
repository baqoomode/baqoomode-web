import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { ProductDetailClient, type ProductData } from "@/app/products/[id]/product-detail-client";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PRODUCTS_DATA: Record<string, ProductData> = {
    "light-board": {
        id: "light-board",
        name: "발광보드",
        subtitle: "이미지 교체형 면발광 보드",
        signal: "이미지 교체만으로 공간을 가장 빠르게 전환하는 베이스 라인업",
        description: "인테리어 마감재와 조화롭게 사용 가능한 신소재 보드. 이미지 교체만으로 공간의 분위기를 즉각 전환합니다.",
        bestFor: ["브랜드 월", "쇼룸", "아트월"],
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
        name: "다각형보드",
        subtitle: "조형적 다각형 라이팅",
        signal: "시선을 붙잡는 조형 포인트로 공간 인상을 강화하는 라인업",
        description: "삼각, 육각, 원형 등 정형화된 사각형을 벗어난 조형적 라이팅. 공간에 강렬한 포인트를 제공합니다.",
        bestFor: ["포토존", "브랜드 존", "포인트 월"],
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
        name: "라운드보드",
        subtitle: "플렉시블 곡면 보드",
        signal: "곡선 벽과 기둥까지 자연스럽게 이어주는 flexible hardware",
        description: "곡면(Wave) 구조를 구현할 수 있는 플렉시블 보드. 기둥이나 곡선 벽면 등 구조적 제약을 최소화합니다.",
        bestFor: ["곡면 벽", "기둥", "웨이브 구조"],
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
        name: "한지보드",
        subtitle: "한지 감성 면발광 보드",
        signal: "눈부심 없이 깊고 고요한 무드를 만드는 감성 라인업",
        description: "한지 특유의 질감과 면발광 기술이 어우러진 감성 보드. 눈부심 없는 안정적인 조도를 제공합니다.",
        bestFor: ["프라이빗 룸", "갤러리", "고급 한식당"],
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
        name: "띠보드",
        subtitle: "라인형 고휘도 조명",
        signal: "비어있는 코너와 상부 공간을 살아있는 라인으로 바꾸는 조명",
        description: "코너, 벽 상부, 기둥용으로 특화된 라인형 고휘도(8000lux) 조명. 죽어있는 코너 공간을 가치 있게 전환합니다.",
        bestFor: ["코너", "쇼케이스", "상부 라인"],
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
        name: "이미지조명",
        subtitle: "맞춤형 이미지 조명",
        signal: "브랜드 메시지와 이미지를 가장 선명하게 보여주는 커스텀 하드웨어",
        description: "사진, 아트워크, 브랜드 로고를 고해상도 조명 콘텐츠로 구현. 시각적 메시지를 담는 완벽한 매개체입니다.",
        bestFor: ["브랜드 로고", "광고 월", "VIP 공간"],
        specs: [
            { label: "출력", value: "생생한 고해상도 콘텐츠 정밀 구현" },
            { label: "용도", value: "기업 홍보 월 / 메인 광고 패널" },
            { label: "제작", value: "사이즈 및 디자인 완전 맞춤형 (Custom Order)" },
            { label: "관리", value: "이지스냅 방식으로 손쉬운 패널 교체" }
        ],
        powerSpecs: "프로젝트별 맞춤 설계 — 별도 문의를 통해 협의해 주세요.",
    }
};

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const runtime = "edge";

export default async function ProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    const productData = PRODUCTS_DATA[resolvedParams.id as keyof typeof PRODUCTS_DATA];

    if (!productData) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(0,223,182,0.14),_transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
                <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <Link
                        href="/products"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                        <ArrowLeft className="size-4" />
                        전체 라인업으로 돌아가기
                    </Link>

                    <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                        <FadeUpInView>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#00dfb6]">
                                For Business Detail
                            </p>
                            <p className="mb-3 text-sm font-medium text-zinc-400">{productData.subtitle}</p>
                            <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                                {productData.name}
                            </h1>
                            <p className="mt-5 text-xl font-semibold text-zinc-100 md:text-2xl">
                                {productData.signal}
                            </p>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                                {productData.description}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {productData.bestFor.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </FadeUpInView>

                        <Card className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] py-0">
                            <CardContent className="px-6 py-7 md:px-8 md:py-8">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                                    Project Fit
                                </p>
                                <h2 className="text-xl font-black tracking-tight text-white">
                                    이 라인업이 맞는 프로젝트
                                </h2>
                                <div className="mt-6 space-y-4">
                                    {productData.specs.slice(0, 3).map((spec) => (
                                        <div key={spec.label} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                                {spec.label}
                                            </p>
                                            <p className="mt-2 text-base font-medium leading-7 text-zinc-100">
                                                {spec.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Button asChild size="lg" className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
                                        <Link href="/b2b">
                                            도입 문의하기
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                                    >
                                        <Link href="/products">다른 라인업 보기</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
                <ProductDetailClient product={productData} />
            </div>
        </div>
    );
}
