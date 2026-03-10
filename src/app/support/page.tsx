import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Headphones, LifeBuoy, MessageSquareMore, ShieldCheck } from "lucide-react";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "고객지원 | baQoo MODE",
  description: "자주 묻는 질문, 공지사항, A/S 안내, 1:1 문의를 한 곳에서 확인하세요.",
};

const supportMenus = [
  {
    title: "자주 묻는 질문",
    description: "주문, 제작, 배송, QR 콘텐츠, 제품 사용과 관련해 가장 많이 묻는 내용을 빠르게 확인할 수 있습니다.",
    href: "/support/faq",
    icon: Headphones,
  },
  {
    title: "공지사항",
    description: "운영 일정, 제작/배송 안내, 시스템 점검, 서비스 정책 변경 사항을 모아 둔 페이지입니다.",
    href: "/support/notice",
    icon: FileText,
  },
  {
    title: "A/S 안내",
    description: "증상 확인부터 접수 준비, 처리 순서, 유상/무상 판단 안내까지 단계별로 확인할 수 있습니다.",
    href: "/support/after-service",
    icon: ShieldCheck,
  },
  {
    title: "1:1 문의",
    description: "일반 상담, 주문/결제, 제작 요청, 배송, A/S 관련 문의를 온라인으로 접수할 수 있습니다.",
    href: "/support/contact",
    icon: MessageSquareMore,
  },
];

const quickPolicies = [
  "고객센터 운영 시간: 평일 10:00 - 17:00 / 점심 12:00 - 13:00",
  "문의는 영업일 기준 순차적으로 답변되며, 접수량에 따라 다소 지연될 수 있습니다.",
  "제작/출고/배송 관련 문의는 주문자명, 연락처, 주문번호를 함께 남겨주시면 확인이 빨라집니다.",
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.18),transparent_34%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-16">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView className="max-w-3xl space-y-6">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.24em] text-[#00dfb6] uppercase">
              Customer Support
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">도움이 필요할 때 가장 먼저 찾는 지원 허브</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              baQoo MODE의 주문, 제작, 배송, QR 콘텐츠, 제품 사용, A/S 관련 안내를 한 곳에 정리했습니다. 빠른 확인이 필요한 내용은 FAQ와 공지사항을,
              개별 상담이 필요한 경우에는 1:1 문의를 이용해 주세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#00dfb6] px-6 text-black hover:bg-[#00dfb6]/90">
                <Link href="/support/contact">1:1 문의 접수하기</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                <Link href="/support/faq">자주 묻는 질문 보기</Link>
              </Button>
            </div>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {supportMenus.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUpInView key={item.href} delay={index * 0.08} className="h-full">
                  <Card className="rounded-[28px] border-white/10 bg-white/[0.03] text-white backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-[#00dfb6]/30">
                    <CardHeader className="space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                        <CardDescription className="text-sm leading-6 text-zinc-400">{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="ghost" className="h-auto px-0 text-sm font-semibold text-[#00dfb6] hover:bg-transparent hover:text-[#00dfb6]">
                        <Link href={item.href}>
                          페이지 바로가기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeUpInView>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView>
            <Card className="rounded-[32px] border-white/10 bg-[#0c1015] text-white">
              <CardHeader className="space-y-3">
                <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  Support Policy Snapshot
                </div>
                <CardTitle className="text-xl font-black tracking-tight">상담 전에 알아두면 좋은 안내</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  빠른 응대를 위해 기본 운영 정책과 접수 시 필요한 정보를 먼저 확인해 주세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {quickPolicies.map((policy, index) => (
                  <FadeUpInView key={policy} delay={index * 0.08}>
                    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 text-sm leading-6 text-zinc-300">
                      <div className="mb-3 flex items-center gap-3 text-white">
                        <LifeBuoy className="h-4 w-4 text-[#00dfb6]" />
                        <span className="font-semibold">운영 안내</span>
                      </div>
                      {policy}
                    </div>
                  </FadeUpInView>
                ))}
              </CardContent>
            </Card>
          </FadeUpInView>
        </div>
      </section>
    </main>
  );
}
