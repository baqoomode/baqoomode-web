"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";

// Placeholder data - relying on R2 bucket URLs assuming user will upload matching .mp4 files
const MODES = [
    {
        id: "pet",
        title: "펫 모드",
        subtitle: "Pet Mode",
        slogan: "\"영원히 빛나는 나의 가족\"",
        description: "반려동물의 가장 예쁜 모습을 빛나는 프레임에 담아 영원히 간직하세요.",
        image: "/hero/hero_pet.png",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // 안전한 구글 클라우드 샘플 1
        accent: "text-amber-500",
    },
    {
        id: "biz",
        title: "오피스 모드",
        subtitle: "Biz/Office Mode",
        slogan: "\"당신의 가치가 증명되는 곳\"",
        description: "빛나는 상패와 위촉장. 작은 프레임 하나가 매장의 품격을 높여주는 솔루션입니다.",
        image: "/hero/hero_biz.png",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // 안전한 구글 클라우드 샘플 2
        accent: "text-emerald-400",
    },
    {
        id: "fandom",
        title: "덕질 모드",
        subtitle: "Fandom Mode",
        slogan: "\"내 방 안의 작은 콘서트\"",
        description: "최애의 가장 빛나는 순간을 내 방에서 매일 만나세요. 나만의 컬렉션 전시회.",
        image: "/hero/hero_fandom.png",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // 안전한 구글 클라우드 샘플 3
        accent: "text-pink-500",
    },
    {
        id: "memory",
        title: "메모리 모드",
        subtitle: "Memory Mode",
        slogan: "\"가장 찬란한 순간을 켜다\"",
        description: "인생의 가장 아름다운 순간을 빛으로 켜두세요. 감동적인 프리미엄 액자.",
        image: "/hero/hero_memory.png",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", // 안전한 구글 클라우드 샘플 4
        accent: "text-amber-200",
    }
];

export function ModeCuration() {
    return (
        <section className="min-h-[calc(100vh-64px)] py-12 md:py-20 flex flex-col justify-center bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative mb-8 md:mb-16">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
                            발견하세요, 당신의 <span className="text-zinc-500 italic font-medium">MODE</span>
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl font-light">
                            바꿔모드가 제안하는 4가지 감성 스위치
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Desktop View (Accordion Hover Interaction) */}
            <div className="hidden md:flex flex-row w-full max-w-[1600px] mx-auto h-[600px] gap-4 px-8">
                {MODES.map((mode) => (
                    <DesktopCard key={mode.id} mode={mode} />
                ))}
            </div>

            {/* Mobile View (Swipe Carousel with Play Toggle) */}
            <div className="flex md:hidden w-full h-[550px] overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 hide-scrollbar">
                {MODES.map((mode) => (
                    <MobileCard key={mode.id} mode={mode} />
                ))}
            </div>

            {/* Mobile Pagination Hint */}
            <div className="md:hidden flex justify-center gap-2 mt-4 text-zinc-600">
                <span className="w-2 h-2 rounded-full bg-[#00dfb6]"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
            </div>
        </section>
    );
}

// ----------------------------------------------------------------------------
// Desktop Card Component
// ----------------------------------------------------------------------------
function DesktopCard({ mode }: { mode: typeof MODES[0] }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isHovered) {
            // Add a slight delay to ensure UI expansion before hammering the video play
            const timeout = setTimeout(() => {
                videoRef.current?.play().catch(() => { });
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Reset video to start
            }
        }
    }, [isHovered]);

    return (
        <motion.div
            layout
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            className="relative h-full overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 group cursor-pointer"
            initial={{ flex: 1 }}
            animate={{ flex: isHovered ? 2.5 : 1 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
            {/* Background Image - fades out on hover */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none"
                animate={{ opacity: isHovered ? 0 : 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <img src={mode.image} alt={mode.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Background Video - fades in on hover */}
            <motion.video
                ref={videoRef}
                src={mode.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Dark Gradient Overlay for text readability */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.4 }}
            />

            {/* Content Container (Text & Buttons) */}
            <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[2px] bg-[#00dfb6]"></span>
                    <span className="text-zinc-300 font-medium tracking-wider uppercase text-sm">{mode.subtitle}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 whitespace-nowrap">{mode.title}</h3>

                {/* Additional text reveals softly */}
                <p className={`text-lg font-bold italic mb-3 ${mode.accent} drop-shadow-md`}>
                    {mode.slogan}
                </p>
                <p className="text-sm text-zinc-300 font-light line-clamp-2 md:line-clamp-3 w-full pr-4">
                    {mode.description}
                </p>
            </motion.div>

            {/* Clickable Area Overlay (Routes to specific mode detail page) */}
            <Link href={`/modes/${mode.id}`} className="absolute inset-0 w-full h-full z-10" aria-label={`View ${mode.title}`}>
                <span className="sr-only">View {mode.title}</span>
            </Link>
        </motion.div>
    );
}

// ----------------------------------------------------------------------------
// Mobile Card Component
// ----------------------------------------------------------------------------
function MobileCard({ mode }: { mode: typeof MODES[0] }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Intersection Observer to reset video when swiped out of view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the card is less than 50% visible, completely reset
                if (!entry.isIntersecting) {
                    setIsPlaying(false);
                    if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                    }
                }
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        } else {
            videoRef.current?.play().catch(() => { });
            setIsPlaying(true);
        }
    };

    return (
        <div
            ref={cardRef}
            className="relative flex-none w-[85vw] h-full snap-center rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10"
        >
            {/* Background Image - hidden when playing */}
            <motion.div
                className="absolute inset-0 w-full h-full pointer-events-none"
                animate={{ opacity: isPlaying ? 0 : 0.6 }}
                transition={{ duration: 0.4 }}
            >
                <img src={mode.image} alt={mode.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Background Video - shown when playing */}
            <motion.video
                ref={videoRef}
                src={mode.video}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                animate={{ opacity: isPlaying ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Dark Gradient Overlay for text readability (only visible when not playing) */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none"
                animate={{ opacity: isPlaying ? 0 : 1 }}
                transition={{ duration: 0.4 }}
            />

            {/* Text Content overlay */}
            <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end pb-24 pointer-events-none"
                animate={{ opacity: isPlaying ? 0 : 1 }}
                transition={{ duration: 0.4 }}
            >
                <div>
                    <span className="text-[#00dfb6] font-semibold text-sm block mb-1">{mode.subtitle}</span>
                    <h3 className="text-3xl font-bold text-white mb-2">{mode.title}</h3>
                    <p className={`text-base font-bold italic mb-3 shadow-black drop-shadow-lg ${mode.accent}`}>
                        {mode.slogan}
                    </p>
                    <p className="text-sm text-zinc-300 font-light line-clamp-3">
                        {mode.description}
                    </p>
                </div>
            </motion.div>

            {/* Play/Pause Toggle Button Area - Centered overlay */}
            {!isPlaying ? (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white z-20 hover:bg-white/20 transition-colors"
                    aria-label="Play Video"
                >
                    <Play className="w-6 h-6 ml-1" />
                </button>
            ) : (
                // Invisible overlay to catch taps when playing to pause
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 w-full h-full z-20"
                    aria-label="Pause Video"
                >
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                        <Pause className="w-5 h-5" />
                    </div>
                </button>
            )}

            {/* Footer Navigation Link (Always accessible at bottom bounds) */}
            <motion.div
                className="absolute bottom-6 left-6 z-30"
                animate={{ opacity: isPlaying ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <Link href={`/modes/${mode.id}`} className="inline-flex items-center text-sm font-medium text-white group">
                    <span>자세히 보기</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </div>
    );
}
