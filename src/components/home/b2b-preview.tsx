"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Layers, Circle, Type, Power, Layout } from "lucide-react";

// Product Data for the Morphing Sequence
const B2B_PRODUCTS = [
    {
        id: "lightboard",
        title: "초슬림 발광보드",
        subtitle: "메인 인프라",
        description: "공간의 근본적인 밝기를 지배하는 완벽한 평면의 빛. DSE 초박형 설계.",
        icon: <Zap className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/lightboard-change.webp",
    },
    {
        id: "polygon",
        title: "입체 다각형 보드",
        subtitle: "기하학적 포인트",
        description: "삼각형, 육각형 등 평범함을 거부하는 3D 입체 V형 구조 설계.",
        icon: <Layers className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/polygon-change.webp",
    },
    {
        id: "round",
        title: "유연한 라운드 보드",
        subtitle: "빛의 파동",
        description: "공간의 거대한 기둥과 굴곡을 완벽히 감싸는 자유로운 곡면의 형태.",
        icon: <Circle className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/round-change.webp",
    },
    {
        id: "strip",
        title: "초박형 라인 띠보드",
        subtitle: "공간을 긋는 선",
        description: "천장과 벽의 틈새, 버려진 모서리를 베일 듯 날카롭게 채우는 빛.",
        icon: <Power className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/strip-change.webp",
    },
    {
        id: "hanji",
        title: "전통 한지 보드",
        subtitle: "한국의 헤리티지",
        description: "첨단 면발광 위에 덮힌 가장 따뜻한 전통 소재의 결. 은은히 번지는 독보성.",
        icon: <Layout className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/hanji-change.webp",
    },
    {
        id: "image",
        title: "이미지 조명",
        subtitle: "메시지의 발현",
        description: "사진, 브랜드 아이덴티티 자체를 선명한 빛으로 캔버스에 투영.",
        icon: <Type className="w-6 h-6 text-white" />,
        imageSrc: "/b2b/image-change.webp",
    }
];

function getStepConfig(index: number, stepSize: number) {
    const center = index * stepSize;
    const start = Math.max(0, center - stepSize / 2);
    const end = Math.min(1, center + stepSize / 2);
    const isLast = index === B2B_PRODUCTS.length - 1;

    return { start, center, end, isLast };
}

function B2BTextureLayer({
    product,
    index,
    scrollYProgress,
    stepSize,
}: {
    product: (typeof B2B_PRODUCTS)[number];
    index: number;
    scrollYProgress: MotionValue<number>;
    stepSize: number;
}) {
    const { start, center, end, isLast } = getStepConfig(index, stepSize);
    const opacity = useTransform(
        scrollYProgress,
        isLast ? [start, center] : [start, center, end],
        isLast ? [0, 1] : [0, 1, 0]
    );

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
        >
            <Image
                src={product.imageSrc}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>
    );
}

function B2BTextOverlay({
    product,
    index,
    scrollYProgress,
    stepSize,
}: {
    product: (typeof B2B_PRODUCTS)[number];
    index: number;
    scrollYProgress: MotionValue<number>;
    stepSize: number;
}) {
    const { start, center, end, isLast } = getStepConfig(index, stepSize);
    const opacity = useTransform(
        scrollYProgress,
        isLast ? [start, center] : [start, center, end],
        isLast ? [0, 1] : [0, 1, 0]
    );
    const y = useTransform(
        scrollYProgress,
        isLast ? [start, center] : [start, center, end],
        isLast ? [40, 0] : [40, 0, -40]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute z-30 flex flex-col items-center justify-center text-center p-8 w-full max-w-2xl pointer-events-none drop-shadow-2xl"
        >
            <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-black/50 backdrop-blur-md border border-white/20">
                {product.icon}
            </div>
            <span className="text-[#00dfb6] font-semibold tracking-widest text-sm mb-3">
                {product.subtitle}
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 drop-shadow-md">
                {product.title}
            </h3>
            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed drop-shadow-md">
                {product.description}
            </p>
        </motion.div>
    );
}

