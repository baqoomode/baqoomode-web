import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, Clock3 } from "lucide-react";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "공지사항 | baQoo MODE",
  description: "운영 일정, 제작 및 배송 관련 안내, 서비스 정책 변경 사항을 확인하세요.",
};

const notices = [
  {
    title: "고객센터 운영 시간 안내",
    date: "2026.03.10",
    tag: "운영안내",
    body: "고객센터는 평일 10:00 - 17:00 운영되며, 12:00 - 13:00는 점심시간입니다. 주말 및 공휴일 문의는 영업일 순서대로 확인됩니다.",
  },
  {
    title: "제작 요청 자료는 원본 파일 전달을 권장합니다",
    date: "2026.03.10",
    tag: "제작가이드",
    body: "사진, 영상, 음성 등 제작 자료는 압축되지 않은 원본 파일로 전달해 주시면 품질 저하를 줄일 수 있습니다. 메신저 자동 압축 파일은 재요청될 수 있습니다.",
  },
  {
    title: "배송 직후 외관 및 QR 인식 상태를 꼭 확인해 주세요",
    date: "2026.03.10",
    tag: "배송안내",
    body: "수령 후 바로 외관, 조명, 인쇄 상태, QR 인식 여부를 확인해 주세요. 이상이 있는 경우 사진 또는 영상을 함께 보내주시면 빠르게 도와드릴 수 있습니다.",
  },
  {
    title: "정책 및 지원 페이지가 새롭게 정리되었습니다",
    date: "2026.03.10",
    tag: "업데이트",
    body: "FAQ, A/S 안내, 개인정보처리방침, 이용약관 페이지를 새로 정리했습니다. 서비스 내용이 변경될 경우 관련 안내도 함께 업데이트됩니다.",
  },
];

const operationNotes = [
  "문의량이 많은 경우 답변은 영업일 기준 순차적으로 진행됩니다.",
  "제작 일정이 임박한 요청은 문의 내용에 희망 일정을 반드시 기재해 주세요.",
  "A/S 관련 문의는 증상 사진, 동영상, 주문 정보가 함께 있어야 확인이 빠릅니다.",
];

export default function NoticePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.12),transparent_30%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              Notice
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">공지사항</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              제작 및 배송 안내, 고객센터 운영 일정, 정책 변경 내용 등 확인이 필요한 주요 소식을 모아 둔 공간입니다.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {notices.map((notice, index) => (
              <FadeUpInView key={notice.title} delay={index * 0.08}>
                <Card className="rounded-[28px] border-white/10 bg-white/[0.03] text-white">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                      <span className="rounded-full border border-[#00dfb6]/25 bg-[#00dfb6]/10 px-3 py-1 text-[#00dfb6]">{notice.tag}</span>
                      <span className="text-zinc-500">{notice.date}</span>
                    </div>
                    <CardTitle className="text-xl font-black tracking-tight">{notice.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-zinc-400">{notice.body}</CardContent>
                </Card>
              </FadeUpInView>
            ))}
          </div>

          <FadeUpInView delay={0.12} className="h-fit lg:sticky lg:top-24">
            <Card className="h-fit rounded-[28px] border-white/10 bg-[#0d1117] text-white">
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                  <BellRing className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-black tracking-tight">현재 운영 안내</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  상담 및 제작 관련 문의 전에 아래 내용을 함께 확인해 주세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {operationNotes.map((note, index) => (
                  <FadeUpInView key={note} delay={index * 0.06}>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
                      <div className="mb-2 flex items-center gap-2 text-white">
                        <Clock3 className="h-4 w-4 text-[#00dfb6]" />
                        <span className="font-semibold">안내</span>
                      </div>
                      {note}
                    </div>
                  </FadeUpInView>
                ))}

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="rounded-full bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
                    <Link href="/support/contact">1:1 문의하기</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <Link href="/support/faq">FAQ 보기</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeUpInView>
        </div>
      </section>
    </main>
  );
}
