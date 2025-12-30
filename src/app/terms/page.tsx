
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/terms/hero';
import { ContactSection } from '@/components/sections/terms/contact';
import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function TermsSelector() {
  const terms = [
    {
      id: "stride",
      logo: "/logo.png",
      name: "Stride",
      description: "Task planning & focus app",
      href: "/terms/stride"
    },
    {
      id: "platform",
      logo: "/logo2.png",
      name: "Smart Productivity (Platform)",
      description: "Website & ecosystem",
      href: "/terms/platform"
    },
  ];

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Select a product to view its terms
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {terms.map((term, index) => (
            <FadeIn key={term.id} delay={index * 150}>
               <Link href={term.href} className="block h-full">
                <Card 
                  className="bg-background p-8 flex flex-col h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1 cursor-pointer"
                >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={term.logo}
                        alt={`${term.name} Logo`}
                        width={48}
                        height={48}
                        className={cn(term.id === 'stride' && "border rounded-lg")}
                      />
                      <h3 className="text-2xl font-bold text-foreground">
                        {term.name}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground flex-1">
                      {term.description}
                    </p>
                    <p className="mt-8 text-foreground self-start">
                      View terms →
                    </p>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TermsSelector />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
