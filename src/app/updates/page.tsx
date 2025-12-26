import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/updates/hero';
import { HowWeShareSection } from '@/components/sections/updates/how-we-share';
import { ProductSelectorSection } from '@/components/sections/updates/product-selector';
import { LatestUpdateSection } from '@/components/sections/updates/latest-update';
import { UpdateTimelineSection } from '@/components/sections/updates/timeline';
import { SmallImprovementsSection } from '@/components/sections/updates/small-improvements';
import { NotAnnouncedSection } from '@/components/sections/updates/not-announced';
import { LookingAheadSection } from '@/components/sections/updates/looking-ahead';
import { PhilosophyStatementSection } from '@/components/sections/updates/philosophy-statement';
import { FooterNoteSection } from '@/components/sections/updates/footer-note';

export default function UpdatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowWeShareSection />
        <ProductSelectorSection />
        <LatestUpdateSection />
        <UpdateTimelineSection />
        <SmallImprovementsSection />
        <NotAnnouncedSection />
        <LookingAheadSection />
        <PhilosophyStatementSection />
        <FooterNoteSection />
      </main>
      <Footer />
    </div>
  );
}
