import "./globals.css";
import type { Metadata } from "next";
import { AppChrome } from "@/components/layout/app-chrome";

export const metadata: Metadata = {
  title: "바꿔모드 baQoo MODE | 공간의 표정을 스위칭하다",
  description: "어제와 다른 오늘, 빛으로 바꾸어(baQoo) 보세요. 프리미엄 커스텀 조명 액자 브랜드.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-primary/30 flex flex-col">
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
