import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SupportInquiryForm } from "./support-inquiry-form";

export const metadata: Metadata = {
  title: "1:1 문의 | baQoo MODE",
  description: "일반 상담, 주문/결제, 제작, 배송, A/S, 제휴 관련 1:1 문의를 접수하세요.",
};

const inquiryTips = [
  "주문 관련 문의는 주문자명, 주문번호, 수령자 정보를 함께 남겨 주세요.",
  "A/S 문의는 증상 사진 또는 영상을 첨부할 수 있도록 미리 준비해 주세요.",
  "제작 문의는 원하는 문구, 이미지, 영상 종류, 희망 일정을 함께 적어 주시면 좋습니다.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.16),transparent_34%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              1:1 Contact
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">상황에 맞는 문의를 바로 남겨 주세요</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              주문, 제작, 배송, 제품 사용, A/S, 제휴/협업 관련 문의를 온라인으로 접수할 수 있습니다. 필요한 정보를 함께 남겨주시면 더 빠르게 확인할 수 있습니다.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <FadeUpInView>
              <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
                <CardHeader className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">고객센터 안내</CardTitle>
                  <CardDescription className="text-sm leading-6 text-zinc-400">문의 전 기본 운영 정보를 먼저 확인해 주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6 text-zinc-300">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">대표 연락처</p>
                    <p className="mt-2 text-2xl font-bold text-white">1588-0000</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="mb-2 flex items-center gap-2 text-white">
                      <Clock3 className="h-4 w-4 text-[#00dfb6]" />
                      <span className="font-semibold">운영 시간</span>
                    </div>
                    <p>평일 10:00 - 17:00</p>
                    <p>점심 12:00 - 13:00</p>
                    <p>토, 일, 공휴일 휴무</p>
                  </div>
                </CardContent>
              </Card>
            </FadeUpInView>

            <FadeUpInView delay={0.08}>
              <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">빠른 답변을 위한 팁</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-zinc-300">
                  {inquiryTips.map((tip) => (
                    <div key={tip} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">{tip}</div>
                  ))}
                </CardContent>
              </Card>
            </FadeUpInView>

            <FadeUpInView delay={0.16}>
              <Card className="rounded-[28px] border-white/10 bg-[#10161d] text-white">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">관련 페이지 바로가기</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-full bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
                    <Link href="/support/faq">FAQ</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <Link href="/support/after-service">A/S 안내</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <Link href="/support/notice">공지사항</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeUpInView>
          </div>

          <FadeUpInView delay={0.12}>
            <SupportInquiryForm />
          </FadeUpInView>
        </div>
      </section>
    </main>
  );
}
