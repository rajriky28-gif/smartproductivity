import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductHeaderSection } from '@/components/sections/help/stride/product-header';
import { ProductSearchSection } from '@/components/sections/help/stride/product-search';
import { ArticlesSection } from '@/components/sections/help/stride/articles';
import { NeedHelpSection } from '@/components/sections/help/stride/need-help';
import { CrossNavSection } from '@/components/sections/help/stride/cross-nav';
import { CategoriesSection } from '@/components/sections/help/stride/categories';

export default function StrideHelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ProductHeaderSection />
        <ProductSearchSection />
        <CategoriesSection />
        <ArticlesSection />
        <NeedHelpSection />
        <CrossNavSection />
      </main>
      <Footer />
    </div>
  );
}
