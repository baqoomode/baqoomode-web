"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BellDot,
  Boxes,
  ChartNoAxesCombined,
  ClipboardList,
  FileImage,
  FolderKanban,
  Home,
  MessageSquareText,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNavGroups = [
  {
    title: "핵심 운영",
    items: [
      { href: "/admin", label: "대시보드", icon: Home },
      { href: "/admin/inquiries", label: "문의 관리", icon: MessageSquareText },
      { href: "/admin/work-items", label: "작업건 관리", icon: FolderKanban },
      { href: "/admin/deliveries", label: "전달 관리", icon: Send },
      { href: "/admin/consents", label: "동의/권한 관리", icon: ShieldCheck },
    ],
  },
  {
    title: "운영 자산",
    items: [
      { href: "/admin/catalog", label: "상품/모드 관리", icon: Boxes },
      { href: "/admin/contents", label: "디지털 콘텐츠", icon: FileImage },
      { href: "/admin/customers", label: "회원/고객 관리", icon: Users },
      { href: "/admin/support", label: "고객지원 관리", icon: BellDot },
      { href: "/admin/reports", label: "분석 리포트", icon: ChartNoAxesCombined },
    ],
  },
];

function isActivePath(pathname: string, href: string) {
  return href === "/admin"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebarNav() {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      {adminNavGroups.map((group) => (
        <div key={group.title} className="space-y-3">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {group.title}
          </p>
          <nav className="space-y-1.5">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-3 py-3 text-sm font-medium transition-all",
                    active
                      ? "border-[#00dfb6]/30 bg-[#00dfb6]/12 text-white shadow-[0_0_0_1px_rgba(0,223,182,0.15)]"
                      : "border-white/5 bg-white/[0.03] text-zinc-400 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  <Icon className={cn("h-4 w-4", active ? "text-[#00dfb6]" : "text-zinc-500")} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      ))}
    </div>
  );
}

export function AdminMobileNav() {
  const pathname = usePathname();
  const primaryItems = adminNavGroups[0].items;

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
      {primaryItems.map((item) => {
        const Icon = item.icon;
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex min-w-fit items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium whitespace-nowrap transition-all",
              active
                ? "border-[#00dfb6]/40 bg-[#00dfb6]/12 text-white"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
            )}
          >
            <Icon className={cn("h-3.5 w-3.5", active ? "text-[#00dfb6]" : "text-zinc-500")} />
            <span>{item.label}</span>
          </Link>
        );
      })}
      <Link
        href="/admin/catalog"
        className="inline-flex min-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-400 whitespace-nowrap"
      >
        <ClipboardList className="h-3.5 w-3.5 text-zinc-500" />
        <span>기타 메뉴</span>
      </Link>
    </div>
  );
}