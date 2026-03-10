import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { buildAdminLoginPath } from "@/lib/admin-access";
import { getAdminContextFromHeaders } from "@/lib/admin-context";

export async function proxy(request: NextRequest) {
    const redirectTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    const { session, admin } = await getAdminContextFromHeaders(request.headers);

    if (!session) {
        return NextResponse.redirect(new URL(buildAdminLoginPath(redirectTo, "admin"), request.url));
    }

    if (!admin) {
        return NextResponse.redirect(new URL(buildAdminLoginPath(redirectTo, "forbidden"), request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};