import { FadeIn } from "@/components/fade-in";

export function ResponsibilitySection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Responsibility matters
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            As technology becomes more powerful, the responsibility of building it grows. Our vision includes clear boundaries, ethical design, and respect for user attention and data.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
