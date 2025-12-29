
export const dynamic = 'force-dynamic'

import { Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/privacy/hero';
import { ProductSelectorSection } from '@/components/sections/privacy/product-selector';
import { ContactSection } from '@/components/sections/privacy/contact';

function PrivacyContent() {
  return (
    <>
      <ProductSelectorSection />
      <ContactSection />
    </>
  )
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <PrivacyContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
