import { FadeIn } from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CantFindSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-2xl font-medium text-foreground">
            Can’t find what you’re looking for?
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you didn’t find what you were looking for:
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild variant="link" className="text-foreground text-base">
              <Link href="/feedback">Give feedback →</Link>
            </Button>
            <Button asChild variant="link" className="text-foreground text-base">
              <Link href="/contact">Contact us →</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
