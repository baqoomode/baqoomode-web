"use client";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { useSession } from "@/lib/auth-client";

export function LoginSessionPanel() {
    const { data: session } = useSession();

    if (!session?.user) {
        return null;
    }

    return (
        <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <div>
                <p className="text-xs text-zinc-500">현재 로그인 계정</p>
                <p className="text-sm font-medium text-white">
                    {session.user.name} · {session.user.email}
                </p>
            </div>
            <SignOutButton
                label="계정 전환"
                className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.05]"
            />
        </div>
    );
}