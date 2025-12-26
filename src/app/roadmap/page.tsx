import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/roadmap/hero';
import { HowToReadSection } from '@/components/sections/roadmap/how-to-read';
import { ProductSelectorSection } from '@/components/sections/roadmap/product-selector';
import { NowSection } from '@/components/sections/roadmap/now';
import { NextSection } from '@/components/sections/roadmap/next';
import { ExploringSection } from '@/components/sections/roadmap/exploring';
import { NotDoingSection } from '@/components/sections/roadmap/not-doing';
import { CommunityInfluenceSection } from '@/components/sections/roadmap/community-influence';
import { LongTermDirectionSection } from '@/components/sections/roadmap/long-term-direction';
import { ClosingNoteSection } from '@/components/sections/roadmap/closing-note';

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowToReadSection />
        <ProductSelectorSection />
        <NowSection />
        <NextSection />
        <ExploringSection />
        <NotDoingSection />
        <CommunityInfluenceSection />
        <LongTermDirectionSection />
        <ClosingNoteSection />
      </main>
      <Footer />
    </div>
  );
}
