"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock Review Data
const REVIEWS = [
    {
        id: 1,
        name: "김** 님",
        mode: "Pet Mode",
        rating: 5,
        content: "우리 강아지가 무지개 다리를 건너고 너무 슬퉜는데, 아침마다 켜지는 바꿔모드 액자 덕분에 위로를 받아요. QR로 짖는 소리 들을 때마다 눈물이 나네요. 정말 감사합니다.",
        imageColor: "bg-amber-800",
    },
    {
        id: 2,
        name: "박** 대표님",
        mode: "Biz/Office Mode",
        rating: 5,
        content: "사무실 인포데스크 뒤에 설치했습니다. 방문하시는 손님들마다 특허증 액자 어디서 했냐고 꼭 물어보시네요. 선이 없어서(D-COA) 너무 깔끔하고 고급스럽습니다.",
        imageColor: "bg-blue-800",
    },
    {
        id: 3,
        name: "이** 님",
        mode: "Memory Mode",
        rating: 5,
        content: "부모님 칠순 기념으로 가족 사진을 넣어 선물해 드렸어요. 일반 액자랑 다르게 자체 발광하니까 거실 분위기가 달라졌다고 너무 좋아하십니다.",
        imageColor: "bg-rose-800",
    },
    {
        id: 4,
        name: "최** 님",
        mode: "Fandom Mode",
        rating: 5,
        content: "침대 머리맡에 두고 매일 밤마다 최애 직캠 봅니다. 필름 갈아끼우기도 너무 편하고 빛 반사가 없어서 사진이 비치지 않는 게 제일 좋아요!",
        imageColor: "bg-purple-800",
    },
    {
        id: 5,
        name: "정** 실장님",
        mode: "Biz/Office Mode",
        rating: 5,
        content: "카페 메뉴판 용도로 B2B 대량 주문했습니다. 글씨가 떠있는 것 같은 입체 다각형 보드 효과 덕분에 매장 확장이 기대됩니다.",
        imageColor: "bg-slate-700",
    }
];

export default function ReviewsPage() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Pet Mode", "Biz/Office Mode", "Fandom Mode", "Memory Mode"];

    const filteredReviews = filter === "All" ? REVIEWS : REVIEWS.filter(r => r.mode === filter);

    return (
        <div className="min-h-screen bg-background py-24">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Real Reviews</h1>
                    <p className="text-xl text-muted-foreground">
                        누군가의 공간을 완벽하게 스위칭한 바꿔모드의 이야기
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                    : "bg-card/50 text-muted-foreground hover:bg-card border border-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Masonry/Grid Layout for Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="bg-card/30 border-white/5 backdrop-blur-md overflow-hidden hover:bg-card/50 transition-colors">
                                <div className={`w-full h-48 ${review.imageColor} flex items-center justify-center`}>
                                    <span className="text-white/30 text-sm">Customer Photo</span>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">{review.name}</h3>
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-sm">{review.mode}</span>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        "{review.content}"
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
