import Link from "next/link";

import { ArrowRight, CircleHelp } from "lucide-react";

import { ModeCuration } from "@/components/home/mode-curation";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "For You (B2C) - 바꿔모드 baQoo MODE",
    description: "당신의 감성을 스위칭할 4가지 특별한 모드를 만나보세요.",
};

export default function ModesPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white [&>#mode-curation]:bg-transparent">
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(0,223,182,0.14),_transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)]">
                <div className="container mx-auto max-w-6xl px-4 py-24 md:py-32">
                    <FadeUpInView className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#00dfb6]">
                            Lifestyle Modes
                        </p>
                        <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                            발견하세요, 당신의 <span className="text-zinc-500 italic font-medium">MODE</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                            바꿔모드가 제안하는 4가지 감성 스위치
                        </p>
                    </FadeUpInView>
                </div>
            </section>

            <ModeCuration variant="page" />

            <div className="container mx-auto max-w-6xl px-4 pb-16 md:pb-24">
                <section className="pt-10 md:pt-14">
                    <FadeUpInView>
                        <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,223,182,0.12),rgba(255,255,255,0.04))] py-0">
                            <CardContent className="px-6 py-8 text-center md:px-8 md:py-10">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                    For Your Mode
                                </p>
                                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                    이제, 당신의 모드를 찾아볼 차례입니다.
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
                                    공간의 분위기, 취향, 남기고 싶은 장면에 맞는 모드를 더 살펴보고,
                                    <br />
                                    궁금한 점은 QnA에서 바로 확인해보세요.
                                </p>

                                <div className="mt-6 flex flex-wrap justify-center gap-3">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-full bg-white px-6 text-black hover:bg-zinc-200"
                                    >
                                        <Link href="/reviews">
                                            실사용 후기 보기
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10"
                                    >
                                        <Link href="/support/faq">
                                            QnA 바로가기
                                            <CircleHelp className="size-4" />
                                        </Link>
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
