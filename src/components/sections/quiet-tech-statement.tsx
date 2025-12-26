import { FadeIn } from "@/components/fade-in";

export function QuietTechStatementSection() {
  return (
    <section className="py-24 sm:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight">
              The best technology is the one you forget about while it helps you
              do your best work.
            </p>
            <footer className="mt-8 text-base text-background/70">
              That is what we are building.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
