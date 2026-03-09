import { NextResponse } from "next/server";
import { getAdminContextFromHeaders } from "@/lib/admin-context";

export const runtime = "edge";

export async function GET(request: Request) {
  const { session, admin } = await getAdminContextFromHeaders(request.headers);

  return NextResponse.json(
    {
      isAuthenticated: Boolean(session),
      isAdmin: Boolean(admin),
      role: admin?.role ?? null,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}