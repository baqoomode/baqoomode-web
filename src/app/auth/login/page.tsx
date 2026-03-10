import { Suspense } from "react";
import { LoginPageClient } from "@/components/auth/login-page-client";
import { LoginPageShell } from "@/components/auth/login-page-shell";

export default function LoginPage() {
    return (
        <Suspense fallback={<LoginPageShell redirectTo="/" />}>
            <LoginPageClient />
        </Suspense>
    );
}
