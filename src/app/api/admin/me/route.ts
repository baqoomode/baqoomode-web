import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return NextResponse.json(
    {
      isAuthenticated: false,
      isAdmin: false,
      role: null,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}