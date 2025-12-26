import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/vision-page/hero';
import { FutureSection } from '@/components/sections/vision-page/future';
import { NoiseToClaritySection } from '@/components/sections/vision-page/noise-to-clarity';
import { SupportSystemSection } from '@/components/sections/vision-page/support-system';
import { EcosystemSection } from '@/components/sections/vision-page/ecosystem';
import { LongTermSection } from '@/components/sections/vision-page/long-term';
import { HumanCenteredSection } from '@/components/sections/vision-page/human-centered';
import { ResponsibilitySection } from '@/components/sections/vision-page/responsibility';
import { GrowingWithUsersSection } from '@/components/sections/vision-page/growing-with-users';
import { EndGoalSection } from '@/components/sections/vision-page/end-goal';
import { ClosingThoughtSection } from '@/components/sections/vision-page/closing-thought';

export default function VisionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FutureSection />
        <NoiseToClaritySection />
        <SupportSystemSection />
        <EcosystemSection />
        <LongTermSection />
        <HumanCenteredSection />
        <ResponsibilitySection />
        <GrowingWithUsersSection />
        <EndGoalSection />
        <ClosingThoughtSection />
      </main>
      <Footer />
    </div>
  );
}
