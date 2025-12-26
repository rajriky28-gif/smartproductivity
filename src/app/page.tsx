import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { PhilosophySection } from '@/components/sections/philosophy';
import { WhatWeBuildSection } from '@/components/sections/what-we-build';
import { HowWeThinkSection } from '@/components/sections/how-we-think';
import { BuiltForRealLifeSection } from '@/components/sections/built-for-real-life';
import { ProductSection } from '@/components/sections/product-section';
import { PrinciplesSection } from '@/components/sections/principles';
import { NotAnotherAppSection } from '@/components/sections/not-another-app';
import { QuietTechStatementSection } from '@/components/sections/quiet-tech-statement';
import { VisionSection } from '@/components/sections/vision';
import { CommunitySection } from '@/components/sections/community';
import { TransparencySection } from '@/components/sections/transparency';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <WhatWeBuildSection />
        <HowWeThinkSection />
        <BuiltForRealLifeSection />
        <ProductSection />
        <PrinciplesSection />
        <NotAnotherAppSection />
        <QuietTechStatementSection />
        <VisionSection />
        <CommunitySection />
        <TransparencySection />
      </main>
      <Footer />
    </div>
  );
}
