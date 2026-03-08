"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ShoppingCart, Menu, X, ArrowRight } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

export function GNB() {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const NAV_ITEMS = [
        { label: "브랜드 스토리", href: "/brand" },
        { label: "라이프 모드", href: "/modes" },
        { label: "제품 라인업", href: "/products" },
        { label: "리얼스토리", href: "/reviews" },
        { label: "제휴문의", href: "/b2b" },
    ];

    return (
        <>
            <header className="fixed top-0 w-full z-[60] bg-background/80 backdrop-blur-md border-b border-border/40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Left: Logo */}
                    <div className="flex-1">
                        <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/baqoo_header-change.webp"
                                alt="baQoo MODE"
                                width={160}
                                height={40}
                                priority
                                className="h-8 md:h-9 w-auto object-contain brightness-110"
                            />
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="hidden md:flex flex-none justify-center gap-6 lg:gap-10">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex-1 flex justify-end items-center gap-4 md:gap-6 lg:gap-8">
                        <Link
                            href={session ? "/profile" : "/auth/login"}
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <User className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="hidden sm:inline text-xs md:text-sm font-medium">
                                {session ? "마이페이지" : "로그인 / 회원가입"}
                            </span>
                        </Link>

                        <Link
                            href="/cart"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="hidden sm:inline text-xs md:text-sm font-medium">장바구니</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                            className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm md:hidden"
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[90%] z-[55] bg-background/80 backdrop-blur-xl border-l border-border/40 pt-24 px-6 flex flex-col md:hidden shadow-2xl"
                        >
                            <div className="space-y-8">
                                <nav className="flex flex-col gap-4">
                                    {NAV_ITEMS.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-xl font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between group"
                                        >
                                            {item.label}
                                            <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                        </Link>
                                    ))}
                                </nav>

                                <div className="h-px bg-border/40 w-full" />

                                <div className="grid grid-cols-2 gap-4">
                                    <Link
                                        href={session ? "/profile" : "/auth/login"}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <User className="w-5 h-5 text-primary" />
                                        <span className="text-xs font-medium">{session ? "마이페이지" : "로그인"}</span>
                                    </Link>
                                    <Link
                                        href="/cart"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <ShoppingCart className="w-5 h-5 text-primary" />
                                        <span className="text-xs font-medium">장바구니</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-auto pb-12">
                                <p className="text-zinc-500 text-[10px] text-center">
                                    © 2026 baQoo MODE. All rights reserved.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
