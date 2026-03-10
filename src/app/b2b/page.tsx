import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Lightbulb,
  MessageSquareText,
  PhoneCall,
  Store,
  Users,
} from "lucide-react";
import { PartnershipInquiryForm } from "./partnership-inquiry-form";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "제휴 문의 | 바꿔모드 baQoo MODE",
  description: "대량 구매, 맞춤 제작, 공간 브랜딩, 팝업 및 전시 협업을 위한 바꿔모드 제휴 문의 페이지입니다.",
};

const valueProps = [
  {
    title: "공간에 맞는 발광 솔루션 제안",
    description: "매장, 쇼룸, 오피스, 팝업 환경에 맞춰 크기와 연출 방향을 함께 설계합니다.",
    icon: Lightbulb,
  },
  {
    title: "브랜드 경험을 강화하는 연출",
    description: "단순한 사인물이 아니라 고객이 기억하는 분위기와 메시지를 만드는 데 집중합니다.",
    icon: Building2,
  },
  {
    title: "상담부터 실행까지 빠른 연결",
    description: "문의 정리, 적용 범위 확인, 일정 협의까지 한 흐름으로 이어지는 B2B 커뮤니케이션을 지향합니다.",
    icon: MessageSquareText,
  },
];

const partnerTypes = [
  {
    title: "리테일 / 프랜차이즈",
    description: "매장 톤앤매너를 통일하면서도 시즌별 프로모션 연출이 필요한 브랜드",
    icon: Store,
  },
  {
    title: "오피스 / 쇼룸 / 브랜드 공간",
    description: "브랜드 소개, 인증, 웰컴월, 라운지 연출로 공간 경험을 끌어올리고 싶은 팀",
    icon: Building2,
  },
  {
    title: "팝업 / 전시 / 협업 프로젝트",
    description: "짧은 기간 안에 강한 시각 임팩트와 사진이 잘 나오는 포인트가 필요한 프로젝트",
    icon: Users,
  },
];

const processSteps = [
  {
    step: "01",
    title: "문의 접수",
    description: "적용 공간, 목표, 수량, 일정 등 핵심 정보를 받아 빠르게 방향을 파악합니다.",
  },
  {
    step: "02",
    title: "적합 제품/방식 제안",
    description: "보드 타입, 설치 방식, 연출 무드, 맞춤 제작 범위를 정리해 제안드립니다.",
  },
  {
    step: "03",
    title: "일정 및 범위 협의",
    description: "현장 적용 범위, 납기, 예산, 커뮤니케이션 방식을 구체화합니다.",
  },
  {
    step: "04",
    title: "실행 연결",
    description: "프로젝트 성격에 맞춰 제작/운영 플로우로 자연스럽게 이어질 수 있도록 연결합니다.",
  },
];

