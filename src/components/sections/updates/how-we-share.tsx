import { FadeIn } from "@/components/fade-in";

export function HowWeShareSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What to expect here
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground space-y-4">
            <p>We share updates when something meaningfully improves.</p>
            <p>Not every change is listed. Not every update is major.</p>
            <p>Our focus is clarity, not frequency.</p>
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">
            Calm progress over constant announcements.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
