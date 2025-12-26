import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/blog/hero';
import { FiltersSection } from '@/components/sections/blog/filters';
import { FeaturedEssaySection } from '@/components/sections/blog/featured-essay';
import { ArticleListSection } from '@/components/sections/blog/article-list';
import { WritingPhilosophySection } from '@/components/sections/blog/writing-philosophy';
import { NewsletterSection } from '@/components/sections/blog/newsletter';
import { ArchiveLinkSection } from '@/components/sections/blog/archive-link';
import { FooterQuoteSection } from '@/components/sections/blog/footer-quote';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FiltersSection />
        <FeaturedEssaySection />
        <ArticleListSection />
        <WritingPhilosophySection />
        <NewsletterSection />
        <ArchiveLinkSection />
        <FooterQuoteSection />
      </main>
      <Footer />
    </div>
  );
}