import { motion } from "framer-motion";

export default function BrandPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-24">

                {/* Brand Header */}
                <section className="text-center max-w-4xl mx-auto mb-32">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        Brand Identity
                    </h1>
                    <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4">
                        어제와 다른 오늘, <br className="md:hidden" />
                        <span className="text-foreground">공간의 표정을 스위칭하다.</span>
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-12 mb-12"></div>
                </section>

                {/* Naming Story */}
                <section className="max-w-4xl mx-auto space-y-16 mb-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">baQoo <span className="text-primary font-black">MODE</span></h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                '바꿔모드'는 세상의 모든 빛을 끄고 켜듯, 우리의 일상과 감정 상태를 스위칭한다는 직관적인 네이밍입니다.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                영어로 'baQoo MODE'로 표기하여 프리미엄 테크 라이프스타일 브랜드의 이미지를 부여하며, Q의 디자인을 스위치(전원) 아이콘 형태로 시각화하여 정체성을 확립합니다.
                            </p>
                        </div>
                        <div className="aspect-square bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-12">
                            {/* Visual interpretation of baQoo logo */}
                            <div className="relative group cursor-pointer">
                                <div className="text-7xl font-black text-white mix-blend-difference z-10 relative">
                                    ba<span className="text-primary">Q</span>oo
                                </div>
                                {/* Glowing orbital effect for the Q */}
                                <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-colors duration-500"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand Philosophy Matrix */}
                <section className="max-w-5xl mx-auto mb-32">
                    <h3 className="text-3xl font-bold mb-12 text-center">우리의 가치 (Core Values)</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card/40 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-xl font-bold mb-4 text-primary">01. Premium</h4>
                            <p className="text-muted-foreground">단순한 액자를 넘어선 오브제. 박물관 수준의 조명 기술(DSE)을 일상 공간에 제안합니다.</p>
                        </div>
                        <div className="bg-card/40 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-xl font-bold mb-4 text-primary">02. Emotional</h4>
                            <p className="text-muted-foreground">추억, 팬심, 성공의 증명 등 개개인의 서사가 깃든 빛으로 당신의 감성을 울립니다.</p>
                        </div>
                        <div className="bg-card/40 p-8 rounded-2xl border border-white/5">
                            <h4 className="text-xl font-bold mb-4 text-primary">03. Tech-Driven</h4>
                            <p className="text-muted-foreground">QR코드와 AI 미디어 연동, 선 숨김(D-COA) 기술로 기존에 없던 마법 같은 사용자 경험을 제공합니다.</p>
                        </div>
                    </div>
                </section>

                {/* Closing Slogan */}
                <section className="text-center pb-24 border-b border-white/10">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                        지금, 당신의 모드로 바꿔보세요.
                    </h2>
                </section>

            </div>
        </div>
    );
}
