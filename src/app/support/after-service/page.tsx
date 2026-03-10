import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Wrench, XCircle } from "lucide-react";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "A/S 안내 | baQoo MODE",
  description: "A/S 접수 전 확인사항, 접수 절차, 유상/무상 판단 기준의 기본 안내를 확인하세요.",
};

const processSteps = [
  "증상 확인: 전원, 조명, 프레임 외관, 인쇄 상태, QR 인식 상태를 먼저 확인합니다.",
  "자료 준비: 주문자명, 연락처, 주문 시기, 증상 사진 또는 영상을 준비합니다.",
  "문의 접수: 1:1 문의 페이지에서 증상과 확인한 내용을 상세히 남겨 주세요.",
  "검토 및 안내: 영업일 기준 순차 검토 후 유상/무상 여부와 다음 절차를 안내드립니다.",
];

const supportableItems = [
  "초기 수령 직후 확인된 외관 이상 또는 기능 이상",
  "전원, 조명, 인쇄 품질, QR 작동과 관련된 확인 요청",
  "구성품 누락, 제작 상태 점검, 사용 중 확인이 필요한 문제",
];

const excludedItems = [
  "고객 과실, 외부 충격, 임의 분해 또는 개조로 인한 손상",
  "사용 환경에 따른 소모, 오염, 관리 부주의로 발생한 문제",
  "단순 변심, 주문 착오 등 A/S가 아닌 교환/반품 성격의 요청",
];

export default function AfterServicePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.14),transparent_30%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-6xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              After Service Guide
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">A/S 안내</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              제품 이상 또는 사용 중 불편 사항이 있을 때 빠르게 확인하고 접수할 수 있도록 기본 절차를 정리했습니다. 실제 유상/무상 여부는 접수 내용과 상태 확인 후 안내됩니다.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUpInView>
            <Card className="rounded-[28px] border-white/10 bg-white/[0.03] text-white">
              <CardHeader>
                <CardTitle className="text-xl font-black tracking-tight">접수 절차</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  아래 순서대로 확인해 주시면 보다 정확하고 빠르게 안내받을 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {processSteps.map((step, index) => (
                  <FadeUpInView key={step} delay={index * 0.08}>
                    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                      <div className="mb-3 flex items-center gap-3 text-white">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00dfb6] text-sm font-bold text-black">{index + 1}</div>
                        <span className="font-semibold">STEP {index + 1}</span>
                      </div>
                      <p className="text-sm leading-6 text-zinc-300">{step}</p>
                    </div>
                  </FadeUpInView>
                ))}
              </CardContent>
            </Card>
          </FadeUpInView>

          <div className="space-y-6">
            <FadeUpInView delay={0.06}>
              <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">확인 가능한 항목</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-zinc-300">
                  {supportableItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">{item}</div>
                  ))}
                </CardContent>
              </Card>
            </FadeUpInView>

            <FadeUpInView delay={0.12}>
              <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-red-300">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">접수 전 참고 사항</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-zinc-300">
                  {excludedItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">{item}</div>
                  ))}
                </CardContent>
              </Card>
            </FadeUpInView>

            <FadeUpInView delay={0.18}>
              <Card className="rounded-[28px] border-white/10 bg-[#10161d] text-white">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight">빠른 접수를 위한 팁</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-6 text-zinc-300">
                  <p>제품 상태가 보이는 사진, 작동 영상을 함께 전달해 주세요.</p>
                  <p>문제 발생 시점과 최근 사용 환경 변화를 같이 적어 주시면 원인 확인이 수월합니다.</p>
                  <p>답변은 영업일 기준 순차 처리되며, 필요 시 추가 자료를 요청드릴 수 있습니다.</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild className="rounded-full bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
                      <Link href="/support/contact">A/S 문의 접수하기</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                      <Link href="/support/faq">FAQ 함께 보기</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeUpInView>
          </div>
        </div>
      </section>
    </main>
  );
}