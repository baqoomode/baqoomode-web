import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";

export function GNB() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* Left: Logo */}
                <div className="flex-1">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl tracking-tight text-foreground/90">baQoo <span className="text-primary font-black">MODE</span></span>
                    </Link>
                </div>

                {/* Center: Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-center gap-8">
                    <Link href="/brand" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"> Brand </Link>
                    <Link href="/modes" className="text-sm font-medium text-foreground hover:text-primary transition-colors"> For You (B2C) </Link>
                    <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"> For Business (B2B) </Link>
                    <Link href="/reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"> Reviews </Link>
                </nav>

                {/* Right: Actions */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    <button aria-label="Search" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link href="/auth/login" aria-label="My Account" className="text-muted-foreground hover:text-foreground transition-colors">
                        <User className="w-5 h-5" />
                    </Link>
                    <Link href="/cart" aria-label="Shopping Cart" className="text-muted-foreground hover:text-foreground transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button aria-label="Mobile Menu" className="md:hidden text-muted-foreground hover:text-foreground transition-colors ml-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </header>
    );
}
