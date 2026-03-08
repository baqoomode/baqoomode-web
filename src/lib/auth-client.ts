import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // baseURL remains undefined to auto-detect origin for same-domain requests, 
    // or set via NEXT_PUBLIC_APP_URL if cross-domain is needed.
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const { signIn, signOut, useSession } = authClient;
