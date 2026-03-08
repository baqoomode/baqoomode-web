import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // PostgreSQL dialect for Neon
        schema: {
            ...schema
        }
    }),
    socialProviders: {
        kakao: {
            clientId: process.env.KAKAO_CLIENT_ID || "dummy",
            clientSecret: process.env.KAKAO_CLIENT_SECRET || "dummy",
        },
        naver: {
            clientId: process.env.NAVER_CLIENT_ID || "dummy",
            clientSecret: process.env.NAVER_CLIENT_SECRET || "dummy",
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "dummy",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy",
        },
    },
    // We strictly disable email/password auth as requested by the user
    emailAndPassword: {
        enabled: false,
    }
});
