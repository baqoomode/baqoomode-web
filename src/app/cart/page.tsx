import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";

export const metadata: Metadata = {
  title: "장바구니 | baQoo MODE",
  description: "라이프 모드를 둘러보고, 장바구니에 담기 전 구매 흐름과 소비자용 안내를 빠르게 확인하세요.",
};

const featuredModes = [
  {
    label: "펫 모드",
    title: "Pet Mode",
    slogan: "영원히 빛나는 나의 가족",
    description: "반려동물의 사진, 영상, 목소리를 오래도록 간직하고 싶은 사람에게 어울리는 모드",
    href: "/modes/pet",
    price: "189,000원부터",
    badge: "Pet Lovers",
  },
  {
    label: "팬덤 모드",
    title: "Fandom Mode",
    slogan: "내 방 안의 작은 콘서트",
    description: "최애의 순간과 메시지를 나만의 빛나는 오브제로 소장하고 싶은 팬을 위한 모드",
    href: "/modes/fandom",
    price: "128,000원부터",
    badge: "Fan Favorite",
  },
  {
    label: "메모리 모드",
    title: "Memory Mode",
    slogan: "가장 찬란한 순간을 켜다",
    description: "웨딩, 가족사진, 기념일 같은 특별한 추억을 감성적인 선물로 남기고 싶은 사람에게 추천",
    href: "/modes/memory",
    price: "210,000원부터",
    badge: "Gift Pick",
  },
];

const shoppingScenes = [
  {
    title: "반려와의 순간을 오래 보고 싶을 때",
    description: "사진 한 장에 끝나는 추억이 아니라, 매일 켜보고 싶은 따뜻한 기억을 만들고 싶다면 펫 모드가 잘 맞습니다.",
    href: "/modes/pet",
    cta: "펫 모드 보기",
    icon: Heart,
  },
  {
    title: "최애를 내 공간 분위기로 완성하고 싶을 때",
    description: "포토카드와 포스터를 넘어서, 방 안의 무드 자체를 최애의 순간으로 채우고 싶다면 팬덤 모드가 어울립니다.",
    href: "/modes/fandom",
    cta: "팬덤 모드 보기",
    icon: Star,
  },
  {
    title: "기념일 선물을 더 특별하게 준비하고 싶을 때",
    description: "웨딩, 가족사진, 부모님 선물처럼 오래 남는 감동을 주고 싶다면 메모리 모드를 먼저 살펴보세요.",
    href: "/modes/memory",
    cta: "메모리 모드 보기",
    icon: Gift,
  },
];

const orderSteps = [
  {
    title: "취향에 맞는 모드 선택",
    description: "Pet, Fandom, Memory 중 내 취향과 선물 목적에 맞는 라이프 모드를 먼저 골라보세요.",
    icon: Sparkles,
  },
  {
    title: "사진과 스토리 준비",
    description: "담고 싶은 사진, 영상, 메시지, QR 콘텐츠 아이디어를 정리하면 주문 전 선택이 훨씬 쉬워집니다.",
    icon: CheckCircle2,
  },
  {
    title: "주문 후 제작·배송 확인",
    description: "주문이 완료되면 제작과 검수를 거쳐 출고되며, 배송 및 사용 가이드는 고객지원에서 바로 확인할 수 있습니다.",
    icon: Truck,
  },
];

