"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, CircleHelp, Clock3, ShieldCheck, ShoppingCart, Sparkles, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";

export interface ModeOption {
    label: string;
    note: string;
    priceDelta: number;
    recommended?: boolean;
}

export interface FrameOption {
    label: string;
    note: string;
    swatchClass: string;
    priceDelta: number;
}

export interface ModeProcessStep {
    title: string;
    description: string;
}

export interface ModeData {
    id: string;
    title: string;
    koreanLabel: string;
    slogan: string;
    signal: string;
    description: string;
    themeColor: string;
    accentColor: string;
    accentRgb: string;
    price: number;
    priceNote: string;
    leadTime: string;
    deliveryNote: string;
    features: string[];
    idealFor: string[];
    packageItems: string[];
    deliverables: string[];
    processSteps: ModeProcessStep[];
    trustPoints: string[];
    sizeOptions: ModeOption[];
    frameOptions: FrameOption[];
    heroHighlights: string[];
}

const formatPrice = (price: number) => `${new Intl.NumberFormat("ko-KR").format(price)}원`;

const getAccentBadgeStyle = (accentRgb: string) => ({
    borderColor: `rgba(${accentRgb}, 0.2)`,
    backgroundColor: `rgba(${accentRgb}, 0.1)`,
});

const getAccentGlowStyle = (accentRgb: string) => ({
    background: `radial-gradient(circle at top right, rgba(${accentRgb}, 0.18), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))`,
});

