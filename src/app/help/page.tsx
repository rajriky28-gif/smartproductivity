import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/help/hero';
import { SearchSection } from '@/components/sections/help/search';
import { ProductSelectorSection } from '@/components/sections/help/product-selector';
import { CategoriesSection } from '@/components/sections/help/categories';
import { PopularArticlesSection } from '@/components/sections/help/popular-articles';
import { CantFindSection } from '@/components/sections/help/cant-find';
import { PhilosophyReminderSection } from '@/components/sections/help/philosophy-reminder';

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SearchSection />
        <ProductSelectorSection />
        <CategoriesSection />
        <PopularArticlesSection />
        <CantFindSection />
        <PhilosophyReminderSection />
      </main>
      <Footer />
    </div>
  );
}
