import { FadeIn } from '@/components/fade-in';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <FadeIn>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="size-16 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Thank You!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
              Your submission has been received successfully. We appreciate you
              reaching out.
            </p>
            <Button asChild variant="link" className="mt-8 text-lg text-foreground">
              <Link href="/">
                ← Back to Home
              </Link>
            </Button>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
