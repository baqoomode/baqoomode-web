import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const B2B_PRODUCTS = [
    {
        id: "light-board",
        name: "발광보드",
        subtitle: "이미지 교체형 면발광 보드",
        description: "인테리어 마감재와 조화롭게 사용 가능한 신소재 보드. 이미지 교체만으로 공간의 분위기를 즉각 전환합니다.",
        icon: "💡",
        features: [
            "이미지 패널 교체로 즉시 무드 전환",
            "인테리어 마감재와 혼용 시공 가능",
            "슬림 & 경량 프로파일"
        ]
    },
    {
        id: "polygon-board",
        name: "다각형보드",
        subtitle: "조형적 다각형 라이팅",
        description: "삼각, 육각, 원형 등 정형화된 사각형을 벗어난 조형적 라이팅. 공간에 강렬한 포인트를 제공합니다.",
        icon: "📐",
        features: [
            "조형적 디자인 포인트 부여",
            "다각형 내 이미지 패널 교체 가능",
            "비규격 형상 협의 가능"
        ]
    },
    {
        id: "round-board",
        name: "라운드보드",
        subtitle: "플렉시블 곡면 보드",
        description: "곡면(Wave) 구조를 구현할 수 있는 플렉시블 보드. 기둥이나 곡선 벽면 등 구조적 제약을 최소화합니다.",
        icon: "🌊",
        features: [
            "플렉시블 곡면 구현",
            "곡면에서도 균일한 발광",
            "맞춤형 곡률(R값) 제작 지원"
        ]
    },
    {
        id: "hanji-board",
        name: "한지보드",
        subtitle: "한지 감성 면발광 보드",
        description: "한지 특유의 질감과 면발광 기술이 어우러진 감성 보드. 눈부심 없는 안정적인 조도를 제공합니다.",
        icon: "🏮",
        features: [
            "부드러운 빛 확산 (Glare-free)",
            "한지 텍스처의 독특한 감성",
            "안정적 조도의 정적 분위기"
        ]
    },
    {
        id: "line-board",
        name: "띠보드",
        subtitle: "라인형 고휘도 조명",
        description: "코너, 벽 상부, 기둥용으로 특화된 라인형 고휘도(8000lux) 조명. 죽어있는 코너 공간을 가치 있게 전환합니다.",
        icon: "📏",
        features: [
            "고휘도 8000lux 이상",
            "90° 코너 / 볼록형 / ㄷ자형 다양한 형태",
            "초슬림 5.1mm 두께"
        ]
    },
    {
        id: "custom-image",
        name: "이미지조명",
        subtitle: "맞춤형 이미지 조명",
        description: "사진, 아트워크, 브랜드 로고를 고해상도 조명 콘텐츠로 구현. 시각적 메시지를 담는 매개체입니다.",
        icon: "📸",
        features: [
            "고해상도 콘텐츠 정밀 구현",
            "기업 홍보 월 / 광고 패널",
            "완전 맞춤형 커스텀 오더"
        ]
    }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-6xl">

                <div className="text-center mb-16 md:mb-24">
                    <p className="text-[#00dfb6] font-bold tracking-widest uppercase mb-4 text-sm">For Business & Experts</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
                        전체 라인업
                    </h1>
                    <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
                        프랜차이즈, 플래그십 스토어, 고급 인테리어를 위한 전문가 라인업. 두께는 얇게, 빛은 선명하게 공간을 압도합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {B2B_PRODUCTS.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <Card className="group bg-[#121319] border-white/5 hover:bg-[#16171e] transition-all duration-300 h-full overflow-hidden flex flex-col rounded-2xl relative">
                                <CardContent className="p-8 flex flex-col h-full relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                        <p className="text-sm font-medium text-[#00dfb6] mb-4">{product.subtitle}</p>
                                        <p className="text-zinc-400 leading-relaxed font-light text-sm h-[80px]">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="flex-1">
                                        <ul className="space-y-3 mb-8">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-start text-xs text-zinc-300">
                                                    <Check className="w-4 h-4 text-[#00dfb6] mr-2 shrink-0 opacity-70" />
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-sm font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">
                                        <span>상세 스펙 보기</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
