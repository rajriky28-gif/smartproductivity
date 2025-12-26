import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/feedback/hero';
import { ProductMarketplaceSection } from '@/components/sections/feedback/product-marketplace';
import { HowFeedbackIsUsedSection } from '@/components/sections/feedback/how-feedback-is-used';
import { SecondaryActionsSection } from '@/components/sections/feedback/secondary-actions';

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductMarketplaceSection />
        <HowFeedbackIsUsedSection />
        <SecondaryActionsSection />
      </main>
      <Footer />
    </div>
  );
}
