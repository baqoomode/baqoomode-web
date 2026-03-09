export const ADMIN_HOME_PATH = "/admin";
export const ADMIN_LOGIN_PATH = "/auth/login";

export function getSafeRedirectPath(redirectTo?: string | null, fallback = "/") {
    if (!redirectTo || !redirectTo.startsWith("/") || redirectTo.startsWith("//")) {
        return fallback;
    }

    return redirectTo;
}

export function getAdminRoleLabel(role?: string | null) {
    switch (role) {
        case "owner":
            return "오너";
        case "manager":
            return "매니저";
        default:
            return "운영자";
    }
}

export function buildAdminLoginPath(redirectTo: string, reason?: "admin" | "forbidden") {
    const params = new URLSearchParams({
        redirectTo: getSafeRedirectPath(redirectTo, ADMIN_HOME_PATH),
    });

    if (reason) {
        params.set("reason", reason);
    }

    return `${ADMIN_LOGIN_PATH}?${params.toString()}`;
}