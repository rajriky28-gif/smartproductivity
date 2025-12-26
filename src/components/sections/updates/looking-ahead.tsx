import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LookingAheadSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg text-muted-foreground">
            Future updates are guided by real usage, thoughtful feedback, and
            long-term vision.
          </p>
          <Button asChild variant="link" className="mt-4 text-lg text-foreground">
            <Link href="/roadmap">
              View roadmap
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
