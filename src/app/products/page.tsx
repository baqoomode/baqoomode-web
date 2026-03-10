import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const technologySignals = [
    {
        title: "DSE",
        description: "도트 없이 더 선명한 면발광",
    },
    {
        title: "Flexible & Slim",
        description: "곡면과 초슬림 구조까지 대응",
    },
    {
        title: "D-COA",
        description: "벽을 해치지 않는 간결한 시공",
    },
];

const B2B_PRODUCTS = [
    {
        id: "light-board",
        name: "발광보드",
        subtitle: "이미지 교체형 면발광 보드",
        signal: "가장 빠르게 공간을 전환하는 베이스",
        description: "인테리어 마감재와 조화롭게 사용 가능한 신소재 보드. 이미지 교체만으로 공간의 분위기를 즉각 전환합니다.",
        icon: "💡",
        bestFor: ["브랜드 월", "쇼룸", "아트월"],
        features: [
            "이미지 패널 교체로 즉시 무드 전환",
            "인테리어 마감재와 혼용 시공 가능",
            "슬림 & 경량 프로파일"
        ],
    },
    {
        id: "polygon-board",
        name: "다각형보드",
        subtitle: "조형적 다각형 라이팅",
        signal: "시선을 잡아두는 조형 포인트",
        description: "삼각, 육각, 원형 등 정형화된 사각형을 벗어난 조형적 라이팅. 공간에 강렬한 포인트를 제공합니다.",
        icon: "📐",
        bestFor: ["포토존", "브랜드 존", "포인트 월"],
        features: [
            "조형적 디자인 포인트 부여",
            "다각형 내 이미지 패널 교체 가능",
            "비규격 형상 협의 가능"
        ],
    },
    {
        id: "round-board",
        name: "라운드보드",
        subtitle: "플렉시블 곡면 보드",
        signal: "곡선 공간까지 자연스럽게 연결",
        description: "곡면(Wave) 구조를 구현할 수 있는 플렉시블 보드. 기둥이나 곡선 벽면 등 구조적 제약을 최소화합니다.",
        icon: "🌊",
        bestFor: ["곡면 벽", "기둥", "웨이브 구조"],
        features: [
            "플렉시블 곡면 구현",
            "곡면에서도 균일한 발광",
            "맞춤형 곡률(R값) 제작 지원"
        ],
    },
    {
        id: "hanji-board",
        name: "한지보드",
        subtitle: "한지 감성 면발광 보드",
        signal: "눈부심 없이 깊은 무드를 만드는 빛",
        description: "한지 특유의 질감과 면발광 기술이 어우러진 감성 보드. 눈부심 없는 안정적인 조도를 제공합니다.",
        icon: "🏮",
        bestFor: ["프라이빗 룸", "갤러리", "고급 한식당"],
        features: [
            "부드러운 빛 확산 (Glare-free)",
            "한지 텍스처의 독특한 감성",
            "안정적 조도의 정적 분위기"
        ],
    },
    {
        id: "line-board",
        name: "띠보드",
        subtitle: "라인형 고휘도 조명",
        signal: "죽어있는 코너를 살아있는 라인으로",
        description: "코너, 벽 상부, 기둥용으로 특화된 라인형 고휘도(8000lux) 조명. 죽어있는 코너 공간을 가치 있게 전환합니다.",
        icon: "📏",
        bestFor: ["코너", "쇼케이스", "상부 라인"],
        features: [
            "고휘도 8000lux 이상",
            "90° 코너 / 볼록형 / ㄷ자형 다양한 형태",
            "초슬림 5.1mm 두께"
        ],
    },
    {
        id: "custom-image",
        name: "이미지조명",
        subtitle: "맞춤형 이미지 조명",
        signal: "메시지를 빛으로 보여주는 하드웨어",
        description: "사진, 아트워크, 브랜드 로고를 고해상도 조명 콘텐츠로 구현. 시각적 메시지를 담는 매개체입니다.",
        icon: "📸",
        bestFor: ["브랜드 로고", "광고 월", "VIP 공간"],
        features: [
            "고해상도 콘텐츠 정밀 구현",
            "기업 홍보 월 / 광고 패널",
            "완전 맞춤형 커스텀 오더"
        ],
    },
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(0,223,182,0.14),_transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
                <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
                    <FadeUpInView className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#00dfb6]">
                            For Business Lineup
                        </p>
                        <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                            공간 업그레이드를 위한
                            <br className="hidden md:block" /> 6개의 코어 라인업
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                            브랜드 월부터 플래그십, 프랜차이즈, 쇼룸, 고급 인테리어까지.
                            바꿔모드의 하드웨어는 더 얇고, 더 선명하고, 더 간결하게 설계됩니다.
                        </p>
                    </FadeUpInView>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {technologySignals.map((item, index) => (
                            <FadeUpInView
                                key={item.title}
                                delay={0.08 + index * 0.08}
                            >
                                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                        {item.title}
                                    </p>
                                    <p className="mt-3 text-base font-medium text-zinc-100">
                                        {item.description}
                                    </p>
                                </div>
                            </FadeUpInView>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-20 md:py-24">
                <section className="mb-16 md:mb-20">
                    <FadeUpInView className="mb-10 max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                            6 Core Products
                        </p>
                        <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                            프로젝트 목적에 맞게 고르는 라인업
                        </h2>
                    </FadeUpInView>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {B2B_PRODUCTS.map((product, index) => (
                            <FadeUpInView key={product.id} delay={index * 0.07} className="h-full">
                                <Link href={`/products/${product.id}`}>
                                    <Card className="group h-full overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] py-0 transition-all duration-300 hover:-translate-y-1 hover:border-[#00dfb6]/30 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                                        <CardContent className="flex h-full flex-col px-6 py-7 md:px-7 md:py-8">
                                            <div className="mb-6 flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                                        {product.subtitle}
                                                    </p>
                                                    <h3 className="text-xl font-black tracking-tight text-white">
                                                        {product.name}
                                                    </h3>
                                                </div>
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl">
                                                    {product.icon}
                                                </div>
                                            </div>

                                            <p className="text-base font-semibold text-zinc-100">
                                                {product.signal}
                                            </p>
                                            <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                                                {product.description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {product.bestFor.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-6 flex-1">
                                                <ul className="space-y-3">
                                                    {product.features.map((feature) => (
                                                        <li key={feature} className="flex items-start text-sm text-zinc-300">
                                                            <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[#00dfb6] opacity-80" />
                                                            <span className="leading-snug">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6 text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-white">
                                                <span>상세 스펙 보기</span>
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                <section>
                    <FadeUpInView>
                        <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,223,182,0.14),rgba(255,255,255,0.04))] py-0">
                            <CardContent className="px-6 py-10 text-center md:px-10 md:py-12">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                                    Project Flow
                                </p>
                                <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                                    스펙은 보고, 도입은 바로 이어가세요.
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
                                    제품별 상세 페이지에서 데이터시트를 확인하고, 프로젝트 상담은 B2B 문의로 이어집니다.
                                </p>

                                <div className="mt-7 flex flex-wrap justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-full bg-white px-6 text-black hover:bg-zinc-200"
                                    >
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
                                        <Link href="/brand">브랜드 스토리 보기</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeUpInView>
                </section>
            </div>
        </div>
    );
}
