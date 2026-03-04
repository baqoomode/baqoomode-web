"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    description: string;
    specs: Spec[];
    powerSpecs?: string;
    modelSpecs?: ModelSpec[];
}

export function ProductDetailClient({ product }: { product: ProductData }) {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        inquiry: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send an email or save to DB
        alert("제휴/견적 문의가 접수되었습니다. 담당자가 곧 연락드리겠습니다.");
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Product Image & Specs Area */}
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="aspect-video bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center overflow-hidden"
                >
                    <span className="text-muted-foreground">{product.name} Preview</span>
                </motion.div>

                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Technical Specifications</h3>
                    <dl className="divide-y divide-white/5 mb-6">
                        {product.specs.map((spec, idx) => (
                            <div key={idx} className="py-3 flex justify-between gap-4">
                                <dt className="text-muted-foreground font-medium w-1/3">{spec.label}</dt>
                                <dd className="text-foreground text-right w-2/3">{spec.value}</dd>
                            </div>
                        ))}
                    </dl>

                    {product.powerSpecs && (
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
                            <h4 className="text-sm font-bold text-primary mb-2">기본 사양</h4>
                            <p className="text-sm text-zinc-300 leading-relaxed">{product.powerSpecs}</p>
                        </div>
                    )}

                    {product.modelSpecs && product.modelSpecs.length > 0 && (
                        <div className="overflow-x-auto">
                            <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">모델별 상세 제원</h3>
                            <table className="w-full text-sm text-left text-zinc-300">
                                <thead className="text-xs text-zinc-400 uppercase bg-white/5">
                                    <tr>
                                        <th scope="col" className="px-4 py-3 rounded-tl-lg text-[#00dfb6]">모델</th>
                                        <th scope="col" className="px-4 py-3 text-[#00dfb6]">규격 (Size)</th>
                                        <th scope="col" className="px-4 py-3 text-[#00dfb6]">소비전력</th>
                                        <th scope="col" className="px-4 py-3 text-[#00dfb6]">무게</th>
                                        <th scope="col" className="px-4 py-3 rounded-tr-lg text-[#00dfb6]">비고</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {product.modelSpecs.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">{row.model}</td>
                                            <td className="px-4 py-3">{row.size}</td>
                                            <td className="px-4 py-3">{row.power}</td>
                                            <td className="px-4 py-3">{row.weight}</td>
                                            <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* B2B Inquiry Form Area */}
            <div>
                <Card className="bg-card/30 backdrop-blur-md border border-white/10 sticky top-24">
                    <CardHeader>
                        <CardTitle>B2B 제휴 및 견적 문의</CardTitle>
                        <CardDescription>대량 구매, 기업 커스텀 제작, 브랜드 제휴 등</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="companyName" className="text-sm font-medium">회사명</label>
                                    <Input
                                        id="companyName"
                                        placeholder="주식회사 바꿔"
                                        required
                                        className="bg-background/50"
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contactName" className="text-sm font-medium">담당자 성함</label>
                                    <Input
                                        id="contactName"
                                        placeholder="홍길동"
                                        required
                                        className="bg-background/50"
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">이메일</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="hello@baqoomode.com"
                                    required
                                    className="bg-background/50"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">연락처</label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="010-0000-0000"
                                    required
                                    className="bg-background/50"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="inquiry" className="text-sm font-medium">문의 내용</label>
                                <Textarea
                                    id="inquiry"
                                    placeholder="필요하신 수량, 사이즈, 타겟 일정 등을 자유롭게 적어주세요."
                                    className="min-h-[120px] bg-background/50"
                                    required
                                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                                />
                            </div>

                            <Button type="submit" className="w-full h-12 text-md mt-6">
                                문의 접수하기
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
