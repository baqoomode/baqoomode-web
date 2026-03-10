import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";
import { LoginSessionPanel } from "@/components/auth/login-session-panel";

export type AuthNotice = {
    tone: "error" | "info";
    title: string;
    description: string;
};

interface LoginPageShellProps {
    redirectTo?: string;
    reason?: string | null;
    authNotice?: AuthNotice | null;
    errorCode?: string | null;
}

export function LoginPageShell({ redirectTo = "/", reason, authNotice, errorCode }: LoginPageShellProps) {
    const isAdminLogin = redirectTo.startsWith("/admin");
    const isForbiddenAdminEntry = reason === "forbidden";

    return (
        <div className="min-h-[calc(100vh-64px)] bg-black flex flex-col items-center justify-start pt-24 md:pt-40 px-4 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-[400px] z-10 flex flex-col items-center">
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

                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">가장 찬란한 순간으로의 모드 전환</h2>
                    <p className="text-zinc-500 text-sm">Every Moment, New MODE.</p>
                </div>

                {isAdminLogin ? (
                    <div className="mb-6 w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">Admin Access</p>
                        <p className="mt-3 text-sm font-semibold text-white">
                            {isForbiddenAdminEntry
                                ? "현재 계정에는 관리자 권한이 없습니다."
                                : "관리자 페이지 접근을 위해 로그인이 필요합니다."}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                            {isForbiddenAdminEntry
                                ? "다른 관리자 계정으로 다시 로그인해 주세요. 먼저 현재 계정에서 로그아웃한 뒤 진행하는 것을 권장합니다."
                                : "로그인 후에는 원래 접근하려던 관리자 페이지로 자동으로 돌아갑니다."}
                        </p>
                        <LoginSessionPanel />
                    </div>
                ) : null}

                {authNotice ? (
                    <div
                        className={`mb-6 w-full rounded-3xl border p-5 text-left ${
                            authNotice.tone === "error"
                                ? "border-rose-500/30 bg-rose-500/10"
                                : "border-amber-400/30 bg-amber-400/10"
                        }`}
                    >
                        <p
                            className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                                authNotice.tone === "error" ? "text-rose-200" : "text-amber-200"
                            }`}
                        >
                            Auth Notice
                        </p>
                        <p className="mt-3 text-sm font-semibold text-white">{authNotice.title}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-200">{authNotice.description}</p>
                        {errorCode ? <p className="mt-3 text-[11px] text-zinc-400">오류 코드: {errorCode}</p> : null}
                    </div>
                ) : null}

                <LoginForm redirectTo={redirectTo} reason={reason ?? undefined} />

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