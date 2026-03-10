"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURED_STORIES } from "@/lib/real-stories";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

export function ReviewsPreview() {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-20 md:py-28">
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-16 h-56 w-56 -translate-x-[140%] rounded-full bg-[#00dfb6]/10 blur-3xl"
                animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
                transition={{ duration: 9, repeat: Infinity }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-32 h-72 w-72 -translate-x-8 rounded-full bg-white/[0.05] blur-3xl"
                animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
                transition={{ duration: 11, repeat: Infinity }}
            />

            <div className="relative container mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00dfb6]">
                        Real Stories
                    </p>
                    <h2 className="mb-5 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                        켜지는 순간,
                        <br className="hidden md:block" /> 공간이 달라집니다.
                    </h2>
                    <p className="text-base leading-7 text-zinc-400 md:text-lg">
                        반려의 기억부터 오피스·매장, 팬덤, 선물까지.
                        바꿔모드의 실제 장면을 만나보세요.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18 }}
                    className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
                >
                    {FEATURED_STORIES.map((story) => (
                        <motion.div
                            key={story.id}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <Card
                                className={`h-full gap-0 overflow-hidden rounded-[28px] border ${story.panelClass} transition-colors duration-300 hover:border-white/20`}
                            >
                                <div className="border-b border-white/6 px-6 py-5">
                                    <div className="mb-3 flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
                                            {story.categoryLabel}
                                        </span>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80">
                                            {story.modeLabel}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-6 text-zinc-300">{story.eyebrow}</p>
                                </div>

                                <CardContent className="flex h-full flex-col px-6 py-6">
                                    <h3 className="mb-4 text-xl font-bold leading-8 text-white">{story.title}</h3>
                                    <p className="mb-5 flex-1 text-sm leading-7 text-zinc-400">{story.summary}</p>
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
                                    <p className="text-sm leading-7 text-zinc-200">{story.quote}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-12 text-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-7 text-[#d8fff7] hover:bg-[#00dfb6]/16 hover:text-white"
                    >
                        <Link href="/reviews">
                            리얼스토리 전체 보기
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
