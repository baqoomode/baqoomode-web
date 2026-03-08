import { NextResponse } from "next/server";
import { getCurrentAdminContext } from "@/lib/admin-auth";

export async function GET() {
  const { session, admin } = await getCurrentAdminContext();

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