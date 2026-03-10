"use client";

import { signIn } from "../../lib/auth-client";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
    redirectTo?: string;
    reason?: string;
}

export function LoginForm({ redirectTo = "/", reason }: LoginFormProps) {
    const buildLoginPageURL = (
        provider: "kakao" | "naver" | "google",
        extras?: Record<string, string>
    ) => {
        const params = new URLSearchParams({
            redirectTo,
            provider,
        });

        if (reason) {
            params.set("reason", reason);
        }

        Object.entries(extras ?? {}).forEach(([key, value]) => {
            params.set(key, value);
        });

        return new URL(`/auth/login?${params.toString()}`, window.location.origin).toString();
    };

    const buildErrorCallbackURL = (provider: "kakao" | "naver" | "google") => {
        return buildLoginPageURL(provider);
    };

    const buildNewUserCallbackURL = (provider: "kakao" | "naver" | "google") => {
        return buildLoginPageURL(provider, { welcome: "1" });
    };

    const signInWithProvider = (provider: "kakao" | "naver" | "google") => {
        return signIn.social({
            provider,
            callbackURL: redirectTo,
            errorCallbackURL: buildErrorCallbackURL(provider),
            newUserCallbackURL: buildNewUserCallbackURL(provider),
        });
    };

    return (
        <div className="flex flex-col gap-3.5 w-full">
            {/* Kakao Login */}
            <Button
                size="lg"
                className="w-full h-[56px] bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 font-bold text-[15px] rounded-2xl relative group overflow-hidden transition-all duration-300 border-none shadow-[0_4px_20px_-5px_rgba(254,229,0,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(254,229,0,0.5)]"
                onClick={() => signInWithProvider("kakao")}
            >
                <div className="absolute left-6 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.508 1.636 4.7 4.148 5.968l-.837 3.078c-.046.17.058.337.228.337.08 0 .157-.03.21-.087l3.585-2.394c.218.03.44.045.665.045 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
                    </svg>
                </div>
                카카오로 3초 시작하기
            </Button>

            {/* Naver Login */}
            <Button
                size="lg"
                className="w-full h-[56px] bg-[#03C75A] text-white hover:bg-[#03C75A]/90 font-bold text-[15px] rounded-2xl relative group overflow-hidden transition-all duration-300 border-none shadow-[0_4px_20px_-5px_rgba(3,199,90,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(3,199,90,0.5)]"
                onClick={() => signInWithProvider("naver")}
            >
                <div className="absolute left-6 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.273 12.845L7.376 0H0v24h7.726V11.155L16.624 24H24V0h-7.727v12.845z" />
                    </svg>
                </div>
                네이버로 3초 시작하기
            </Button>

            {/* Google Login */}
            <Button
                size="lg"
                className="w-full h-[56px] bg-white text-[#3c4043] hover:bg-zinc-50 font-bold text-[15px] rounded-2xl relative group overflow-hidden transition-all duration-300 border border-zinc-200 shadow-[0_4px_20px_-5px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_25px_-5px_rgba(255,255,255,0.2)]"
                onClick={() => signInWithProvider("google")}
            >
                <div className="absolute left-6 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                </div>
                Google로 3초 시작하기
            </Button>
        </div>
    );
}
