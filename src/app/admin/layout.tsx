import type { ReactNode } from "react";
import Link from "next/link";
import { Bell, ExternalLink, Sparkles } from "lucide-react";
import { AdminMobileNav, AdminSidebarNav } from "@/components/admin/admin-nav";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { Button } from "@/components/ui/button";
import { getAdminRoleLabel, requireAdminAccess } from "@/lib/admin-auth";

export const runtime = "edge";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const { session, admin } = await requireAdminAccess();

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-white/5 bg-[#0d0f14] px-5 py-6 lg:flex lg:flex-col">
          <div className="mb-8 rounded-[28px] border border-[#00dfb6]/15 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.18),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">baQoo MODE</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">운영 대시보드</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              문의, 작업건, 전달, 게시 동의까지 하나의 운영 콘솔에서 관리합니다.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto pr-1">
            <AdminSidebarNav />
          </div>

          <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">현재 관리자</p>
            <p className="mt-3 text-sm font-semibold text-white">{session.user.name}</p>
            <p className="mt-1 text-xs text-zinc-400">{session.user.email}</p>
            <div className="mt-3 inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-3 py-1 text-xs font-medium text-[#8cf3de]">
              {getAdminRoleLabel(admin.role)}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-[#00dfb6]/10 p-2 text-[#00dfb6]">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">오늘의 운영 포인트</p>
                <p className="text-xs leading-5 text-zinc-400">
                  전달 실패 1건, 공개 동의 재확인 1건, 신규 B2B 문의 2건이 있습니다.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-white/5 bg-[#08090d]/88 px-4 py-4 backdrop-blur-xl md:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Admin Console</p>
                  <h1 className="mt-1 text-xl font-bold tracking-tight text-white md:text-2xl">
                    전달형 콘텐츠 운영에 맞춘 관리자 대시보드
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.05]">
                    <Bell className="h-4 w-4" />
                    운영 알림
                  </Button>
                  <SignOutButton
                    className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.05]"
                  />
                  <Button asChild className="bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
                    <Link href="/" target="_blank">
                      공개 사이트 보기
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <AdminMobileNav />
            </div>
          </header>

          <div className="flex-1 px-4 py-6 md:px-6 lg:px-8 lg:py-8">{children}</div>
        </div>
      </div>
    </div>
  );
}