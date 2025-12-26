import { FadeIn } from "@/components/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function InvitationSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Build with us
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            We believe the future of productivity should feel calmer, more
            human, and more intentional.
          </p>
          <Button asChild variant="link" className="mt-8 text-lg text-foreground">
            <Link href="/#principles">
              Read our principles
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
