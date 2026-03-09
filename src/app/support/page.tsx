import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-black pt-24 text-center">
            <h1 className="text-4xl font-black text-white mb-8">CUSTOMER SUPPORT</h1>
            <div className="bg-white/5 p-12 rounded-3xl max-w-lg mx-auto">
                <p className="text-zinc-400 mb-8">원하시는 지원 서비스를 선택해주세요.</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <Link href="/support/faq" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 text-white">FAQ</Link>
                    <Link href="/support/notice" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 text-white">Notice</Link>
                    <Link href="/support/after-service" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 text-white">A/S</Link>
                    <Link href="/support/contact" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 text-white">1:1 Contact</Link>
                </div>
            </div>
        </div>
    );
}
