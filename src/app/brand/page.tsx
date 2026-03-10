import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const coreValues = [
    {
        label: "01. Premium",
        title: "빛을 오브제로.",
        description: "단순한 액자를 넘어, 공간의 완성도를 끌어올리는 프리미엄 라이팅.",
    },
    {
        label: "02. Emotional",
        title: "감정을 장면으로.",
        description: "반려의 기억, 팬심, 자부심, 기념일의 순간까지. 빛으로 더 오래 남깁니다.",
    },
    {
        label: "03. Tech-Driven",
        title: "기술은 더 조용하게.",
        description: "DSE, QR, AI, 슬림 전원 설계까지. 보이는 것은 감성, 받는 것은 완성도입니다.",
    },
];

const userBenefits = [
    {
        title: "기억은 더 오래",
        description: "반려와 가족의 순간을 매일 다시 켤 수 있습니다.",
    },
    {
        title: "취향은 더 선명하게",
        description: "내 방과 팬덤 공간의 무드를 더 분명하게 만듭니다.",
    },
    {
        title: "가치는 더 밝게",
        description: "오피스와 매장의 인증서, POP, 브랜드 메시지를 더 돋보이게 합니다.",
    },
    {
        title: "전환은 더 쉽게",
        description: "이미지 교체만으로 공간의 분위기와 용도를 빠르게 바꿉니다.",
    },
];

export default function BrandPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(0,223,182,0.14),_transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
                <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
                    <FadeUpInView className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#00dfb6]">
                            Brand Identity
                        </p>
                        <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                            공간의 표정을 스위칭하다.
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                            어제와 다른 오늘. 바꿔모드는 빛으로 분위기를 바꾸고, 기억을 남기고,
                            공간의 가치를 더 또렷하게 만드는 브랜드입니다.
                        </p>
                    </FadeUpInView>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-20 md:py-24">
                <section className="grid items-center gap-10 border-b border-white/8 pb-20 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pb-24">
                    <FadeUpInView className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                            Brand Naming
                        </p>
                        <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                            baQoo <span className="text-[#00dfb6]">MODE</span>
                        </h2>
                        <p className="text-xl font-semibold text-zinc-100">
                            ‘바꾸다’의 직관. ‘Mode’의 감도.
                        </p>
                        <div className="space-y-4 text-base leading-8 text-zinc-300 md:text-lg">
                            <p>
                                바꿔모드는 세상의 빛을 끄고 켜듯, 일상과 감정의 상태를 즉각적으로
                                전환한다는 의미를 담고 있습니다.
                            </p>
                            <p>
                                영문명 `baQoo MODE`의 Q는 스위치, oo는 시선과 빛나는 패널을 상징합니다.
                                보는 순간 기억되는 브랜드. 그것이 바꿔모드의 정체성입니다.
                            </p>
                        </div>
                    </FadeUpInView>

                    <FadeUpInView delay={0.08}>
                        <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] py-0">
                            <CardContent className="flex aspect-square flex-col items-center justify-center gap-6 px-8 py-10 text-center">
                                <div className="relative">
                                    <div className="text-6xl font-black tracking-tight text-white md:text-7xl">
                                        ba<span className="text-[#00dfb6]">Q</span>oo
                                    </div>
                                    <div className="absolute left-[56%] top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00dfb6]/20 blur-2xl" />
                                </div>
                                <div className="space-y-2 text-sm text-zinc-300 md:text-base">
                                    <p>Q = Switch</p>
                                    <p>oo = Eyes & Light Panels</p>
                                    <p>Mode = 분위기 · 기억 · 가치의 전환</p>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeUpInView>
                </section>

                <section className="border-b border-white/8 py-20 md:py-24">
                    <FadeUpInView className="mb-10 max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                            What We Pursue
                        </p>
                        <h3 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                            우리가 추구하는 것
                        </h3>
                    </FadeUpInView>

                    <div className="grid gap-6 md:grid-cols-3">
                        {coreValues.map((value, index) => (
                            <FadeUpInView key={value.label} delay={index * 0.08} className="h-full">
                                <Card className="rounded-[28px] border border-white/10 bg-white/[0.03] py-0">
                                    <CardContent className="px-6 py-7 md:px-7 md:py-8">
                                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                            {value.label}
                                        </p>
                                        <h4 className="text-xl font-black tracking-tight text-white">
                                            {value.title}
                                        </h4>
                                        <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                <section className="py-20 md:py-24">
                    <FadeUpInView className="mb-10 max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                            What You Get
                        </p>
                        <h3 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                            바꿔모드로 얻게 되는 것
                        </h3>
                    </FadeUpInView>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {userBenefits.map((benefit, index) => (
                            <FadeUpInView key={benefit.title} delay={index * 0.08} className="h-full">
                                <div className="rounded-[28px] border border-white/10 bg-black/30 px-6 py-7">
                                    <h4 className="text-xl font-black tracking-tight text-white">
                                        {benefit.title}
                                    </h4>
                                    <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                                        {benefit.description}
                                    </p>
                                </div>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                <section className="pb-8">
                    <FadeUpInView>
                        <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,223,182,0.14),rgba(255,255,255,0.04))] py-0">
                            <CardContent className="px-6 py-10 text-center md:px-10 md:py-12">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">
                                    Switch Your Vibe
                                </p>
                                <h2 className="text-2xl font-black tracking-tight text-white md:text-4xl">
                                    지금, 당신의 모드로 바꿔보세요.
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
                                    기억도, 취향도, 공간의 인상도. 켜지는 순간 달라집니다.
                                </p>

                                <div className="mt-7 flex flex-wrap justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-full bg-white px-6 text-black hover:bg-zinc-200"
                                    >
                                        <Link href="/modes">
                                            나에게 맞는 모드 보기
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                                    >
                                        <Link href="/reviews">리얼스토리 보기</Link>
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
