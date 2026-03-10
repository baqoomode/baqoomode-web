"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CUSTOMER_REVIEWS,
    FEATURED_STORIES,
    STORY_FILTERS,
    type StoryFilter,
} from "@/lib/real-stories";

export default function ReviewsPage() {
    const [filter, setFilter] = useState<StoryFilter>("all");

    const filteredReviews = useMemo(
        () => filter === "all"
            ? CUSTOMER_REVIEWS
            : CUSTOMER_REVIEWS.filter((review) => review.category === filter),
        [filter],
    );

    return (
        <div className="min-h-screen bg-[#050505] pb-24 text-white">
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(0,223,182,0.12),_transparent_35%),linear-gradient(180deg,#090909_0%,#050505_100%)] px-4 py-24 md:py-32">
                <div className="container mx-auto max-w-6xl">
                    <FadeUpInView className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00dfb6]">
                            Real Stories
                        </p>
                        <h1 className="mb-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                            일상은,
                            <br className="hidden md:block" /> 이렇게 빛이 됩니다.
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                            반려의 기억, 오피스와 매장, 팬덤, 그리고 오래 남기고 싶은 선물까지.
                            <br />
                            바꿔모드가 머무는 순간들을 모았습니다.
                        </p>
                    </FadeUpInView>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4">
                <section className="py-16 md:py-20">
                    <FadeUpInView className="mb-10">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                Featured Stories
                            </p>
                            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                이렇게 쓰이고 있습니다.
                            </h2>
                        </div>
                    </FadeUpInView>

                    <div className="grid gap-5 md:grid-cols-2">
                        {FEATURED_STORIES.map((story, index) => (
                            <FadeUpInView key={story.id} delay={index * 0.08} className="h-full">
                                <Card
                                    className={`h-full gap-0 overflow-hidden rounded-[28px] border ${story.panelClass}`}
                                >
                                    <div className="border-b border-white/6 px-6 py-5">
                                        <div className="mb-3 flex flex-wrap items-center gap-3">
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
                                                {story.categoryLabel}
                                            </span>
                                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/85">
                                                {story.modeLabel}
                                            </span>
                                        </div>
                                        <p className="text-sm leading-7 text-zinc-300">{story.eyebrow}</p>
                                    </div>

                                    <CardContent className="px-6 py-6">
                                        <h3 className="mb-4 text-xl font-bold leading-8 text-white">{story.title}</h3>
                                        <p className="mb-6 text-sm leading-7 text-zinc-400 md:text-base">
                                            {story.summary}
                                        </p>
                                        <div className="mb-5 flex flex-wrap gap-2">
                                            {story.keywords.map((keyword) => (
                                                <span
                                                    key={keyword}
                                                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm leading-7 text-zinc-100 md:text-base">{story.quote}</p>
                                    </CardContent>
                                </Card>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                <section className="py-6 md:py-10">
                    <FadeUpInView className="mb-8">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                Customer Reviews
                            </p>
                            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                실제 후기
                            </h2>
                        </div>
                    </FadeUpInView>

                    <FadeUpInView delay={0.04} className="mb-8 flex flex-wrap gap-3">
                        {STORY_FILTERS.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                                    filter === category.id
                                        ? "border-[#00dfb6]/40 bg-[#00dfb6]/15 text-white shadow-[0_0_0_1px_rgba(0,223,182,0.14)]"
                                        : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </FadeUpInView>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredReviews.map((review, index) => (
                            <FadeUpInView key={review.id} delay={index * 0.06} className="h-full">
                                <Card
                                    className="h-full gap-0 rounded-[28px] border border-white/10 bg-[#101113] py-0"
                                >
                                    <div className="border-b border-white/6 px-6 py-5">
                                        <div className="mb-4 flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-lg font-bold text-white">{review.name}</p>
                                                <p className="mt-1 text-sm text-zinc-400">{review.location}</p>
                                            </div>
                                            <div className="flex gap-1 text-amber-400">
                                                {Array.from({ length: review.rating }).map((_, index) => (
                                                    <Star key={index} className="size-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className={`rounded-full border px-3 py-1 text-xs ${review.accentClass}`}>
                                                {review.modeLabel}
                                            </span>
                                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                                                {review.purpose}
                                            </span>
                                        </div>
                                    </div>

                                    <CardContent className="px-6 py-6">
                                        <div className="mb-5 grid gap-3 text-sm text-zinc-300">
                                            <div className="flex items-center justify-between gap-3 border-b border-white/6 pb-3">
                                                <span className="text-zinc-500">사용 장면</span>
                                                <span className="text-right text-white">{review.useCase}</span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="text-zinc-500">남긴 한 줄</span>
                                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                                                    추후 사진 후기 연동 가능
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-7 text-zinc-200 md:text-base">
                                            &ldquo;{review.summary}&rdquo;
                                        </p>
                                    </CardContent>
                                </Card>
                            </FadeUpInView>
                        ))}
                    </div>
                </section>

                <section className="pt-10 md:pt-14">
                    <FadeUpInView>
                        <Card className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,223,182,0.12),rgba(255,255,255,0.04))] py-0">
                            <CardContent className="px-6 py-8 text-center md:px-8 md:py-10">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                                    For Your Space
                                </p>
                                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                                    이제, 당신의 공간 차례입니다.
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-200 md:text-base">
                                    마음에 남는 장면이 있었다면, 나에게 맞는 모드를 고르거나 바로 상담으로 이어가보세요.
                                </p>

                                <div className="mt-6 flex flex-wrap justify-center gap-3">
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
                                        <Link href="/support/contact">
                                            구매 전 상담하기
                                            <MessageCircle className="size-4" />
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
