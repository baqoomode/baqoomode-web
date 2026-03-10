import type { Metadata } from "next";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "이용약관 | baQoo MODE",
  description: "baQoo MODE 서비스 이용에 필요한 기본 약관과 이용자 권리 및 책임을 확인하세요.",
};

const sections = [
  {
    title: "1. 목적",
    contents: [
      "이 약관은 효성디지털애드(이하 '회사')가 운영하는 baQoo MODE 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
    ],
  },
  {
    title: "2. 서비스 내용",
    contents: [
      "회사는 상품 소개, 주문, 문의, 콘텐츠 제작 안내, 고객지원 등 baQoo MODE 운영에 필요한 온라인 서비스를 제공합니다.",
      "서비스의 구체적인 구성과 제공 방식은 운영 정책, 상품 구성, 기술 환경에 따라 변경될 수 있으며, 중요한 변경 사항은 공지사항 등을 통해 안내합니다.",
    ],
  },
  {
    title: "3. 회원 및 이용자 정보",
    contents: [
      "이용자는 정확한 정보로 서비스를 이용해야 하며, 타인의 정보를 도용하거나 허위 정보를 등록해서는 안 됩니다.",
      "계정 관리 소홀로 발생한 손해에 대한 책임은 원칙적으로 이용자에게 있습니다. 다만 회사의 고의 또는 중대한 과실이 있는 경우는 예외로 합니다.",
    ],
  },
  {
    title: "4. 주문, 제작 및 문의",
    contents: [
      "주문 또는 제작 요청 시 필요한 정보와 자료는 이용자가 정확하게 제공해야 하며, 자료 누락 또는 전달 지연 시 일정이 변경될 수 있습니다.",
      "1:1 문의, 제휴문의, A/S 접수 등은 접수 순서 및 운영 일정에 따라 순차 처리됩니다.",
      "맞춤 제작 또는 개별 협의가 필요한 요청은 별도 상담 결과에 따라 조건이 달라질 수 있습니다.",
    ],
  },
  {
    title: "5. 결제, 취소, 환불",
    contents: [
      "결제, 취소, 환불, 교환에 관한 세부 조건은 상품 성격과 제작 진행 단계에 따라 달라질 수 있습니다.",
      "단순 변심, 주문 정보 착오, 제작 자료 확정 이후의 변경 요청은 일반 상품과 다른 기준이 적용될 수 있으며, 자세한 내용은 고객센터 안내 또는 개별 상담을 따릅니다.",
    ],
  },
  {
    title: "6. 서비스 이용 제한",
    contents: [
      "이용자는 법령 위반, 타인 권리 침해, 서비스 운영 방해, 비정상적인 접근 또는 악성 행위를 해서는 안 됩니다.",
      "회사는 서비스 보안, 안정성, 타 이용자 보호를 위해 필요한 경우 일부 기능 사용을 제한하거나 계정 이용을 중지할 수 있습니다.",
    ],
  },
  {
    title: "7. 지식재산권",
    contents: [
      "서비스에 포함된 디자인, 문구, 이미지, 로고, 콘텐츠, 소프트웨어 및 운영 자료에 대한 권리는 회사 또는 정당한 권리자에게 있습니다.",
      "이용자는 회사의 사전 동의 없이 이를 복제, 배포, 수정, 상업적으로 사용할 수 없습니다.",
    ],
  },
  {
    title: "8. 책임의 제한",
    contents: [
      "회사는 천재지변, 통신 장애, 물류 지연, 제3자 서비스 장애 등 회사가 통제하기 어려운 사유로 인한 서비스 중단 또는 지연에 대해 책임을 제한받을 수 있습니다.",
      "회사는 이용자가 제공한 자료의 부정확성, 저작권 문제, 연락 불가 등 이용자 사유로 발생한 문제에 대해 책임지지 않습니다.",
    ],
  },
  {
    title: "9. 분쟁 해결 및 문의",
    contents: [
      "서비스 이용 중 문의 또는 분쟁이 발생한 경우 이용자는 고객센터 또는 1:1 문의를 통해 접수할 수 있습니다.",
      "회사는 관련 법령과 상관례에 따라 분쟁 해결을 위해 노력하며, 필요한 경우 관할 법원은 회사 본점 소재지를 기준으로 합니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.12),transparent_30%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              Terms of Service
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">이용약관</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              baQoo MODE 서비스 이용 시 기본적으로 적용되는 이용 기준과 회사 및 이용자의 권리와 책임을 안내합니다.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex max-w-5xl flex-col gap-6 px-4">
          <FadeUpInView>
            <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
              <CardHeader>
                <CardTitle className="text-xl font-black tracking-tight">적용일</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  본 약관은 2026년 3월 10일부터 적용됩니다. 서비스 운영 정책 또는 관련 법령 변경 시 내용이 업데이트될 수 있습니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </FadeUpInView>

          {sections.map((section, index) => (
            <FadeUpInView key={section.title} delay={index * 0.06}>
              <Card className="rounded-[28px] border-white/10 bg-white/[0.03] text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-black tracking-tight">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-7 text-zinc-300">
                  {section.contents.map((content) => (
                    <p key={content}>{content}</p>
                  ))}
                </CardContent>
              </Card>
            </FadeUpInView>
          ))}
        </div>
      </section>
    </main>
  );
}