const checklist = [
  "대량 구매 및 맞춤 제작 문의 가능",
  "브랜드/공간 톤앤매너에 맞춘 제안",
  "설치 환경과 일정 기준을 고려한 상담",
];

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,223,182,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeUpInView className="space-y-8">
              <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-2 text-sm font-semibold text-[#00dfb6]">
                For Business Partnership
              </div>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">
                  제휴 문의도
                  <br className="hidden md:block" />
                  <span className="text-[#00dfb6]">브랜드답게, 공간답게</span>
                  <br className="hidden md:block" />
                  잘 만들겠습니다.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                  바꿔모드는 빛을 이용해 공간의 첫인상과 브랜드 메시지를 다시 설계합니다. 대량 구매, 쇼룸/오피스 연출,
                  팝업 협업, 맞춤형 발광 보드 프로젝트까지 한 페이지에서 바로 문의해 보세요.
                </p>
              </div>

              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 md:text-base">
                    <span className="mt-0.5 rounded-full bg-[#00dfb6]/15 p-1 text-[#00dfb6]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-[#00dfb6] text-black hover:bg-[#00dfb6]/90">
                  <Link href="#partnership-form">
                    문의 남기기
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href="/products">제품 라인업 보기</Link>
                </Button>
              </div>
            </FadeUpInView>

            <FadeUpInView delay={0.1}>
              <Card className="rounded-[32px] border-white/10 bg-white/[0.04] text-white backdrop-blur-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/5 pb-6">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Partnership Fit</p>
                      <h2 className="mt-3 text-xl font-black tracking-tight">이런 문의에 특히 잘 맞습니다</h2>
                    </div>
                    <div className="rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-3 py-1 text-xs font-semibold text-[#00dfb6]">
                      B2B Ready
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {valueProps.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                          <div className="mb-4 inline-flex rounded-2xl bg-[#00dfb6]/10 p-3 text-[#00dfb6]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </FadeUpInView>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <FadeUpInView className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00dfb6]">Partnership Scope</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">제휴 목적이 분명할수록 제안도 선명해집니다</h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
              신규 공간 런칭부터 브랜드 리뉴얼, 인증/브랜딩 월, 시즌 프로모션, 팝업 협업까지 활용 장면에 맞게 접근합니다.
            </p>
          </FadeUpInView>

          <div className="grid gap-6 md:grid-cols-3">
            {partnerTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeUpInView key={item.title} delay={index * 0.08} className="h-full">
                  <Card className="rounded-[28px] border-white/10 bg-[#101217] text-white">
                    <CardContent className="p-7">
                      <div className="mb-5 inline-flex rounded-2xl bg-white/5 p-3 text-[#00dfb6]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeUpInView>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <FadeUpInView className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00dfb6]">How We Work</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">문의 후 진행 흐름도 직관적으로</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              빠른 견적을 원하시면 적용 공간, 희망 수량, 타깃 일정, 원하는 무드만 남겨 주셔도 1차 정리가 훨씬 빨라집니다.
            </p>
          </FadeUpInView>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item, index) => (
              <FadeUpInView key={item.step} delay={index * 0.08} className="h-full">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-sm font-bold tracking-[0.3em] text-[#00dfb6]">{item.step}</p>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </FadeUpInView>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership-form" className="scroll-mt-24 py-16 md:py-24">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-6">
            <FadeUpInView>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00dfb6]">Get In Touch</p>
                <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">프로젝트 정보를 남겨주시면 빠르게 이어받겠습니다</h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                  구체적인 제안이 아니어도 괜찮습니다. 아직 방향을 잡는 단계라면 적용 공간과 목표만 남겨 주셔도 상담 흐름을 함께 정리해 드립니다.
                </p>
              </div>
            </FadeUpInView>

            <div className="grid gap-4">
              <FadeUpInView delay={0.06}>
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#00dfb6]">
                    <Clock3 className="h-5 w-5" />
                    <h3 className="text-base font-bold text-white">문의 전에 있으면 좋은 정보</h3>
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-zinc-400">
                    <li>• 설치할 공간 유형과 목적</li>
                    <li>• 필요한 수량 또는 적용 범위</li>
                    <li>• 희망 일정과 예산 감도</li>
                    <li>• 브랜드 무드 또는 참고 이미지 유무</li>
                  </ul>
                </div>
              </FadeUpInView>

              <FadeUpInView delay={0.12}>
                <div className="rounded-[28px] border border-white/10 bg-[#00dfb6]/8 p-6">
                  <div className="mb-4 flex items-center gap-3 text-[#00dfb6]">
                    <PhoneCall className="h-5 w-5" />
                    <h3 className="text-base font-bold text-white">빠른 연결이 필요하다면</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    대표 고객센터 <a href="tel:15880000" className="font-semibold text-white underline underline-offset-4">1588-0000</a> 로도 연결할 수 있습니다.
                    문의 폼에 일정 우선순위를 함께 남겨주시면 후속 상담이 더 빨라집니다.
                  </p>
                </div>
              </FadeUpInView>
            </div>
          </div>

          <FadeUpInView delay={0.12}>
            <PartnershipInquiryForm />
          </FadeUpInView>
        </div>
      </section>
    </div>
  );
}
