import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
    return (
        <div className="min-h-screen bg-black pt-24">
            <div className="container mx-auto px-4 py-24 text-center">
                <ShoppingBag className="w-16 h-16 text-[#00dfb6] mx-auto mb-8" />
                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    YOUR <span className="text-[#00dfb6]">CART</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    장바구니가 비어 있습니다. 바꿔모드의 혁신적인 제품들을 만나보세요.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 max-w-lg mx-auto backdrop-blur-xl">
                    <Link href="/products">
                        <Button className="bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90 rounded-full px-8">
                            제품 보러가기
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
