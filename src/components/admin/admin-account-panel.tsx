"use client";

import { useSession } from "@/lib/auth-client";
import { getAdminRoleLabel } from "@/lib/admin-access";

export function AdminAccountPanel() {
    const { data: session } = useSession();
    const roleLabel = session?.user?.id ? getAdminRoleLabel("operator") : "권한 확인 중";

    return (
        <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">현재 관리자</p>
            <p className="mt-3 text-sm font-semibold text-white">{session?.user?.name ?? "세션 확인 중"}</p>
            <p className="mt-1 text-xs text-zinc-400">{session?.user?.email ?? "로그인 정보를 불러오는 중입니다."}</p>
            <div className="mt-3 inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-3 py-1 text-xs font-medium text-[#8cf3de]">
                {roleLabel}
            </div>
        </div>
    );
}