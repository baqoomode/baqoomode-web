import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_HOME_PATH, buildAdminLoginPath } from "@/lib/admin-access";
import { getAdminContextFromHeaders } from "@/lib/admin-context";

export {
    ADMIN_HOME_PATH,
    ADMIN_LOGIN_PATH,
    buildAdminLoginPath,
    getAdminRoleLabel,
    getSafeRedirectPath,
} from "@/lib/admin-access";

export async function getCurrentAdminContext() {
    return getAdminContextFromHeaders(await headers());
}

export async function requireAdminAccess(redirectTo = ADMIN_HOME_PATH) {
    const context = await getCurrentAdminContext();

    if (!context.session) {
        redirect(buildAdminLoginPath(redirectTo, "admin"));
    }

    if (!context.admin) {
        redirect(buildAdminLoginPath(redirectTo, "forbidden"));
    }

    const session = context.session;
    const admin = context.admin;

    return {
        session,
        admin,
    };
}