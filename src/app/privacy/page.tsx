
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/privacy/hero';
import { ContactSection } from '@/components/sections/privacy/contact';
import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function PolicySelector() {
  const policies = [
    {
      id: "stride",
      logo: "/logo.png",
      name: "Stride",
      description: "Task planning & focus app",
      href: "/privacy/stride"
    },
    {
      id: "platform",
      logo: "/logo.png",
      name: "Smart Productivity (Platform)",
      description: "Website & ecosystem",
      href: "/privacy/platform"
    },
  ];

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Select a product to view its policy
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {policies.map((policy, index) => (
            <FadeIn key={policy.id} delay={index * 150}>
              <Link href={policy.href} className="block h-full">
                <Card 
                  className="bg-background p-8 flex flex-col h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1 cursor-pointer"
                >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={policy.logo}
                        alt={`${policy.name} Logo`}
                        width={48}
                        height={48}
                        className={cn(policy.id === 'stride' && "border rounded-lg")}
                      />
                      <h3 className="text-2xl font-bold text-foreground">
                        {policy.name}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground flex-1">
                      {policy.description}
                    </p>
                    <p className="mt-8 text-foreground self-start">
                      View policy →
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


export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PolicySelector />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
