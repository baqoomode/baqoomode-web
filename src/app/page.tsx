import { HeroSection } from "@/components/home/hero-section";
import { BrandIntro } from "@/components/home/brand-intro";
import { ModeCuration } from "@/components/home/mode-curation";
import { B2BPreview } from "@/components/home/b2b-preview";
import { ReviewsPreview } from "@/components/home/reviews-preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. Impactful Hero Section */}
      <HeroSection />

      {/* 2. Brand Identity & Philosophy */}
      <BrandIntro />

      {/* 3. B2C Core: 4 Curation Modes */}
      <ModeCuration eyebrow="Lifestyle Modes" />

      {/* 4. Verification & Trust: Real Stories */}
      <ReviewsPreview />

      {/* 5. B2B & Tech Expansion */}
      <B2BPreview />
    </main>
  );
}
