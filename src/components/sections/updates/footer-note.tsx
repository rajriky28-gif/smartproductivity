import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterNoteSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg text-muted-foreground">
            Have feedback or ideas?
          </p>
          <Button asChild variant="link" className="mt-2 text-lg text-foreground">
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
