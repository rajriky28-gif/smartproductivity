
export const dynamic = 'force-dynamic'

import { Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/terms/hero';
import { ProductSelectorSection } from '@/components/sections/terms/product-selector';
import { ContactSection } from '@/components/sections/terms/contact';

function TermsContent() {
  return (
    <>
      <ProductSelectorSection />
      <ContactSection />
    </>
  )
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <TermsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
