import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

// export const runtime = "edge";

export default async function LoginPage() {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-black flex flex-col items-center justify-start pt-24 md:pt-40 px-4 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[400px] z-10 flex flex-col items-center">
                {/* Brand Logo */}
                <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
                    <Image
                        src="/baqoo_login1-change-png.webp"
                        alt="baQoo MODE"
                        width={180}
                        height={60}
                        priority
                        className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </div>

                {/* Slogan */}
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        가장 찬란한 순간으로의 모드 전환
                    </h2>
                    <p className="text-zinc-500 text-sm">Every Moment, New MODE.</p>
                </div>

                {/* Login Form (Social Buttons) */}
                <LoginForm />

                {/* Onboarding Message */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        별도의 가입 절차 없이,<br />
                        소셜 계정으로 즉시 시작할 수 있습니다.
                    </p>
                    <p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
                        Login indicates agreement to terms & privacy
                    </p>
                </div>
            </div>
        </div>
    );
}
