
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { StrideTerms } from '@/components/terms-policies/stride-policy';
import { PlatformTerms } from '@/components/terms-policies/platform-policy';
import Link from 'next/link';

type TermType = "stride" | "platform";

const allTerms = [
  {
    id: "stride" as const,
    logo: "/stridelogo.png",
    name: "Stride",
    description: "Task planning & focus app",
    lastUpdated: "December 29, 2025",
    content: <StrideTerms />,
  },
  {
    id: "platform" as const,
    logo: "/logo.png",
    name: "Smart Productivity (Platform)",
    description: "Website & ecosystem",
    lastUpdated: "December 29, 2025",
    content: <PlatformTerms />,
  },
];

function getTerm(termSlug: string) {
    return allTerms.find(p => p.id === termSlug);
}

export function generateStaticParams() {
  return allTerms.map((term) => ({
    policy: term.id,
  }));
}

export default function TermPage({ params }: { params: { policy: TermType } }) {
  const termDetails = getTerm(params.policy);

  if (!termDetails) {
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
                    <Link href="/terms">
                        ← Back to terms selection
                    </Link>
                </Button>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={termDetails.logo}
                    alt={`${termDetails.name} Logo`}
                    width={64}
                    height={64}
                    className={cn(termDetails.id === 'stride' && "border rounded-lg")}
                  />
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      {termDetails.name} Terms of Use
                    </h1>
                    <p className="text-muted-foreground">
                      {termDetails.description}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground self-start md:self-center">
                  Last updated: {termDetails.lastUpdated}
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto text-foreground/90 mt-16">
                {termDetails.content}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
