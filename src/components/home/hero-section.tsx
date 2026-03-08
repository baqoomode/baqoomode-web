"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

const HERO_CONTENT = [
    { label: "#Pet_Mode", word: `"영원히 빛나는 나의 가족"`, image: "/hero/hero_pet-change.webp", mobileImage: "/hero/hero_pet_mobile-change.webp" },
    { label: "#Biz_Mode", word: `"당신의 가치가 증명되는 곳"`, image: "/hero/hero_biz-change.webp" },
    { label: "#Fandom_Mode", word: `"내 방 안의 작은 콘서트"`, image: "/hero/hero_fandom-change.webp" },
    { label: "#Memory_Mode", word: `"가장 찬란한 순간을 켜다"`, image: "/hero/hero_memory-change.webp" }
];

export function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % HERO_CONTENT.length);
        }, 5000); // 텍스트가 기니까 5초로 늘림
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-[75vh] py-20 md:py-24 flex items-center justify-center overflow-hidden bg-black">
            {/* Dynamic Background Images */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    {/* Desktop Image */}
                    <motion.img
                        key={`desktop-${HERO_CONTENT[activeIndex].image}`}
                        src={HERO_CONTENT[activeIndex].image}
                        alt="Hero Background"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.65, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Mobile Image */}
                    <motion.img
                        key={`mobile-${HERO_CONTENT[activeIndex].mobileImage || HERO_CONTENT[activeIndex].image}`}
                        src={HERO_CONTENT[activeIndex].mobileImage || HERO_CONTENT[activeIndex].image}
                        alt="Hero Background Mobile"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.65, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="block md:hidden absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

            {/* Existing Dynamic Abstract Background (Softened) */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen animate-pulse duration-1000" />
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-900/30 blur-[120px] rounded-full mix-blend-screen" />
            </div>


            <div className="container relative z-20 mx-auto px-4 flex flex-col items-center justify-center text-center h-full pb-16 md:pb-24">

                {/* Center Text Content */}
                <div className="max-w-5xl flex flex-col items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 mb-8 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-white/90">프리미엄 테크 라이프스타일 캔버스</span>
                        </div>
                    </motion.div>

                    <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[280px] flex justify-center mb-8">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-0 flex flex-col items-center justify-center w-full"
                            >
                                <span className="text-2xl sm:text-3xl text-white/60 font-semibold tracking-widest mb-4">
                                    {HERO_CONTENT[activeIndex].label}
                                </span>
                                <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00dfb6] via-amber-200 to-[#00dfb6] drop-shadow-[0_0_20px_rgba(0,223,182,0.6)] leading-[1.25] text-center w-full">
                                    {HERO_CONTENT[activeIndex].word}
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        단순한 액자를 넘어, 가장 찬란한 순간을 밝히는 빛의 예술.<br className="hidden md:block" />
                        <strong className="text-white">baQoo MODE</strong>가 당신의 일상을 작품으로 만듭니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center w-full"
                    >
                        <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all bg-primary text-primary-foreground font-bold hover:scale-105 active:scale-95 duration-300">
                            내게 맞는 모드 찾기
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all font-medium backdrop-blur-sm">
                            B2B 제휴 및 대량구매
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 text-white"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold opacity-70">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-primary drop-shadow-[0_0_8px_rgba(0,223,182,0.5)]"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
}
