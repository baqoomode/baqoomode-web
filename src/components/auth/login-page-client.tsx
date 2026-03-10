"use client";

import { useSearchParams } from "next/navigation";
import { getSafeRedirectPath } from "@/lib/admin-access";
import { AuthNotice, LoginPageShell } from "@/components/auth/login-page-shell";

function getProviderLabel(provider?: string | null) {
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

function getAuthNotice(error?: string | null, provider?: string | null, errorDescription?: string | null): AuthNotice | null {
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
                description: "동일한 이메일 정보의 기존 계정이 있어 연결을 시도했지만 완료되지 않았습니다. 잠시 후 다시 시도하거나 다른 소셜 계정으로 로그인해 주세요.",
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

export function LoginPageClient() {
    const searchParams = useSearchParams();
    const redirectTo = getSafeRedirectPath(searchParams.get("redirectTo"), "/");
    const reason = searchParams.get("reason");
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");
    const provider = searchParams.get("provider");
    const authNotice = getAuthNotice(error, provider, errorDescription);

    return <LoginPageShell redirectTo={redirectTo} reason={reason} authNotice={authNotice} errorCode={error} />;
}