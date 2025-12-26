import { FadeIn } from "@/components/fade-in";

export function PartOfSmartProductivitySection() {
  return (
    <section className="py-24 sm:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight">
              Stride is the first step in a larger vision of calm, human-centered productivity tools.
            </p>
            <footer className="mt-8 text-base text-background/70">
              Built by Smart Productivity.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
