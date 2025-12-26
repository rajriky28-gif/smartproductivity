import { FadeIn } from "@/components/fade-in";

const reportItems = [
    "Time spent in focus",
    "Tasks completed",
    "Planning consistency",
    "Trends over the week",
];

export function WeeklyReportsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Weekly reports that inform, not judge
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Understand how you spend your time without streaks, guilt, or artificial scores.
              </p>
              <div className="mt-8 space-y-4">
                {reportItems.map((item) => (
                    <div key={item} className="p-4 bg-muted/50 rounded-lg text-foreground/90">
                        {item}
                    </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Insight over motivation tricks.</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="bg-muted rounded-xl p-8 h-96 flex items-center justify-center">
              <p className="text-muted-foreground italic">
                [Minimal chart/graph visual]
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
