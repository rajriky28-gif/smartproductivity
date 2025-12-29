
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/privacy/hero';
import { ContactSection } from '@/components/sections/privacy/contact';
import { StridePolicy } from '@/components/privacy-policies/stride-policy';
import { PlatformPolicy } from '@/components/privacy-policies/platform-policy';
import { FadeIn } from '@/components/fade-in';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic';

function AllPolicies() {
  const searchParams = useSearchParams();
  const selectedPolicy = searchParams.get('product');

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

  const policies = selectedPolicy 
    ? allPolicies.filter(p => p.id === selectedPolicy)
    : allPolicies;


  return (
    <section className="bg-muted py-24 sm:py-32">
        <div className="container mx-auto px-4">
            {policies.map((details, index) => (
                <div key={details.id}>
                    <FadeIn>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <div className="flex items-center gap-4">
                                <Image
                                src={details.logo}
                                alt={`${details.name} Logo`}
                                width={64}
                                height={64}
                                className={cn(details.id === 'stride' && "border rounded-lg")}
                                />
                                <div>
                                <h2 className="text-2xl font-bold text-foreground">
                                    {details.name}
                                </h2>
                                <p className="text-muted-foreground">
                                    {details.description}
                                </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground self-start md:self-center">
                                Last updated: {details.lastUpdated}
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90 mt-12">
                            {details.content}
                        </div>
                    </FadeIn>
                    {index < policies.length - 1 && <Separator className="my-16 sm:my-24" />}
                </div>
            ))}
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
        <Suspense fallback={<div>Loading policies...</div>}>
         <AllPolicies />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
