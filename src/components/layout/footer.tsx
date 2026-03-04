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
                            <p className="font-medium text-white mb-2">CS CENTER</p>
                            <p className="text-2xl font-bold text-white mb-2 hover:text-[#00dfb6] transition-colors cursor-pointer">1588-0000</p>
                            <p>AM 10:00 - PM 17:00</p>
                            <p>Lunch PM 12:00 - PM 13:00</p>
                            <p>Sat, Sun, Holiday OFF</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white font-medium mb-4">About</h3>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <li><Link href="/brand" className="hover:text-white transition-colors">브랜드 스토리</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">전체 라인업</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">리뷰 & 리얼스토리</Link></li>
                            <li><Link href="/b2b" className="hover:text-white transition-colors">B2B 제휴 및 대량구매</Link></li>
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

                    {/* Socials & Additional Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-white font-medium mb-4">Follow Us</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#00dfb6] hover:text-black transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#ff0000] hover:text-white transition-all duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#fae100] hover:text-black transition-all duration-300">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-xs text-zinc-500 space-y-2">
                        <p>상호명: (주)바꿔모드 | 대표: 홍길동 | 사업자등록번호: 123-45-67890 <a href="#" className="underline hover:text-zinc-300">사업자정보확인</a></p>
                        <p>통신판매업신고: 2026-서울강남-0000 | 개인정보보호책임자: 홍길동</p>
                        <p>주소: 서울특별시 강남구 테헤란로 123 바꿔모드 타워 10층 (우: 06236)</p>
                        <p className="mt-4 pt-2">© 2026 baQoo MODE. All rights reserved.</p>
                    </div>

                    <div className="flex gap-4 text-xs text-zinc-400">
                        <Link href="/terms" className="hover:text-white font-medium">이용약관</Link>
                        <Link href="/privacy" className="hover:text-white font-bold text-zinc-300">개인정보처리방침</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
