import { ModeCuration } from "@/components/home/mode-curation";

export const metadata = {
    title: "For You (B2C) - 바꿔모드 baQoo MODE",
    description: "당신의 감성을 스위칭할 4가지 특별한 모드를 만나보세요.",
};

export default function ModesPage() {
    return (
        <div className="min-h-screen bg-background pt-16">
            {/* 
        We can reuse the beautifully crafted ModeCuration component from the homepage.
        It already serves as a perfect catalog for the B2C modes.
      */}
            <ModeCuration />
        </div>
    );
}
