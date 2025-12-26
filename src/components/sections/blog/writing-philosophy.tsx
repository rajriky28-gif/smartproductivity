import { FadeIn } from "@/components/fade-in";

export function WritingPhilosophySection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight text-foreground">
              We don’t write to optimize clicks. We write to think clearly.
            </p>
            <footer className="mt-8 text-base text-muted-foreground">
              Quality over quantity.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}