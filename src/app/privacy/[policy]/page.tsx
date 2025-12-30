
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { StridePolicy } from '@/components/privacy-policies/stride-policy';
import { PlatformPolicy } from '@/components/privacy-policies/platform-policy';
import Link from 'next/link';

type PolicyType = "stride" | "platform";

const allPolicies = [
  {
    id: "stride" as const,
    logo: "/stridelogo.png",
    name: "Stride",
    description: "Task planning & focus app",
    lastUpdated: "December 29, 2025",
    content: <StridePolicy />,
  },
  {
    id: "platform" as const,
    logo: "/logo.png",
    name: "Smart Productivity (Platform)",
    description: "Website & ecosystem",
    lastUpdated: "December 29, 2025",
    content: <PlatformPolicy />,
  },
];

function getPolicy(policySlug: string) {
    return allPolicies.find(p => p.id === policySlug);
}

export function generateStaticParams() {
  return allPolicies.map((policy) => ({
    policy: policy.id,
  }));
}

export default function PolicyPage({ params }: { params: { policy: PolicyType } }) {
  const policyDetails = getPolicy(params.policy);

  if (!policyDetails) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-muted py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <FadeIn>
              <Button asChild variant="link" className="mb-8 text-foreground pl-0">
                <Link href="/privacy">
                    ← Back to policy selection
                </Link>
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
                    <h1 className="text-3xl font-bold text-foreground">
                      {policyDetails.name} Privacy Policy
                    </h1>
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
              <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-foreground/90 mt-16">
                {policyDetails.content}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
