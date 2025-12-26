import { FadeIn } from "@/components/fade-in";

export function ProblemSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Modern productivity is too loud.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Today’s tools compete for attention. They push urgency, streaks,
            reminders, and pressure. Productivity has become about motion, not
            meaning. About activity, not intention.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
