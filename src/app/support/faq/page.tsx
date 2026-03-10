import type { Metadata } from "next";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | baQoo MODE",
  description: "주문, 제작, 배송, QR 콘텐츠, 제품 사용에 대한 자주 묻는 질문을 확인하세요.",
};

const faqGroups = [
  {
    title: "주문 · 제작",
    items: [
      ["주문 후 제작은 얼마나 걸리나요?", "주문 정보와 필요한 자료가 모두 확인된 뒤 제작이 시작됩니다. 일반적으로 상담 및 자료 확정 후 순차 제작되며, 상세 일정은 공지사항 또는 개별 안내를 통해 확인하실 수 있습니다."],
      ["사진이나 영상은 어떻게 전달하나요?", "주문 후 안내되는 절차에 따라 파일을 전달해 주세요. 원본 해상도가 높을수록 결과물이 선명하며, 필요한 경우 담당자가 파일 상태를 먼저 확인해 안내드립니다."],
      ["맞춤 문구나 기획 요청도 가능한가요?", "가능합니다. 기념일 메시지, 공간용 문구, 브랜드 연출 등 목적에 따라 맞춤 제안을 드릴 수 있으며, 복잡한 요청은 1:1 문의 또는 제휴문의로 남겨주세요."],
    ],
  },
  {
    title: "배송 · 수령",
    items: [
      ["출고 후 배송 조회는 어디서 하나요?", "출고가 완료되면 안내된 택배 정보 또는 개별 연락을 통해 배송 진행 상태를 확인할 수 있습니다. 주문량이 많은 기간에는 실제 이동 반영까지 시간이 소요될 수 있습니다."],
      ["수령 후 바로 확인해야 할 것이 있나요?", "외관 파손, 전원/조명 상태, 인쇄 상태, QR 인식 여부를 먼저 확인해 주세요. 이상이 있다면 사진 또는 영상과 함께 빠르게 문의해 주시면 확인이 훨씬 수월합니다."],
      ["선물용이나 특정 날짜 수령도 가능한가요?", "희망 일정이 있다면 주문 또는 문의 시점에 미리 남겨 주세요. 일정은 제작 상황과 택배 사정에 따라 달라질 수 있으므로, 반드시 사전 상담을 권장합니다."],
    ],
  },
  {
    title: "QR · 사용 안내",
    items: [
      ["QR을 스캔하면 어떤 콘텐츠를 볼 수 있나요?", "상품 구성과 제작 목적에 따라 영상, 이미지, 음성, 링크형 콘텐츠가 연결될 수 있습니다. 구체적인 구성은 주문 내용과 상품 타입에 따라 달라집니다."],
      ["QR이 잘 인식되지 않을 때는 어떻게 하나요?", "카메라 렌즈 상태를 먼저 확인하고 충분한 밝기에서 다시 스캔해 주세요. 보호필름, 반사각도, 화면 밝기에 따라 인식률이 달라질 수 있으며 지속될 경우 1:1 문의로 접수해 주세요."],
      ["콘텐츠 수정이나 재연결이 가능한가요?", "제작 유형과 운영 정책에 따라 가능 여부가 달라질 수 있습니다. 수정이 필요한 경우 현재 상태와 요청 내용을 함께 보내 주시면 검토 후 안내드립니다."],
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.14),transparent_30%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              FAQ
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">자주 묻는 질문</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              고객이 가장 많이 문의하는 내용을 먼저 정리했습니다. 필요한 답변이 없다면 1:1 문의를 통해 현재 상황을 남겨 주세요.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex max-w-5xl flex-col gap-6 px-4">
          {faqGroups.map((group, groupIndex) => (
            <FadeUpInView key={group.title} delay={groupIndex * 0.08}>
              <Card className="rounded-[28px] border-white/10 bg-white/[0.03] text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-black tracking-tight">{group.title}</CardTitle>
                  <CardDescription className="text-sm text-zinc-400">카테고리별로 가장 많이 묻는 질문을 정리했습니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue={groupIndex === 0 ? `${group.title}-0` : undefined} className="w-full">
                    {group.items.map(([question, answer], index) => (
                      <AccordionItem key={question} value={`${group.title}-${index}`} className="border-white/10">
                        <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 text-sm leading-7 text-zinc-400">{answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </FadeUpInView>
          ))}

          <FadeUpInView delay={0.12} className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="rounded-full bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
              <Link href="/support/contact">답변이 없으면 문의 남기기</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
              <Link href="/support">지원 홈으로 이동</Link>
            </Button>
          </FadeUpInView>
        </div>
      </section>
    </main>
  );
}
