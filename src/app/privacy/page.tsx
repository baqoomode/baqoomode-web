import type { Metadata } from "next";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "개인정보처리방침 | baQoo MODE",
  description: "baQoo MODE 서비스 이용 과정에서 수집하는 개인정보와 이용 목적, 보관 및 권리 안내를 확인하세요.",
};

const sections = [
  {
    title: "1. 총칙",
    contents: [
      "효성디지털애드(이하 '회사')는 baQoo MODE 서비스 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하기 위해 본 개인정보처리방침을 마련합니다.",
      "회사는 개인정보를 서비스 제공, 고객 응대, 주문 처리, 콘텐츠 제작, 서비스 개선 범위에서만 이용하며, 목적이 변경될 경우 관련 법령에 따라 별도 안내합니다.",
    ],
  },
  {
    title: "2. 수집하는 개인정보 항목",
    contents: [
      "회원가입 및 로그인 시: 이름, 이메일, 인증/로그인 제공 정보, 접속 기록 등 서비스 이용에 필요한 정보",
      "주문 및 문의 시: 주문자 정보, 연락처, 이메일, 배송 정보, 문의 내용, 제작 요청 정보, 첨부 자료 등",
      "서비스 이용 과정에서: 접속 로그, 기기 및 브라우저 정보, 쿠키, 이용 기록 등 안정적인 서비스 운영을 위한 정보",
    ],
  },
  {
    title: "3. 개인정보 이용 목적",
    contents: [
      "상품 및 서비스 제공, 주문 확인, 제작 진행, 배송 및 A/S 안내",
      "고객 문의 응대, 공지 전달, 서비스 품질 향상 및 운영 분석",
      "법령 및 이용약관 위반 방지, 분쟁 대응, 보안 유지",
    ],
  },
  {
    title: "4. 보유 및 이용 기간",
    contents: [
      "회사는 개인정보 수집 및 이용 목적이 달성되면 지체 없이 해당 정보를 파기합니다.",
      "다만 관련 법령에 따라 보관이 필요한 경우에는 해당 기간 동안 별도로 분리 보관할 수 있습니다.",
      "전자상거래, 소비자 분쟁 대응, 세무·회계 관련 법령에 따른 보관 의무가 있는 정보는 관련 법령이 정한 기간 동안 보관합니다.",
    ],
  },
  {
    title: "5. 개인정보의 제3자 제공 및 처리 위탁",
    contents: [
      "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 특별한 규정이 있는 경우는 예외로 합니다.",
      "서비스 운영을 위해 호스팅, 인증, 알림, 저장 등 일부 업무를 외부 전문 업체에 위탁할 수 있으며, 위탁 범위가 추가되거나 변경되는 경우 본 방침 또는 별도 고지를 통해 안내합니다.",
    ],
  },
  {
    title: "6. 이용자의 권리와 행사 방법",
    contents: [
      "이용자는 언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지 요청을 할 수 있습니다.",
      "관련 요청은 고객센터 또는 개인정보보호책임자에게 접수할 수 있으며, 회사는 지체 없이 필요한 조치를 안내합니다.",
    ],
  },
  {
    title: "7. 개인정보 파기 절차 및 방법",
    contents: [
      "개인정보는 이용 목적 달성 후 내부 방침 및 관련 법령에 따라 일정 기간 저장된 뒤 파기됩니다.",
      "전자적 파일 형태 정보는 복구가 어렵도록 삭제하며, 종이 문서는 분쇄 또는 소각 등의 방법으로 파기합니다.",
    ],
  },
  {
    title: "8. 쿠키 및 로그 정보",
    contents: [
      "회사는 로그인 유지, 이용 통계 확인, 서비스 품질 개선을 위해 쿠키와 유사 기술을 사용할 수 있습니다.",
      "이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 일부 기능 사용에 제한이 발생할 수 있습니다.",
    ],
  },
  {
    title: "9. 개인정보 보호책임자 및 문의처",
    contents: [
      "상호명: 효성디지털애드",
      "개인정보보호책임자: 황혜주",
      "고객센터: 1588-0000 (평일 10:00 - 17:00 / 점심 12:00 - 13:00)",
      "주소: 경기도 고양시 일산동구 중앙로 1079, 3층 340호 (백석동, 백석역 더리브 스타일)",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.12),transparent_30%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-14">
        <div className="container mx-auto max-w-5xl px-4">
          <FadeUpInView className="max-w-3xl space-y-5">
            <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">
              Privacy Policy
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">개인정보처리방침</h1>
            <p className="text-lg leading-8 text-zinc-300 md:text-xl">
              baQoo MODE 서비스 제공을 위해 수집하는 개인정보의 항목, 이용 목적, 보관 기간, 이용자의 권리를 안내합니다.
            </p>
          </FadeUpInView>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto flex max-w-5xl flex-col gap-6 px-4">
          <FadeUpInView>
            <Card className="rounded-[28px] border-white/10 bg-[#0d1117] text-white">
              <CardHeader>
                <CardTitle className="text-xl font-black tracking-tight">시행일 및 안내</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  본 방침은 2026년 3월 10일부터 적용되며, 관련 법령 또는 서비스 운영 정책 변경 시 업데이트될 수 있습니다.
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
