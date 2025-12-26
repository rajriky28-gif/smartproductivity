import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/stride/hero';
import { WhatMakesStrideDifferentSection } from '@/components/sections/stride/what-makes-stride-different';
import { QuickAddSection } from '@/components/sections/stride/quick-add';
import { FocusModeSection } from '@/components/sections/stride/focus-mode';
import { WeeklyReportsSection } from '@/components/sections/stride/weekly-reports';
import { HoldToEditSection } from '@/components/sections/stride/hold-to-edit';
import { HumanSchedulingSection } from '@/components/sections/stride/human-scheduling';
import { DesignedToDisappearSection } from '@/components/sections/stride/designed-to-disappear';
import { PrivacyAndSimplicitySection } from '@/components/sections/stride/privacy-and-simplicity';
import { PartOfSmartProductivitySection } from '@/components/sections/stride/part-of-smart-productivity';
import { DownloadSection } from '@/components/sections/stride/download';
import { FinalCtaSection } from '@/components/sections/stride/final-cta';

export default function StridePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatMakesStrideDifferentSection />
        <QuickAddSection />
        <FocusModeSection />
        <WeeklyReportsSection />
        <HoldToEditSection />
        <HumanSchedulingSection />
        <DesignedToDisappearSection />
        <PrivacyAndSimplicitySection />
        <PartOfSmartProductivitySection />
        <DownloadSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
