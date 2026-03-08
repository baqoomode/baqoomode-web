import { LoginForm } from "@/components/auth/login-form";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { getSafeRedirectPath } from "@/lib/admin-auth";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { headers } from "next/headers";

// export const runtime = "edge";

type AuthNotice = {
    tone: "error" | "info";
    title: string;
    description: string;
};

function getProviderLabel(provider?: string) {
    switch (provider) {
        case "kakao":
            return "카카오";
        case "naver":
            return "네이버";
        case "google":
            return "Google";
        default:
            return "소셜";
    }
}

function getAuthNotice(error?: string, provider?: string, errorDescription?: string): AuthNotice | null {
    if (!error) {
        return null;
    }

    const providerLabel = getProviderLabel(provider);

    switch (error) {
        case "account_not_linked":
            return {
                tone: "info",
                title: "기존 계정 연결 확인이 필요합니다.",
                description: `동일한 이메일 정보의 기존 계정을 찾았지만 이번 ${providerLabel} 로그인과의 연결이 완료되지 않았습니다. 잠시 후 다시 시도하거나 기존에 사용하던 소셜 계정으로 로그인해 주세요.`,
            };
        case "unable_to_link_account":
        case "account_already_linked_to_different_user":
            return {
                tone: "info",
                title: "기존 계정과 자동 연결하지 못했습니다.",
                description: `동일한 이메일 정보의 기존 계정이 있어 연결을 시도했지만 완료되지 않았습니다. 잠시 후 다시 시도하거나 다른 소셜 계정으로 로그인해 주세요.`,
            };
        case "email_not_found":
            return {
                tone: "error",
                title: "이메일 정보를 확인할 수 없습니다.",
                description: `${providerLabel} 계정에서 이메일 정보를 제공하지 않아 로그인 또는 가입을 진행할 수 없습니다. 소셜 계정의 이메일 제공 동의를 확인한 뒤 다시 시도해 주세요.`,
            };
        case "access_denied":
            return {
                tone: "info",
                title: "로그인이 취소되었습니다.",
                description: `${providerLabel} 로그인 과정이 취소되었습니다. 원하시면 다시 시도해 주세요.`,
            };
        case "invalid_callback_request":
        case "invalid_code":
        case "no_code":
        case "please_restart_the_process":
        case "state_mismatch":
            return {
                tone: "error",
                title: "로그인 절차를 완료하지 못했습니다.",
                description: "인증 과정이 중간에 만료되었거나 중단되었습니다. 로그인 버튼을 다시 눌러 처음부터 진행해 주세요.",
            };
        case "signup_disabled":
            return {
                tone: "error",
                title: "가입이 제한되어 있습니다.",
                description: "현재 설정상 이 소셜 계정으로는 신규 가입을 진행할 수 없습니다. 기존 계정으로 로그인하거나 관리자에게 문의해 주세요.",
            };
        default:
            return {
                tone: "error",
                title: "로그인을 완료하지 못했습니다.",
                description: errorDescription || "잠시 후 다시 시도해 주세요. 문제가 계속되면 관리자에게 문의해 주세요.",
            };
    }
}

interface LoginPageProps {
    searchParams?: Promise<{
        redirectTo?: string;
        reason?: string;
        error?: string;
        error_description?: string;
        provider?: string;
    }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const resolvedSearchParams = searchParams ? await searchParams : undefined;
    const redirectTo = getSafeRedirectPath(resolvedSearchParams?.redirectTo, "/");
    const reason = resolvedSearchParams?.reason;
    const error = resolvedSearchParams?.error;
    const errorDescription = resolvedSearchParams?.error_description;
    const provider = resolvedSearchParams?.provider;
    const session = await auth.api.getSession({ headers: await headers() });
    const isAdminLogin = redirectTo.startsWith("/admin");
    const isForbiddenAdminEntry = reason === "forbidden";
    const authNotice = getAuthNotice(error, provider, errorDescription);

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

                {isAdminLogin ? (
                    <div className="mb-6 w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                            Admin Access
                        </p>
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
                        {session ? (
                            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                                <div>
                                    <p className="text-xs text-zinc-500">현재 로그인 계정</p>
                                    <p className="text-sm font-medium text-white">
                                        {session.user.name} · {session.user.email}
                                    </p>
                                </div>
                                <SignOutButton
                                    label="계정 전환"
                                    className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.05]"
                                />
                            </div>
                        ) : null}
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
                        {error ? (
                            <p className="mt-3 text-[11px] text-zinc-400">오류 코드: {error}</p>
                        ) : null}
                    </div>
                ) : null}

                {/* Login Form (Social Buttons) */}
                <LoginForm redirectTo={redirectTo} reason={reason} />

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