export function B2BPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Track scroll progress across a very tall container (e.g., 600vh for 6 items)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ---------------------------------------------------------
    // 1. MORPHING CANVAS DIMENSION SETTINGS
    // We define how the central shape changes at each of the 6 steps
    // ---------------------------------------------------------
    // Map scroll progress 0 -> 1 into 6 distinct phases
    const phases = [0, 0.2, 0.4, 0.6, 0.8, 1];

    // Responsive Arrays based on `isMobile` state
    const widthsDesktop = ["80vw", "40vw", "50vw", "10vw", "60vw", "90vw"];
    const widthsMobile = ["95vw", "90vw", "95vw", "20vw", "95vw", "100vw"]; // Much wider on mobile

    const heightsDesktop = ["60vh", "40vw", "50vw", "80vh", "60vh", "70vh"];
    // 모바일에서는 한지 보드(80vh)처럼 전체적으로 크고 풍성하게! (초슬림, 다각형, 라운드 모두 높이 상향)
    const heightsMobile = ["70vh", "75vh", "80vh", "80vh", "80vh", "100vh"];

    const radiusDesktop = ["0px", "40px", "50%", "100px", "16px", "0px"];
    const radiusMobile = ["0px", "24px", "50%", "100px", "12px", "0px"];

    // Morphing Widths (vw/px)
    const morphWidth = useTransform(
        scrollYProgress,
        phases,
        isMobile ? widthsMobile : widthsDesktop
    );

    // Morphing Heights (vh/px)
    const morphHeight = useTransform(
        scrollYProgress,
        phases,
        isMobile ? heightsMobile : heightsDesktop
    );

    // Morphing Border Radius
    const morphRadius = useTransform(
        scrollYProgress,
        phases,
        isMobile ? radiusMobile : radiusDesktop
    );

    // Morphing Texture Rotation (Just to give it a slight dynamic 3D feel during scroll)
    const morphRotate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 15] // Slowly rotates 15 degrees over the entire scroll
    );


    const stepSize = 1 / (B2B_PRODUCTS.length - 1); // e.g. 0.2 for 6 items
    const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const finalCtaOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);


    return (
        <section id="b2b-preview" ref={containerRef} className="relative h-[600vh] bg-black">

            {/* STICKY RENDER LAYER */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">

                {/* Intro Title Overlay (Fades out quickly) */}
                <motion.div
                    style={{ opacity: introOpacity }}
                    className="absolute top-12 left-0 w-full text-center z-40 pointer-events-none"
                >
                    <span className="text-[#00dfb6] font-medium tracking-widest text-sm uppercase">
                        For Business & Experts
                    </span>
                    <h2 className="text-3xl font-bold mt-2 text-white">압도적인 공간의 재창조</h2>
                </motion.div>

                {/* --- THE MORPHING CANVAS --- */}
                {/* This single div changes its shape and border-radius smoothly based on scroll */}
                <motion.div
                    style={{
                        width: morphWidth,
                        height: morphHeight,
                        borderRadius: morphRadius,
                        rotate: morphRotate,
                    }}
                    className="relative overflow-hidden shadow-2xl shadow-[#00dfb6]/10 flex items-center justify-center border border-white/10 bg-zinc-900"
                >

                    {/* Texture Crossfades INSIDE the canvas */}
                    {B2B_PRODUCTS.map((product, index) => {
                        return (
                            <B2BTextureLayer
                                key={`tex-${product.id}`}
                                product={product}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                stepSize={stepSize}
                            />
                        );
                    })}
                </motion.div>


                {/* --- TEXT & UI OVERLAYS --- */}
                {B2B_PRODUCTS.map((product, index) => {
                    return (
                        <B2BTextOverlay
                            key={`desc-${product.id}`}
                            product={product}
                            index={index}
                            scrollYProgress={scrollYProgress}
                            stepSize={stepSize}
                        />
                    );
                })}


                {/* Final CTA Button (Fades in at the very end) */}
                <motion.div
                    style={{ opacity: finalCtaOpacity }}
                    className="absolute bottom-12 flex justify-center w-full pointer-events-auto z-50"
                >
                    <Link href="/products" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#00dfb6] text-black hover:bg-white transition-colors duration-300 font-bold text-lg tracking-wide shadow-xl shadow-[#00dfb6]/30">
                        제품 라인업 상세 보기
                        <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

