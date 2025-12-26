import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/products/hero';
import { ProductSelectorSection } from '@/components/sections/products/product-selector';
import { DesignPhilosophySection } from '@/components/sections/products/design-philosophy';
import { CategoriesSection } from '@/components/sections/products/categories';
import { ChoosingToolSection } from '@/components/sections/products/choosing-tool';
import { ComparisonSection } from '@/components/sections/products/comparison';
import { EcosystemVisionSection } from '@/components/sections/products/ecosystem-vision';
import { SoftCtaSection } from '@/components/sections/products/soft-cta';

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductSelectorSection />
        <DesignPhilosophySection />
        <CategoriesSection />
        <ChoosingToolSection />
        <ComparisonSection />
        <EcosystemVisionSection />
        <SoftCtaSection />
      </main>
      <Footer />
    </div>
  );
}
