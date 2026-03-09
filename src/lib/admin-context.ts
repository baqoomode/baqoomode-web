import { db } from "@/db";
import { auth } from "@/lib/auth";

export async function getAdminContextFromHeaders(requestHeaders: Headers) {
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