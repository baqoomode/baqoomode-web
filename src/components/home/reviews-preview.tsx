"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PREVIEW_REVIEWS = [
    {
        id: 1,
        name: "김** 님",
        mode: "Pet Mode",
        rating: 5,
        content: "우리 강아지가 무지개 다리를 건너고 너무 슬퉜는데, 아침마다 켜지는 바꿔모드 앨범 덕분에 매일 위로받아요...",
        imageColor: "bg-amber-800",
    },
    {
        id: 2,
        name: "박** 대표님",
        mode: "Biz/Office Mode",
        rating: 5,
        content: "사무실 인포데스크 뒤에 설치했습니다. 방문하시는 손님들마다 특허증 액자 어디서 했냐고 꼭 물어보시네요!",
        imageColor: "bg-blue-800",
    },
    {
        id: 3,
        name: "이** 님",
        mode: "Memory Mode",
        rating: 5,
        content: "결혼 1주년 선물로 준비했는데, 불 꺼진 방에서 빛나는 웨딩 사진을 보니 남편이 눈물을 글썽이더라고요...",
        imageColor: "bg-rose-800",
    },
    {
        id: 4,
        name: "최** 님",
        mode: "Fandom Mode",
        rating: 5,
        content: "최애 아이돌 굿즈 중 단연 최고입니다. 방 불 끄고 켜놓으면 콘서트장에 온 것 같은 벅찬 감동이 밀려와요!",
        imageColor: "bg-purple-800",
    },
    {
        id: 5,
        name: "정** 고객님",
        mode: "Memory Mode",
        rating: 5,
        content: "부모님 칠순 잔치 때 가족 사진을 담아 선물해 드렸어요. 거실 분위기가 확 살아났다고 너무 좋아하십니다.",
        imageColor: "bg-zinc-800",
    },
    {
        id: 6,
        name: "송** 사장님",
        mode: "Biz/Office Mode",
        rating: 5,
        content: "카페 메뉴판으로 활용 중입니다. 조명이 은은해서 매장 전체 인테리어의 품격을 한 단계 높여주는 느낌이에요.",
        imageColor: "bg-teal-800",
    }
];

export function ReviewsPreview() {
    return (
        <section className="min-h-[calc(100vh-64px)] py-20 flex flex-col justify-center bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                            Real Stories
                        </h2>
                        <p className="text-lg text-zinc-400 font-light">
                            수많은 공간이 이미 완벽하게 스위칭 되었습니다.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden mb-20 flex">
                {/* Left/Right fading edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Moving track */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
                    {/* Render the list twice to create an infinite loops */}
                    {[...PREVIEW_REVIEWS, ...PREVIEW_REVIEWS].map((review, index) => (
                        <div key={`${review.id}-${index}`} className="w-[350px] md:w-[400px] flex-shrink-0">
                            <Card className="bg-[#121319]/80 border-white/5 backdrop-blur-md overflow-hidden hover:bg-[#16171e] transition-colors h-full flex flex-col rounded-2xl">
                                <div className={`w-full h-40 ${review.imageColor} flex items-center justify-center shrink-0 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500`}>
                                    <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Customer Photo</span>
                                </div>
                                <CardContent className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="font-bold text-white mb-2">{review.name}</h3>
                                                <span className="text-[10px] text-[#00dfb6] border border-[#00dfb6]/30 bg-[#00dfb6]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">{review.mode}</span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                            "{review.content}"
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center"
                >
                    <Link href="/reviews" className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 text-white bg-transparent hover:bg-white/5 transition-colors duration-300 font-medium text-sm tracking-wide">
                        모든 생생한 후기 보기
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
