import Link from "next/link";
import { ArrowRight, Check, Layers3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";

export interface Spec {
    label: string;
    value: string;
}

export interface ModelSpec {
    model: string;
    size: string;
    power: string;
    weight: string;
    note: string;
}

export interface ProductData {
    id: string;
    name: string;
    subtitle: string;
    signal: string;
    description: string;
    bestFor: string[];
    specs: Spec[];
    powerSpecs?: string;
    modelSpecs?: ModelSpec[];
}

const CORE_TECH = [
    {
        title: "DSE",
        description: "고균일 면발광으로 이미지 왜곡 없이 클린한 필드를 구현합니다.",
    },
    {
        title: "Flexible & Slim",
        description: "곡면 대응과 슬림 구조를 동시에 고려한 하드웨어 베이스입니다.",
    },
    {
        title: "D-COA",
        description: "벽 훼손 부담을 낮추는 간결한 시공 메커니즘을 지향합니다.",
    },
];

const PROJECT_GUIDE = ["공간 타입과 설치 위치", "희망 규격과 수량", "콘텐츠 교체 여부 또는 커스텀 범위"];

export function ProductDetailClient({ product }: { product: ProductData }) {

    return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-8">
                <FadeUpInView>
                    <Card className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(0,223,182,0.16),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] py-0">
                        <CardContent className="px-6 py-7 md:px-8 md:py-8">
                        <div className="flex items-center gap-3 text-[#00dfb6]">
                            <Sparkles className="size-4" />
                            <p className="text-sm font-semibold uppercase tracking-[0.28em]">Product Overview</p>
                        </div>
                        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <p className="text-sm font-medium text-zinc-400">{product.subtitle}</p>
                                <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                                    {product.name}
                                </h2>
                                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
                                    {product.signal}
                                </p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                {CORE_TECH.map((tech) => (
                                    <div key={tech.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
                                            {tech.title}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-zinc-300">{tech.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <section>
                    <FadeUpInView className="mb-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">Key Points</p>
                            <h3 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
                                공간에 바로 적용되는 핵심 포인트
                            </h3>
                        </div>
                    </FadeUpInView>

                    <div className="grid gap-4 md:grid-cols-2">
                        {product.specs.map((spec, index) => (
                            <FadeUpInView key={`${product.id}-${spec.label}`} delay={index * 0.07} className="h-full">
                                <Card className="rounded-3xl border border-white/10 bg-white/[0.03] py-0">
                                    <CardContent className="px-5 py-5 md:px-6 md:py-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                                            {spec.label}
                                        </p>
                                        <p className="mt-3 text-lg font-semibold leading-8 text-zinc-100">
                                            {spec.value}
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                {product.powerSpecs && (
                    <FadeUpInView delay={0.06}>
                        <Card className="rounded-[28px] border border-[#00dfb6]/20 bg-[#00dfb6]/[0.06] py-0">
                            <CardContent className="px-6 py-6 md:px-8 md:py-7">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">Base Spec</p>
                                <p className="mt-4 text-base leading-8 text-zinc-100 md:text-lg">{product.powerSpecs}</p>
                            </CardContent>
                        </Card>
                    </FadeUpInView>
                )}

                {product.modelSpecs && product.modelSpecs.length > 0 && (
                    <FadeUpInView delay={0.1}>
                        <Card className="rounded-[28px] border border-white/10 bg-white/[0.03] py-0">
                            <CardContent className="px-0 py-0">
                                <div className="border-b border-white/10 px-6 py-6 md:px-8">
                                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">Model Spec</p>
                                    <h3 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
                                        모델별 상세 제원
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[720px] text-left text-sm text-zinc-300">
                                        <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.18em] text-zinc-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 text-[#00dfb6]">모델</th>
                                                <th scope="col" className="px-6 py-4 text-[#00dfb6]">규격</th>
                                                <th scope="col" className="px-6 py-4 text-[#00dfb6]">소비전력</th>
                                                <th scope="col" className="px-6 py-4 text-[#00dfb6]">무게</th>
                                                <th scope="col" className="px-6 py-4 text-[#00dfb6]">비고</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/6">
                                            {product.modelSpecs.map((row) => (
                                                <tr key={`${product.id}-${row.model}`} className="transition-colors hover:bg-white/[0.03]">
                                                    <td className="whitespace-nowrap px-6 py-4 font-semibold text-white">{row.model}</td>
                                                    <td className="px-6 py-4">{row.size}</td>
                                                    <td className="px-6 py-4">{row.power}</td>
                                                    <td className="px-6 py-4">{row.weight}</td>
                                                    <td className="px-6 py-4 text-zinc-400">{row.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeUpInView>
                )}
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <FadeUpInView amount={0.1}>
                    <Card className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] py-0">
                        <CardContent className="px-6 py-7 md:px-7 md:py-8">
                        <div className="flex items-center gap-3 text-[#00dfb6]">
                            <Layers3 className="size-4" />
                            <p className="text-sm font-semibold uppercase tracking-[0.28em]">Project Guide</p>
                        </div>
                        <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                            도입 전에 정리하면 좋은 것
                        </h3>

                        <div className="mt-6 space-y-3">
                            {PROJECT_GUIDE.map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4">
                                    <Check className="mt-0.5 size-4 shrink-0 text-[#00dfb6]" />
                                    <p className="text-sm leading-6 text-zinc-200">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Best Fit</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {product.bestFor.map((item) => (
                                    <span
                                        key={`${product.id}-${item}`}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-medium text-zinc-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <Button asChild size="lg" className="h-12 rounded-full bg-white text-black hover:bg-zinc-200">
                                <Link href="/b2b">
                                    도입 문의하기
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-full border-white/15 bg-transparent text-white hover:bg-white/10"
                            >
                                <Link href="/products">전체 라인업 보기</Link>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>

                <FadeUpInView delay={0.08} amount={0.1}>
                    <Card className="rounded-[28px] border border-white/10 bg-white/[0.03] py-0">
                        <CardContent className="px-6 py-6 md:px-7 md:py-7">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">Application</p>
                        <div className="mt-4 space-y-3">
                            {product.bestFor.map((item) => (
                                <div key={`application-${product.id}-${item}`} className="rounded-2xl border border-white/8 px-4 py-4">
                                    <p className="text-base font-semibold text-zinc-100">{item}</p>
                                </div>
                            ))}
                        </div>
                        </CardContent>
                    </Card>
                </FadeUpInView>
            </div>
        </div>
    );
}
