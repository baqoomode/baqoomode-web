import { notFound } from "next/navigation";
import Link from "next/link";
import { ModeDetailClient } from "./mode-detail-client";

// export const runtime = "edge";

// Mock data based on BRAND_IDENTITY.md
const MODES_DATA = {
    pet: {
        id: "pet",
        title: "Pet Mode",
        slogan: "영원히 빛나는 나의 가족",
        description: "QR 스캔 한 번으로 만나는 우리 아이의 목소리와 예쁜 모습. 매일 아침 따뜻한 눈맞춤을 선물합니다.",
        themeColor: "from-amber-500/20 via-background to-background",
        accentColor: "text-amber-500",
        features: ["마이크로 면발광 특수 프레임", "프리미엄 인화 사진 세트", "AI 영상/음성 재생 QR코드", "전용 앨범 보관함"],
        price: 189000,
    },
    biz: {
        id: "biz",
        title: "Biz/Office Mode",
        slogan: "당신의 가치는 더 밝은 곳에서 증명되어야 합니다",
        description: "인증서 하나 빛나게 걸었을 뿐인데 매장 전체가 고급스러워집니다. 신뢰를 완성하는 완벽한 프레임.",
        themeColor: "from-blue-500/20 via-background to-background",
        accentColor: "text-blue-500",
        features: ["A4/A3 최적화 슬림 보드", "눈부심 방지 눈꽃 처리", "선 숨김 D-COA 시공", "마케팅용 탁상 조명스탠드"],
        price: 145000,
    },
    fandom: {
        id: "fandom",
        title: "Fandom Mode",
        slogan: "내 방 안의 작은 콘서트",
        description: "최애의 영상과 인사를 담은 나만의 완벽한 제단. 필름만 교체하며 영원히 소장하세요.",
        themeColor: "from-purple-500/20 via-background to-background",
        accentColor: "text-purple-500",
        features: ["교체형 백라이트 필름", "최애 인사 AI 영상 QR 연동", "빛 확산 렌즈 기술", "투명 폴리카보네이트 보호막"],
        price: 128000,
    },
    memory: {
        id: "memory",
        title: "Memory Mode",
        slogan: "가장 찬란한 순간을 켜다",
        description: "웨딩, 육아, 부모님의 특별한 기념일. 일반 액자보다 트렌디하고 AI 영상까지 담는 특별한 선물.",
        themeColor: "from-rose-500/20 via-background to-background",
        accentColor: "text-rose-500",
        features: ["로맨틱 발광 무드등 모드", "성장앨범 AI 미디어 연동", "초고해상도 실사 인쇄", "빛 조절 디밍(Dimming) 스위치"],
        price: 210000,
    }
};

export async function generateStaticParams() {
    return Object.keys(MODES_DATA).map((id) => ({
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

export default async function ModePage({ params }: PageProps) {
    const resolvedParams = await params;
    const modeData = MODES_DATA[resolvedParams.id as keyof typeof MODES_DATA];

    if (!modeData) {
        notFound();
    }

    return (
        <div className={`min-h-screen bg-gradient-to-b ${modeData.themeColor}`}>
            <div className="container mx-auto px-4 py-12 md:py-24">

                <div className="max-w-3xl mx-auto mb-8">
                    <Link
                        href="/modes"
                        className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white mb-8 transition-colors group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 -translate-x-1 group-hover:-translate-x-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        라이프 모드 전체로 가기
                    </Link>
                </div>

                {/* Storytelling Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg">
                        {modeData.title}
                    </h1>
                    <h2 className={`text-2xl md:text-3xl font-bold ${modeData.accentColor}`}>
                        &ldquo;{modeData.slogan}&rdquo;
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {modeData.description}
                    </p>
                </div>

                {/* Interactive Client Component for Customization & Purchase */}
                <ModeDetailClient mode={modeData} />

            </div>
        </div>
    );
}
