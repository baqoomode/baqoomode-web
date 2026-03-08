import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { auth } from "@/lib/auth";

export const ADMIN_HOME_PATH = "/admin";
export const ADMIN_LOGIN_PATH = "/auth/login";

export function getSafeRedirectPath(redirectTo?: string | null, fallback = "/") {
    if (!redirectTo || !redirectTo.startsWith("/") || redirectTo.startsWith("//")) {
        return fallback;
    }

    return redirectTo;
}

export function getAdminRoleLabel(role: string) {
    switch (role) {
        case "owner":
            return "오너";
        case "manager":
            return "매니저";
        default:
            return "운영자";
    }
}

function buildAdminLoginUrl(redirectTo: string, reason?: "admin" | "forbidden") {
    const params = new URLSearchParams({
        redirectTo: getSafeRedirectPath(redirectTo, ADMIN_HOME_PATH),
    });

    if (reason) {
        params.set("reason", reason);
    }

    return `${ADMIN_LOGIN_PATH}?${params.toString()}`;
}

export async function getCurrentAdminContext() {
    const requestHeaders = await headers();
    const session = await auth.api.getSession({ headers: requestHeaders });

    if (!session?.user?.id) {
        return {
            session: null,
            admin: null,
        };
    }

    const admin = await db.query.adminUser.findFirst({
        where: (adminUser, { and, eq }) =>
            and(
                eq(adminUser.userId, session.user.id),
                eq(adminUser.isActive, true)
            ),
    });

    return {
        session,
        admin,
    };
}

export async function requireAdminAccess(redirectTo = ADMIN_HOME_PATH) {
    const context = await getCurrentAdminContext();

    if (!context.session) {
        redirect(buildAdminLoginUrl(redirectTo, "admin"));
    }

    if (!context.admin) {
        redirect(buildAdminLoginUrl(redirectTo, "forbidden"));
    }

    const session = context.session;
    const admin = context.admin;

    return {
        session,
        admin,
    };
}