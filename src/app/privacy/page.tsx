
"use client";

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/privacy/hero';
import { ContactSection } from '@/components/sections/privacy/contact';
import { StridePolicy } from '@/components/privacy-policies/stride-policy';
import { PlatformPolicy } from '@/components/privacy-policies/platform-policy';
import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Policy = "stride" | "platform" | null;

function PolicyContent({ selectedPolicy, onBack }: { selectedPolicy: Policy, onBack: () => void }) {
  const allPolicies = [
    {
      id: "stride",
      logo: "/stridelogo.png",
      name: "Stride",
      description: "Task planning & focus app",
      lastUpdated: "December 29, 2025",
      content: <StridePolicy />,
    },
    {
      id: "platform",
      logo: "/logo.png",
      name: "Smart Productivity (Platform)",
      description: "Website & ecosystem",
      lastUpdated: "December 29, 2025",
      content: <PlatformPolicy />,
    },
  ];

  const policyDetails = allPolicies.find(p => p.id === selectedPolicy);

  if (!policyDetails) return null;

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Button variant="link" onClick={onBack} className="mb-8 text-foreground">
            ← Back to policy selection
          </Button>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-4">
              <Image
                src={policyDetails.logo}
                alt={`${policyDetails.name} Logo`}
                width={64}
                height={64}
                className={cn(policyDetails.id === 'stride' && "border rounded-lg")}
              />
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {policyDetails.name}
                </h2>
                <p className="text-muted-foreground">
                  {policyDetails.description}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground self-start md:self-center">
              Last updated: {policyDetails.lastUpdated}
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90 mt-12">
            {policyDetails.content}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


function PolicySelector({ onSelect }: { onSelect: (policy: Policy) => void }) {
  const policies = [
    {
      id: "stride" as const,
      logo: "/stridelogo.png",
      name: "Stride",
      description: "Task planning & focus app",
    },
    {
      id: "platform" as const,
      logo: "/logo.png",
      name: "Smart Productivity (Platform)",
      description: "Website & ecosystem",
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
              <Card 
                className="bg-background p-8 flex flex-col h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1 cursor-pointer"
                onClick={() => onSelect(policy.id)}
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function PrivacyPage() {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {selectedPolicy ? (
          <PolicyContent selectedPolicy={selectedPolicy} onBack={() => setSelectedPolicy(null)} />
        ) : (
          <PolicySelector onSelect={setSelectedPolicy} />
        )}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
