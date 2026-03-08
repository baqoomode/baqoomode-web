import Link from "next/link";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & CS Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-black text-white tracking-tighter mb-6">
                            baQoo<span className="font-light">MODE</span>
                        </h2>
                        <div className="text-zinc-400 space-y-2 text-sm">
                            <p className="font-medium text-white mb-2">고객센터</p>
                            <p className="text-2xl font-bold text-white mb-2 hover:text-[#00dfb6] transition-colors cursor-pointer">1588-0000</p>
                            <p>평일: 10:00 - 17:00</p>
                            <p>점심: 12:00 - 13:00</p>
                            <p>토, 일, 공휴일 휴무</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white font-medium mb-4">About</h3>
                        <ul className="space-y-2 text-zinc-400 text-sm">
                            <li><Link href="/brand" className="hover:text-white transition-colors">브랜드 스토리</Link></li>
                            <li><Link href="/modes" className="hover:text-white transition-colors">라이프 모드</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">제품 라인업</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">리얼스토리</Link></li>
                            <li><Link href="/b2b" className="hover:text-white transition-colors">제휴문의</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white font-medium mb-4">Help</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="/support/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link></li>
                            <li><Link href="/support/notice" className="hover:text-white transition-colors">공지사항</Link></li>
                            <li><Link href="/support/as" className="hover:text-white transition-colors">A/S 안내</Link></li>
                            <li><Link href="/support/contact" className="hover:text-white transition-colors">1:1 문의</Link></li>
                        </ul>
                    </div>

                    {/* Policy & Social Group */}
                    <div className="col-span-1 md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-white font-medium mb-4">Policy</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#00dfb6] hover:text-black transition-all duration-300">
                                    <Instagram className="w-4.5 h-4.5" />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#ff0000] hover:text-white transition-all duration-300">
                                    <Youtube className="w-4.5 h-4.5" />
                                </a>
                                <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#fae100] hover:text-black transition-all duration-300">
                                    <MessageCircle className="w-4.5 h-4.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8">
                    <div className="text-xs text-zinc-500 space-y-2">
                        <p>상호명: 효성디지털애드 | 대표: 황혜주 | 사업자등록번호: 582-22-02123 <a href="#" className="underline hover:text-zinc-300">사업자정보확인</a></p>
                        <p>통신판매업신고: 2026-경기고양-0000 | 개인정보보호책임자: 황혜주</p>
                        <p>주소: 경기도 고양시 일산동구 중앙로 1079, 3층 340호 (백석동, 백석역 더리브 스타일)</p>
                        <p className="mt-4 pt-2">© 2026 baQoo MODE. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
