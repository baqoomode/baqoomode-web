import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-black pt-24">
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    CUSTOMER <span className="text-[#00dfb6]">SUPPORT</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    도움이 필요하신가요? 자주 묻는 질문이나 공지사항을 확인하시거나 1:1 문의를 남겨주세요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {["Notice", "FAQ", "A/S Guide", "Contact Us"].map((item) => (
                        <div key={item} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all cursor-not-allowed">
                            <p className="text-white font-bold">{item}</p>
                            <p className="text-zinc-500 text-xs mt-2">Coming Soon</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Link href="/">
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                            홈으로 돌아가기
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
