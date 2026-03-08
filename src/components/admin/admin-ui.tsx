import type { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tone = "mint" | "amber" | "rose" | "slate" | "violet";

const toneClasses: Record<Tone, string> = {
  mint: "border-[#00dfb6]/20 bg-[#00dfb6]/10 text-[#9ef5e5]",
  amber: "border-amber-500/20 bg-amber-500/10 text-amber-200",
  rose: "border-rose-500/20 bg-rose-500/10 text-rose-200",
  slate: "border-white/10 bg-white/[0.05] text-zinc-200",
  violet: "border-violet-500/20 bg-violet-500/10 text-violet-200",
};

export function StatusBadge({
  label,
  tone = "slate",
}: {
  label: string;
  tone?: Tone;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide",
        toneClasses[tone]
      )}
    >
      {label}
    </span>
  );
}

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00dfb6]">{eyebrow}</p>
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h1>
          <p className="max-w-3xl text-sm leading-6 text-zinc-400 md:text-base">{description}</p>
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  description,
  tone = "slate",
}: {
  label: string;
  value: string;
  description: string;
  tone?: Tone;
}) {
  return (
    <Card className="border-white/10 bg-white/[0.03] shadow-none backdrop-blur-xl">
      <CardHeader className="gap-3">
        <StatusBadge label={label} tone={tone} />
        <div>
          <CardTitle className="text-3xl font-black tracking-tight text-white">{value}</CardTitle>
          <CardDescription className="mt-2 text-sm leading-6 text-zinc-400">{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}

export function SectionCard({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("border-white/10 bg-white/[0.03] shadow-none backdrop-blur-xl", className)}>
      <CardHeader className="gap-2 border-b border-white/5">
        <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
        <CardDescription className="text-sm leading-6 text-zinc-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  );
}