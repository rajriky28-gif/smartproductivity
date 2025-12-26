import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/contact/hero';
import { ContactOptionsSection } from '@/components/sections/contact/contact-options';
import { ResponseExpectationSection } from '@/components/sections/contact/response-expectation';
import { PhilosophyTieInSection } from '@/components/sections/contact/philosophy-tie-in';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ContactOptionsSection />
        <ResponseExpectationSection />
        <PhilosophyTieInSection />
      </main>
      <Footer />
    </div>
  );
}
