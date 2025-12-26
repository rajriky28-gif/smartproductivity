import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ClosingNoteSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground">
            We don’t ship to impress.
            <br />
            We ship to support meaningful work.
          </h2>
          <Button asChild variant="link" className="mt-8 text-lg text-foreground">
            <Link href="/#contact">
              Share feedback
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
