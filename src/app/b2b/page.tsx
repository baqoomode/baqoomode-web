import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function B2BPage() {
    return (
        <div className="min-h-screen bg-black pt-24">
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    B2B <span className="text-[#00dfb6]">PARTNERSHIP</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    바꿔모드의 앞서가는 발광 보드 기술과 공간 디자인 솔루션을 파트너에게 제안합니다. 대량 구매 및 인테리어 제휴 문의를 남겨주세요.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 max-w-lg mx-auto backdrop-blur-xl">
                    <p className="text-white font-medium mb-6">준비 중인 페이지입니다.</p>
                    <Link href="/">
                        <Button className="bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90 rounded-full px-8">
                            홈으로 돌아가기
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
