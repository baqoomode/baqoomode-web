import { NextResponse } from "next/server";
import { and, eq, gt } from "drizzle-orm";
import { getSessionCookie } from "better-auth/cookies";
import { db } from "@/db";
import { adminUser, session as sessionTable } from "@/db/schema";

export const runtime = "edge";

function getSessionTokenFromCookie(request: Request) {
  const signedSessionCookie = getSessionCookie(request);

  if (!signedSessionCookie) {
    return null;
  }

  return signedSessionCookie.split(".")[0] ?? null;
}

export async function GET(request: Request) {
  const sessionToken = getSessionTokenFromCookie(request);

  if (!sessionToken) {
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

  const now = new Date();
  const activeSession = await db.query.session.findFirst({
    columns: {
      userId: true,
    },
    where: and(
      eq(sessionTable.token, sessionToken),
      gt(sessionTable.expiresAt, now)
    ),
  });

  if (!activeSession?.userId) {
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

  const admin = await db.query.adminUser.findFirst({
    columns: {
      role: true,
    },
    where: and(
      eq(adminUser.userId, activeSession.userId),
      eq(adminUser.isActive, true)
    ),
  });

  return NextResponse.json(
    {
      isAuthenticated: true,
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