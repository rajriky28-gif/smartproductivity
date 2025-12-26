import { FadeIn } from "@/components/fade-in";

export function OurBeliefSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Productivity has lost its meaning.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Somewhere along the way, productivity became about speed, hustle,
            and doing more at any cost. We believe real productivity is
            quieter. It is about clarity, focus, and choosing what truly
            matters.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
