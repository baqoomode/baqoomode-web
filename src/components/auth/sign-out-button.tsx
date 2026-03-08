"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

interface SignOutButtonProps {
    label?: string;
    className?: string;
}

export function SignOutButton({ label = "로그아웃", className }: SignOutButtonProps) {
    const router = useRouter();

    return (
        <Button
            type="button"
            variant="outline"
            className={className}
            onClick={async () => {
                await signOut();
                router.refresh();
            }}
        >
            <LogOut className="h-4 w-4" />
            {label}
        </Button>
    );
}