import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/philosophy-page/hero';
import { ProblemSection } from '@/components/sections/philosophy-page/problem';
import { DefinitionSection } from '@/components/sections/philosophy-page/definition';
import { AttentionSection } from '@/components/sections/philosophy-page/attention';
import { LessIsMoreSection } from '@/components/sections/philosophy-page/less-is-more';
import { SlowProductivitySection } from '@/components/sections/philosophy-page/slow-productivity';
import { ToolsDisappearSection } from '@/components/sections/philosophy-page/tools-disappear';
import { BoundariesSection } from '@/components/sections/philosophy-page/boundaries';
import { HowItBecomesProductsSection } from '@/components/sections/philosophy-page/how-it-becomes-products';
import { LongTermViewSection } from '@/components/sections/philosophy-page/long-term-view';
import { ClosingThoughtSection } from '@/components/sections/philosophy-page/closing-thought';

export default function PhilosophyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <DefinitionSection />
        <AttentionSection />
        <LessIsMoreSection />
        <SlowProductivitySection />
        <ToolsDisappearSection />
        <BoundariesSection />
        <HowItBecomesProductsSection />
        <LongTermViewSection />
        <ClosingThoughtSection />
      </main>
      <Footer />
    </div>
  );
}
