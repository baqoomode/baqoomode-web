import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ASPage() {
    return (
        <div className="min-h-screen bg-black pt-24 text-center">
            <h1 className="text-3xl font-bold text-white mb-8">A/S Guide</h1>
            <div className="bg-white/5 p-12 rounded-3xl max-w-lg mx-auto">
                <p className="text-zinc-400 mb-6">준비 중인 페이지입니다.</p>
                <Link href="/support"><Button variant="outline">돌아가기</Button></Link>
            </div>
        </div>
    );
}
