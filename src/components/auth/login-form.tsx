"use client";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function LoginForm() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm">
            <Button
                size="lg"
                className="w-full bg-[#fae100] text-black hover:bg-[#fae100]/90"
                onClick={() => signIn.social({ provider: "kakao" })}
            >
                카카오로 시작하기
            </Button>

            <Button
                size="lg"
                className="w-full bg-[#03c75a] text-white hover:bg-[#03c75a]/90"
                onClick={() => signIn.social({ provider: "naver" })}
            >
                네이버로 시작하기
            </Button>

            <Button
                size="lg"
                className="w-full bg-white text-black border border-zinc-200 hover:bg-zinc-100"
                onClick={() => signIn.social({ provider: "google" })}
            >
                Google로 시작하기
            </Button>
        </div>
    );
}
