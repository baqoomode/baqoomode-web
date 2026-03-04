"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, UploadCloud, Info } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface ModeData {
    id: string;
    title: string;
    features: string[];
    price: number;
}

export function ModeDetailClient({ mode }: { mode: ModeData }) {
    const [selectedSize, setSelectedSize] = useState("A4");
    const [selectedFrame, setSelectedFrame] = useState("Silver");
    const [file, setFile] = useState<File | null>(null);

    // A simple formatter for Korean Won
    const formatPrice = (price: number) => new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">

            {/* Visual / Product Image Gallery Area */}
            <div className="lg:col-span-7 space-y-6 sticky top-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="aspect-square bg-black/40 rounded-3xl border border-white/10 overflow-hidden relative flex items-center justify-center"
                >
                    {/* Mock Product Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                    <div className="w-2/3 h-2/3 bg-gray-900 rounded-xl shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-gray-800 flex items-center justify-center">
                        <span className="text-muted-foreground">Premium Frame Preview</span>
                    </div>
                </motion.div>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4">
                    {mode.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-4 rounded-xl bg-card/30 border border-white/5 backdrop-blur-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customization & Purchase Flow Area */}
            <div className="lg:col-span-5 space-y-8">
                <Card className="bg-card/40 backdrop-blur-md border-white/10">
                    <CardHeader>
                        <CardTitle className="text-2xl">맞춤형 패키지 커스텀</CardTitle>
                        <CardDescription>공간에 딱 맞는 옵션을 선택해 주세요.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">

                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                            {/* Step 1: Size */}
                            <AccordionItem value="item-1" className="border-b-white/10">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">1. 보드 크기 선택</AccordionTrigger>
                                <AccordionContent className="pt-4 pb-6 space-y-3">
                                    {["A4 (Standard)", "A3 (Large)", "Custom (상담요청)"].map((size) => (
                                        <div
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedSize === size ? 'border-primary bg-primary/10' : 'border-border/50 hover:border-gray-500'}`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{size}</span>
                                                {size === "A4 (Standard)" && <span className="text-sm text-muted-foreground">+ 0원</span>}
                                                {size === "A3 (Large)" && <span className="text-sm text-muted-foreground">+ 45,000원</span>}
                                            </div>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Step 2: Frame Color */}
                            <AccordionItem value="item-2" className="border-b-white/10">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">2. 프레임 색상</AccordionTrigger>
                                <AccordionContent className="pt-4 pb-6 flex gap-4">
                                    {["Silver", "Matte Black", "Rose Gold"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedFrame(color)}
                                            className={`flex-1 py-3 px-2 rounded-lg border-2 text-sm font-medium transition-all ${selectedFrame === color ? 'border-primary bg-primary/10 text-primary' : 'border-border/50 text-muted-foreground hover:border-gray-500'}`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Step 3: Media Upload */}
                            <AccordionItem value="item-3" className="border-b-transparent">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">3. AI 미디어(사진/영상) 업로드</AccordionTrigger>
                                <AccordionContent className="pt-4 pb-2">
                                    <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer group">
                                        <UploadCloud className="w-10 h-10 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        <p className="font-medium mb-1">클릭하여 파일 선택 또는 드래그 앤 드롭</p>
                                        <p className="text-xs text-muted-foreground">고해상도 사진(JPG, PNG) 및 1분 미만 영상(MP4) 권장</p>
                                    </div>
                                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground bg-black/20 p-3 rounded-lg">
                                        <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                        <p>업로드된 미디어는 Cloudflare R2 스토리지에 안전하게 암호화되어 저장되며 주문 제작 목적 외에는 사용되지 않습니다.</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </CardContent>
                </Card>

                {/* Sticky Purchase Summary Bar (Desktop: inline, Mobile: fixed bottom) */}
                <div className="sticky bottom-4 z-40 bg-card border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
                    <div>
                        <p className="text-sm text-muted-foreground mb-1">총 결제 금액</p>
                        <p className="text-3xl font-black text-foreground">
                            {formatPrice(selectedSize === "A3 (Large)" ? mode.price + 45000 : mode.price)}
                        </p>
                    </div>
                    {/* We will tie this to Toss Payments later */}
                    <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg rounded-xl font-bold">
                        장바구니 담기 / 결제하기
                    </Button>
                </div>

            </div>
        </div>
    );
}
