import { FadeIn } from "@/components/fade-in";

export function LongTermDirectionSection() {
  return (
    <section className="py-24 sm:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight">
              A calm, connected ecosystem of productivity tools designed for
              the long term.
            </p>
            <footer className="mt-8 text-base text-background/70">
              Built slowly. Built responsibly.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
