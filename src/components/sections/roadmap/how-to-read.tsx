import { FadeIn } from "@/components/fade-in";

export function HowToReadSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What this roadmap means
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            We believe transparency matters. This roadmap shows the direction we
            are exploring, while leaving room for learning and refinement.
          </p>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Timelines may change as we listen and learn.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
