"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { getAdminRoleLabel } from "@/lib/admin-access";

type AdminStatusResponse = {
    role?: string | null;
};

export function AdminAccountPanel() {
    const { data: session } = useSession();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        if (!session?.user?.id) {
            setRole(null);
            return;
        }

        const controller = new AbortController();

        fetch("/api/admin/me", {
            signal: controller.signal,
            cache: "no-store",
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error("관리자 상태를 불러오지 못했습니다.");
                }

                return response.json() as Promise<AdminStatusResponse>;
            })
            .then((data) => {
                setRole(data.role ?? null);
            })
            .catch((error: unknown) => {
                if (controller.signal.aborted) {
                    return;
                }

                console.error(error);
                setRole(null);
            });

        return () => {
            controller.abort();
        };
    }, [session?.user?.id]);

    return (
        <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">현재 관리자</p>
            <p className="mt-3 text-sm font-semibold text-white">{session?.user?.name ?? "세션 확인 중"}</p>
            <p className="mt-1 text-xs text-zinc-400">{session?.user?.email ?? "로그인 정보를 불러오는 중입니다."}</p>
            <div className="mt-3 inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-3 py-1 text-xs font-medium text-[#8cf3de]">
                {role ? getAdminRoleLabel(role) : "권한 확인 중"}
            </div>
        </div>
    );
}