export function ModeDetailClient({ mode }: { mode: ModeData }) {
    const [selectedSizeLabel, setSelectedSizeLabel] = useState(mode.sizeOptions[0]?.label ?? "");
    const [selectedFrameLabel, setSelectedFrameLabel] = useState(mode.frameOptions[0]?.label ?? "");

    const selectedSize = mode.sizeOptions.find((option) => option.label === selectedSizeLabel) ?? mode.sizeOptions[0];
    const selectedFrame = mode.frameOptions.find((option) => option.label === selectedFrameLabel) ?? mode.frameOptions[0];
    const optionDelta = selectedSize.priceDelta + selectedFrame.priceDelta;
    const totalPrice = mode.price + optionDelta;

    return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]">
            <div className="space-y-8">
                <FadeUpInView>
                    <Card className="overflow-hidden rounded-[30px] border border-white/10 py-0 text-white" style={getAccentGlowStyle(mode.accentRgb)}>
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border text-white" style={getAccentBadgeStyle(mode.accentRgb)}>
                                <Sparkles className="size-5" />
                            </div>
                            <div>
                                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Mode Overview</p>
                                <p className="mt-1 text-sm text-zinc-400">{mode.koreanLabel}</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
                                <p className="text-sm font-medium text-zinc-400">&ldquo;{mode.slogan}&rdquo;</p>
                                <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">{mode.signal}</h2>
                                <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">{mode.description}</p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {mode.heroHighlights.map((item) => (
                                        <span
                                            key={`${mode.id}-highlight-${item}`}
                                            className="rounded-full border px-3 py-1 text-xs font-medium text-zinc-100"
                                            style={getAccentBadgeStyle(mode.accentRgb)}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                {mode.features.map((feature) => (
                                    <div key={`${mode.id}-feature-${feature}`} className="rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 rounded-full border p-1" style={getAccentBadgeStyle(mode.accentRgb)}>
                                                <Check className={`size-3.5 ${mode.accentColor}`} />
                                            </div>
                                            <p className="text-sm leading-6 text-zinc-200">{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.04}>
                    <Card className="rounded-[30px] border border-white/10 bg-white/[0.03] py-0 text-white">
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Best For</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">이런 순간에 특히 잘 맞습니다</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {mode.idealFor.map((item, index) => (
                                <FadeUpInView key={`${mode.id}-ideal-${index}`} delay={index * 0.07}>
                                    <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                        <p className={`text-sm font-semibold ${mode.accentColor}`}>0{index + 1}</p>
                                        <p className="mt-3 text-base font-semibold leading-7 text-zinc-100">{item}</p>
                                    </div>
                                </FadeUpInView>
                            ))}
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.08}>
                    <Card className="rounded-[30px] border border-white/10 bg-white/[0.03] py-0 text-white">
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Package Includes</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">받게 되는 구성과 제작 결과물</h2>

                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            <FadeUpInView delay={0.04}>
                                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">패키지 구성</p>
                                    <div className="mt-4 space-y-3">
                                        {mode.packageItems.map((item) => (
                                            <div key={`${mode.id}-package-${item}`} className="flex items-start gap-3">
                                                <Check className={`mt-1 size-4 ${mode.accentColor}`} />
                                                <p className="text-sm leading-6 text-zinc-200">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeUpInView>

                            <FadeUpInView delay={0.1}>
                                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">최종 전달물</p>
                                    <div className="mt-4 space-y-3">
                                        {mode.deliverables.map((item) => (
                                            <div key={`${mode.id}-deliverable-${item}`} className="flex items-start gap-3">
                                                <Check className={`mt-1 size-4 ${mode.accentColor}`} />
                                                <p className="text-sm leading-6 text-zinc-200">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeUpInView>
                        </div>

                        <FadeUpInView delay={0.16}>
                            <div className="mt-6 rounded-[24px] border border-white/8 bg-black/20 p-5">
                                <p className="text-sm leading-7 text-zinc-300">{mode.priceNote}</p>
                            </div>
                        </FadeUpInView>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.12}>
                    <Card className="rounded-[30px] border border-white/10 bg-white/[0.03] py-0 text-white">
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Production Flow</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">구매 전환이 끊기지 않도록 제작 흐름도 단순하게</h2>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {mode.processSteps.map((step, index) => (
                                <FadeUpInView key={`${mode.id}-step-${step.title}`} delay={index * 0.07}>
                                    <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                        <p className={`text-sm font-semibold ${mode.accentColor}`}>STEP {index + 1}</p>
                                        <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
                                    </div>
                                </FadeUpInView>
                            ))}
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.16}>
                    <Card className="rounded-[30px] border border-white/10 bg-white/[0.03] py-0 text-white">
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Trust & Guide</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">주문 전에 꼭 확인하면 좋은 안내</h2>

                        <div className="mt-6 space-y-4">
                            {mode.trustPoints.map((point, index) => (
                                <FadeUpInView key={`${mode.id}-trust-${point}`} delay={index * 0.06}>
                                    <div className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-black/20 px-4 py-4">
                                        <ShieldCheck className={`mt-0.5 size-5 ${mode.accentColor}`} />
                                        <p className="text-sm leading-6 text-zinc-300">{point}</p>
                                    </div>
                                </FadeUpInView>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <FadeUpInView delay={0.1}>
                                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                    <div className="flex items-center gap-3 text-zinc-200">
                                        <Clock3 className={`size-4 ${mode.accentColor}`} />
                                        <p className="text-sm font-semibold">제작 일정</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">{mode.leadTime}</p>
                                </div>
                            </FadeUpInView>

                            <FadeUpInView delay={0.16}>
                                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                                    <div className="flex items-center gap-3 text-zinc-200">
                                        <Truck className={`size-4 ${mode.accentColor}`} />
                                        <p className="text-sm font-semibold">수령 안내</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">{mode.deliveryNote}</p>
                                </div>
                            </FadeUpInView>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.2}>
                    <Card className="overflow-hidden rounded-[30px] border border-white/10 py-0 text-white" style={getAccentGlowStyle(mode.accentRgb)}>
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Before You Decide</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">조금 더 보고 결정하고 싶다면</h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                            실제 후기를 먼저 보고 감을 잡아도 좋고, 궁금한 점은 QnA에서 바로 확인해도 좋습니다. 중요한 건 망설임 없이 다음 행동으로 이어지게 만드는 것입니다.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button asChild size="lg" className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
                                <Link href="/reviews">
                                    실사용 후기 보기
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10">
                                <Link href="/support/faq">
                                    QnA 바로가기
                                    <CircleHelp className="size-4" />
                                </Link>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 self-start">
                <FadeUpInView amount={0.1}>
                    <Card className="overflow-hidden rounded-[30px] border border-white/10 py-0 text-white" style={getAccentGlowStyle(mode.accentRgb)}>
                        <CardContent className="px-6 py-7 md:px-7 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Purchase Plan</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">이 모드로 바로 이어가기</h2>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">사이즈와 프레임 톤을 고르면 예상 금액을 바로 확인하고 구매 흐름으로 넘어갈 수 있습니다.</p>

                        <div className="mt-6 space-y-5">
                            <div>
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <p className="text-sm font-semibold text-zinc-100">1. 사이즈 선택</p>
                                    <p className="text-xs text-zinc-500">공간 크기 기준</p>
                                </div>
                                <div className="space-y-3">
                                    {mode.sizeOptions.map((option) => {
                                        const isSelected = selectedSize.label === option.label;

                                        return (
                                            <button
                                                key={`${mode.id}-size-${option.label}`}
                                                type="button"
                                                onClick={() => setSelectedSizeLabel(option.label)}
                                                className="w-full rounded-[22px] border px-4 py-4 text-left transition-colors border-white/10 bg-white/[0.03] hover:border-white/20"
                                                style={isSelected ? getAccentBadgeStyle(mode.accentRgb) : undefined}
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <p className="font-semibold text-white">{option.label}</p>
                                                        <p className="mt-1 text-sm leading-6 text-zinc-400">{option.note}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        {option.recommended ? (
                                                            <span className={`mb-2 inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ${mode.accentColor}`} style={getAccentBadgeStyle(mode.accentRgb)}>
                                                                추천
                                                            </span>
                                                        ) : null}
                                                        <p className="text-sm font-semibold text-white">{option.priceDelta === 0 ? "기본가" : `+ ${formatPrice(option.priceDelta)}`}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <p className="text-sm font-semibold text-zinc-100">2. 프레임 톤 선택</p>
                                    <p className="text-xs text-zinc-500">무드 맞춤</p>
                                </div>
                                <div className="space-y-3">
                                    {mode.frameOptions.map((option) => {
                                        const isSelected = selectedFrame.label === option.label;

                                        return (
                                            <button
                                                key={`${mode.id}-frame-${option.label}`}
                                                type="button"
                                                onClick={() => setSelectedFrameLabel(option.label)}
                                                className="flex w-full items-center gap-3 rounded-[22px] border px-4 py-4 text-left transition-colors border-white/10 bg-white/[0.03] hover:border-white/20"
                                                style={isSelected ? getAccentBadgeStyle(mode.accentRgb) : undefined}
                                            >
                                                <span className={`h-4 w-4 rounded-full border border-white/20 ${option.swatchClass}`} />
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-semibold text-white">{option.label}</p>
                                                    <p className="mt-1 text-sm leading-6 text-zinc-400">{option.note}</p>
                                                </div>
                                                <p className="text-sm font-semibold text-white">{option.priceDelta === 0 ? "기본" : `+ ${formatPrice(option.priceDelta)}`}</p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-[24px] border border-white/10 bg-black/30 p-5">
                            <div className="flex items-center justify-between text-sm text-zinc-400">
                                <span>기본 패키지</span>
                                <span>{formatPrice(mode.price)}</span>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                                <span>선택 옵션</span>
                                <span>{optionDelta === 0 ? "변동 없음" : `+ ${formatPrice(optionDelta)}`}</span>
                            </div>
                            <div className="mt-4 border-t border-white/10 pt-4">
                                <p className="text-sm text-zinc-400">예상 결제 금액</p>
                                <p className="mt-2 text-3xl font-black tracking-tight text-white">{formatPrice(totalPrice)}</p>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">{selectedSize.label} · {selectedFrame.label} 기준 예상가입니다.</p>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <Button asChild size="lg" className="h-12 rounded-full bg-white text-black hover:bg-zinc-200">
                                <Link href="/cart">
                                    이 구성으로 구매 진행하기
                                    <ShoppingCart className="size-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/15 bg-transparent text-white hover:bg-white/10">
                                <Link href="/support/faq">
                                    QnA 먼저 확인하기
                                    <CircleHelp className="size-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-5 space-y-3 text-sm text-zinc-400">
                            <div className="flex items-start gap-3">
                                <Clock3 className={`mt-0.5 size-4 ${mode.accentColor}`} />
                                <span className="leading-6">{mode.leadTime}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Truck className={`mt-0.5 size-4 ${mode.accentColor}`} />
                                <span className="leading-6">{mode.deliveryNote}</span>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.08} amount={0.1}>
                    <Card className="rounded-[30px] border border-white/10 bg-white/[0.03] py-0 text-white">
                        <CardContent className="px-6 py-7 md:px-7 md:py-8">
                        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${mode.accentColor}`}>Included Deliverables</p>
                        <h2 className="mt-3 text-xl font-black tracking-tight text-white">최종 수령 체크리스트</h2>

                        <div className="mt-5 space-y-3">
                            {mode.deliverables.map((item) => (
                                <div key={`${mode.id}-sidebar-${item}`} className="flex items-start gap-3 rounded-[20px] border border-white/8 bg-black/20 px-4 py-4">
                                    <Check className={`mt-1 size-4 ${mode.accentColor}`} />
                                    <p className="text-sm leading-6 text-zinc-300">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[24px] border border-white/8 bg-black/20 p-5">
                            <p className="text-sm font-semibold text-zinc-100">리얼스토리도 함께 보세요</p>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">비슷한 취향의 고객이 어떤 모드를 골랐는지 먼저 보면 선택이 훨씬 빨라집니다.</p>
                            <Button asChild variant="outline" className="mt-4 h-11 w-full rounded-full border-white/15 bg-transparent text-white hover:bg-white/10">
                                <Link href="/reviews">
                                    실사용 후기 보기
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>
            </div>
        </div>
    );
}