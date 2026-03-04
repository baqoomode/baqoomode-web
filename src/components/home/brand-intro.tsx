"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Zap } from "lucide-react";

export function BrandIntro() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Scene 1: "바꿔 모드"
    const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.25], [0, 1, 1, 0]);
    const text1Y = useTransform(scrollYProgress, [0, 0.05, 0.25], [100, 0, -100]);
    const text1Scale = useTransform(scrollYProgress, [0, 0.05, 0.25], [0.95, 1, 1.05]);

    // 2. Scene 2: "공간의 표정을 스위칭 하다!"
    const text2Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.4, 0.48], [0, 1, 1, 0]);
    const text2Y = useTransform(scrollYProgress, [0.22, 0.3, 0.48], [100, 0, -100]);

    // 3. Scene 3: Sequential Features Reveal
    // We map 8 items to sequentially appear between 0.5 and 0.9 scroll progress
    const item1Opacity = useTransform(scrollYProgress, [0.48, 0.52], [0, 1]);
    const item1Y = useTransform(scrollYProgress, [0.48, 0.52], [30, 0]);

    const item2Opacity = useTransform(scrollYProgress, [0.52, 0.56], [0, 1]);
    const item2Y = useTransform(scrollYProgress, [0.52, 0.56], [30, 0]);

    const item3Opacity = useTransform(scrollYProgress, [0.56, 0.60], [0, 1]);
    const item3Y = useTransform(scrollYProgress, [0.56, 0.60], [30, 0]);

    const item4Opacity = useTransform(scrollYProgress, [0.60, 0.64], [0, 1]);
    const item4Y = useTransform(scrollYProgress, [0.60, 0.64], [30, 0]);

    const item5Opacity = useTransform(scrollYProgress, [0.64, 0.68], [0, 1]);
    const item5Y = useTransform(scrollYProgress, [0.64, 0.68], [30, 0]);

    const item6Opacity = useTransform(scrollYProgress, [0.68, 0.72], [0, 1]);
    const item6Y = useTransform(scrollYProgress, [0.68, 0.72], [30, 0]);

    const item7Opacity = useTransform(scrollYProgress, [0.72, 0.76], [0, 1]);
    const item7Y = useTransform(scrollYProgress, [0.72, 0.76], [30, 0]);

    const item8Opacity = useTransform(scrollYProgress, [0.76, 0.80], [0, 1]);
    const item8Y = useTransform(scrollYProgress, [0.76, 0.80], [30, 0]);

    // Background glow
    const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 0.3]);

    const features = [
        {
            title: "Premium",
            desc: "박물관 수준의 조명 기술(DSE)을 일상 공간에 제안하는 하이엔드 오브제.",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            title: "Emotional",
            desc: "개개인의 서사, 추억, 팬심을 담아 감성을 울리는 완벽한 맞춤형 미디어.",
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: "Tech-Driven",
            desc: "QR코드 AI 연동과 선 숨김(D-COA) 기술이 만드는 마법 같은 공간 경험.",
            icon: <Zap className="w-6 h-6" />
        }
    ];

    const slogan = "공간의 표정을 스위칭 하다!";

    // In React, doing operations that might differ on server/client could cause hydration issues,
    // but splitting a constant string is perfectly fine to do in render body.
    const sloganChars = slogan.split("");

    return (
        // Reduced height to 350vh so the animation feels faster and flows into the next section naturally
        <section ref={containerRef} className="relative w-full h-[350vh] bg-black">

            {/* Sticky Container - this stays on screen while scrolling through the section */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Dynamic Background Glow */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,223,182,0.1)_0%,transparent_50%)]"
                    style={{ opacity: bgOpacity }}
                />

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">

                    {/* --- Scene 1: 브랜드 임팩트 --- */}
                    <motion.div
                        className="absolute text-center w-full px-4 flex flex-col items-center gap-4"
                        style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
                    >
                        <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
                            " 바꿔 모드 "
                        </h2>
                        <span className="text-xl md:text-3xl lg:text-4xl text-[#00dfb6] font-light tracking-[0.3em]">
                            baQoo MODE
                        </span>
                    </motion.div>

                    {/* --- Scene 2: 슬로건 (타이핑 하듯 순차적으로 나타나는 느낌을 위해 글자 분리) --- */}
                    <motion.div
                        className="absolute text-center w-full px-4"
                        style={{ opacity: text2Opacity, y: text2Y }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white flex justify-center flex-wrap gap-x-1 md:gap-x-3">
                            {sloganChars.map((char, index) => {
                                // Calculate individual letter opacity based on scroll range [0.3, 0.4]
                                // So letters appear sequentially as user scrolls
                                const start = 0.25 + (index * 0.005);
                                const end = start + 0.02;
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const letterOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                                return (
                                    <motion.span
                                        key={index}
                                        style={{ opacity: letterOpacity }}
                                        className={char === "스" || char === "위" || char === "칭" ? "text-[#00dfb6] font-bold" : ""}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                );
                            })}
                        </h2>
                    </motion.div>

                    {/* --- Scene 3: Sequential Final Layout --- */}
                    {/* Container wrapping the final layout blocks; pointer events auto so links work */}
                    <div className="absolute w-full px-4 md:px-8 max-w-6xl flex flex-col items-center justify-center pointer-events-auto h-full pt-8 md:pt-32">
                        {/* We use a wrapper with flex layout that centers everything together once assembled */}
                        <div className="w-full flex flex-col justify-center h-full max-h-screen md:max-h-[800px] py-4">

                            {/* Typography Section */}
                            <div className="relative mb-8 md:mb-24 md:pl-8 w-full text-left">
                                {/* Left Green Line (desktop only), appearing with the first text */}
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#00dfb6]/20 hidden md:block"
                                    style={{ opacity: item1Opacity, scaleY: item1Opacity, transformOrigin: "top" }}
                                />
                                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light leading-[1.3] md:leading-[1.5] text-zinc-400 tracking-tight mb-4 md:mb-8">
                                    <motion.div style={{ opacity: item1Opacity, y: item1Y }}>
                                        단순한 조명이나 액자를 넘어,
                                    </motion.div>
                                    <motion.div style={{ opacity: item2Opacity, y: item2Y }}>
                                        <span className="text-[#00dfb6] font-bold">당신의 서사가 담긴 빛</span>
                                        <span className="text-zinc-400">으로</span>
                                    </motion.div>
                                    <motion.div style={{ opacity: item3Opacity, y: item3Y }}>
                                        가장 찬란한 순간을 켭니다.
                                    </motion.div>
                                </h2>
                                <motion.div
                                    style={{ opacity: item4Opacity, y: item4Y }}
                                    className="text-sm md:text-xl text-zinc-500 font-light flex items-center gap-3 md:gap-4"
                                >
                                    <span className="w-8 md:w-16 h-[1px] bg-zinc-700"></span>
                                    <span className="tracking-wide uppercase text-xs sm:text-sm md:text-base text-zinc-400">
                                        baQoo MODE
                                    </span>
                                </motion.div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-16 w-full">
                                {/* Feature 1: Premium */}
                                <motion.div
                                    style={{ opacity: item5Opacity, y: item5Y }}
                                    className="group flex flex-col border-t border-zinc-800 pt-4 md:pt-8 hover:border-[#00dfb6]/50 transition-colors duration-500"
                                >
                                    <div className="hidden md:block mb-4 md:mb-6 text-zinc-600 group-hover:text-[#00dfb6] transition-colors duration-500">
                                        <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-medium mb-1 md:mb-4 text-zinc-200 tracking-wide group-hover:text-white transition-colors">
                                        Premium
                                    </h3>
                                    <p className="text-zinc-400 leading-snug md:leading-relaxed font-light text-xs md:text-base">
                                        박물관 수준의 조명 기술(DSE)을 일상 공간에 제안하는 하이엔드 오브제.
                                    </p>
                                </motion.div>

                                {/* Feature 2: Emotional */}
                                <motion.div
                                    style={{ opacity: item6Opacity, y: item6Y }}
                                    className="group flex flex-col border-t border-zinc-800 pt-4 md:pt-8 hover:border-[#00dfb6]/50 transition-colors duration-500"
                                >
                                    <div className="hidden md:block mb-4 md:mb-6 text-zinc-600 group-hover:text-[#00dfb6] transition-colors duration-500">
                                        <Heart className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-medium mb-1 md:mb-4 text-zinc-200 tracking-wide group-hover:text-white transition-colors">
                                        Emotional
                                    </h3>
                                    <p className="text-zinc-400 leading-snug md:leading-relaxed font-light text-xs md:text-base">
                                        개개인의 서사, 추억, 팬심을 담아 감성을 울리는 완벽한 맞춤형 미디어.
                                    </p>
                                </motion.div>

                                {/* Feature 3: Tech-Driven */}
                                <motion.div
                                    style={{ opacity: item7Opacity, y: item7Y }}
                                    className="group flex flex-col border-t border-zinc-800 pt-4 md:pt-8 hover:border-[#00dfb6]/50 transition-colors duration-500"
                                >
                                    <div className="hidden md:block mb-4 md:mb-6 text-zinc-600 group-hover:text-[#00dfb6] transition-colors duration-500">
                                        <Zap className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-medium mb-1 md:mb-4 text-zinc-200 tracking-wide group-hover:text-white transition-colors">
                                        Tech-Driven
                                    </h3>
                                    <p className="text-zinc-400 leading-snug md:leading-relaxed font-light text-xs md:text-base">
                                        QR코드 AI 연동과 선 숨김(D-COA) 기술이 만드는 마법 같은 공간 경험.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Discover More Link */}
                            <motion.div
                                style={{ opacity: item8Opacity, y: item8Y }}
                                className="mt-8 md:mt-24 pt-4 md:pt-8 border-t border-zinc-900/50 flex justify-end w-full"
                            >
                                <Link href="/brand" className="inline-flex items-center text-zinc-500 font-light hover:text-white transition-colors group">
                                    <span className="text-sm md:text-lg tracking-wide border-b border-transparent group-hover:border-white pb-1 md:pb-1 transition-colors">
                                        브랜드 스토리 더 알아보기
                                    </span>
                                    <ArrowRight className="ml-2 md:ml-4 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
