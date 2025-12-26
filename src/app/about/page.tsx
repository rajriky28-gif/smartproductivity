import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/about/hero';
import { OurBeliefSection } from '@/components/sections/about/our-belief';
import { WhyWeExistSection } from '@/components/sections/about/why-we-exist';
import { OurApproachSection } from '@/components/sections/about/our-approach';
import { WhatMakesUsDifferentSection } from '@/components/sections/about/what-makes-us-different';
import { OurFirstStepSection } from '@/components/sections/about/our-first-step';
import { LongTermVisionSection } from '@/components/sections/about/long-term-vision';
import { PrinciplesSection } from '@/components/sections/about/principles';
import { WhoWeAreSection } from '@/components/sections/about/who-we-are';
import { InvitationSection } from '@/components/sections/about/invitation';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurBeliefSection />
        <WhyWeExistSection />
        <OurApproachSection />
        <WhatMakesUsDifferentSection />
        <OurFirstStepSection />
        <LongTermVisionSection />
        <PrinciplesSection />
        <WhoWeAreSection />
        <InvitationSection />
      </main>
      <Footer />
    </div>
  );
}
