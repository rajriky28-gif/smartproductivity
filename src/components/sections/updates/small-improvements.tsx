import { FadeIn } from "@/components/fade-in";

export function SmallImprovementsSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Ongoing refinements
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Alongside major updates, we continuously improve performance,
            stability, and accessibility.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-muted-foreground">
            <span>Bug fixes</span>
            <span>Performance optimizations</span>
            <span>UI polish</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