export default function CartPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,rgba(0,223,182,0.18),transparent_34%),linear-gradient(180deg,#070707_0%,#050505_100%)] pt-28 pb-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <FadeUpInView className="space-y-6">
              <div className="inline-flex rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#00dfb6]">
                For You
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  장바구니는 비어 있어도, <span className="text-[#00dfb6]">당신의 취향은 여기서 채울 수 있습니다.</span>
                </h1>
                <p className="max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                  baQoo MODE의 장바구니는 일반 소비자가 나만의 추억과 감성을 담은 라이프 모드를 고르는 공간이어야 합니다. 아직 담아둔 모드는 없지만, 아래 추천과 구매
                  흐름을 보면 어떤 선택이 나에게 맞는지 바로 감이 올 거예요.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-full bg-[#00dfb6] px-6 text-black hover:bg-[#00dfb6]/90">
                  <Link href="/modes">라이프 모드 둘러보기</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/reviews">리얼스토리 보기</Link>
                </Button>
              </div>
            </FadeUpInView>

            <FadeUpInView delay={0.08}>
              <Card className="rounded-[32px] border-white/10 bg-white/[0.04] text-white backdrop-blur-xl">
                <CardHeader className="space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00dfb6]/20 bg-[#00dfb6]/10 text-[#00dfb6]">
                    <ShoppingBag className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-black tracking-tight">현재 장바구니 상태</CardTitle>
                    <CardDescription className="text-sm leading-6 text-zinc-400">
                      아직 담아둔 모드는 없지만, 아래 추천 모드와 구매 가이드를 통해 바로 다음 단계로 이동할 수 있습니다.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-3xl border border-white/8 bg-[#0c1015] p-5">
                    <div className="flex items-center justify-between border-b border-white/8 pb-4">
                      <span className="text-sm text-zinc-400">담긴 모드</span>
                      <span className="text-2xl font-black">0</span>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-zinc-400">예상 결제 금액</span>
                      <span className="text-lg font-semibold text-white">0원</span>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-3xl border border-white/8 bg-white/[0.03] p-5 text-sm text-zinc-300">
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#00dfb6]" />
                      <span className="font-semibold">이 페이지에서 바로 할 수 있는 것</span>
                    </div>
                    <ul className="space-y-2 leading-6">
                      <li>내 취향에 맞는 라이프 모드 빠르게 비교하기</li>
                      <li>가격대와 구매 흐름 미리 확인하기</li>
                      <li>FAQ 또는 1:1 문의로 구매 전 궁금한 점 해결하기</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeUpInView>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">Recommended Modes</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">장바구니에 담기 전 먼저 많이 보는 라이프 모드</h2>
            </div>
            <Button asChild variant="ghost" className="h-auto w-fit px-0 text-[#00dfb6] hover:bg-transparent hover:text-[#00dfb6]">
              <Link href="/modes">
                전체 모드 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeUpInView>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredModes.map((mode, index) => (
              <FadeUpInView key={mode.href} delay={index * 0.08} className="h-full">
                <Card className="h-full rounded-[28px] border-white/10 bg-white/[0.03] text-white transition-transform duration-300 hover:-translate-y-1 hover:border-[#00dfb6]/30">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                      {mode.badge}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{mode.label}</p>
                      <CardTitle className="text-xl font-bold">{mode.title}</CardTitle>
                      <p className="text-sm font-semibold text-[#00dfb6]">{mode.slogan}</p>
                      <CardDescription className="text-sm leading-6 text-zinc-400">{mode.description}</CardDescription>
                      <p className="text-sm font-medium text-zinc-300">{mode.price}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                      <Link href={mode.href}>상세 보기</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeUpInView>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView>
            <Card className="rounded-[32px] border-white/10 bg-[#0c1015] text-white">
              <CardHeader className="space-y-3">
                <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  Shopping Ideas
                </div>
                <CardTitle className="text-2xl font-black tracking-tight">이럴 때 어떤 모드를 보면 좋은지 먼저 감 잡아보세요</CardTitle>
                <CardDescription className="text-sm leading-6 text-zinc-400">
                  장바구니는 결국 취향의 선택입니다. 내가 어떤 순간을 담고 싶은지부터 정하면 모드 선택이 훨씬 쉬워집니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                {shoppingScenes.map((scene, index) => {
                  const Icon = scene.icon;

                  return (
                    <FadeUpInView key={scene.href} delay={index * 0.08}>
                      <Link
                        href={scene.href}
                        className="group block rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-[#00dfb6]/30 hover:bg-white/[0.05]"
                      >
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-[#00dfb6]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-white">{scene.title}</h3>
                          <p className="text-sm leading-6 text-zinc-400">{scene.description}</p>
                        </div>
                        <div className="mt-5 flex items-center text-sm font-semibold text-[#00dfb6]">
                          {scene.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </FadeUpInView>
                  );
                })}
              </CardContent>
            </Card>
          </FadeUpInView>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeUpInView className="mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00dfb6]">Before You Order</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">주문 전에 이것만 정리하면 선택이 훨씬 쉬워집니다</h2>
            </div>
          </FadeUpInView>

          <div className="grid gap-6 lg:grid-cols-3">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeUpInView key={step.title} delay={index * 0.08} className="h-full">
                  <Card className="h-full rounded-[28px] border-white/10 bg-white/[0.03] text-white">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#00dfb6]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-500">STEP {index + 1}</span>
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                        <CardDescription className="text-sm leading-6 text-zinc-400">{step.description}</CardDescription>
                      </div>
                    </CardHeader>
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
            <Card className="rounded-[32px] border-white/10 bg-[linear-gradient(135deg,rgba(0,223,182,0.16),rgba(255,255,255,0.04))] text-white">
              <CardContent className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
                <div className="max-w-2xl space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#00dfb6]">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">어떤 모드를 골라야 할지 고민되시나요?</h2>
                  <p className="text-sm leading-6 text-zinc-200/85 sm:text-base">
                    아직 장바구니에 담기 전이라면 실제 후기를 먼저 보는 것도 좋은 방법입니다. 비슷한 취향의 사람들이 어떤 모드를 골랐는지 보고 나면 선택이 훨씬 쉬워집니다.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-[#00dfb6] px-6 text-black hover:bg-[#00dfb6]/90">
                    <Link href="/reviews">리얼스토리 보기</Link>
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
