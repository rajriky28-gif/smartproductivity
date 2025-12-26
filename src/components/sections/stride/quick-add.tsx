import { FadeIn } from "@/components/fade-in";

export function QuickAddSection() {
  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Quick Add
              </h3>
              <p className="mt-4 text-2xl text-muted-foreground">
                Describe what you need to do. Stride handles the rest.
              </p>
              <p className="mt-6 text-lg text-foreground/80">
                Write naturally — Stride intelligently understands time, date, title, subtasks, and priority without forcing you into forms.
              </p>
              <div className="mt-8 space-y-4 rounded-xl bg-muted/50 p-4">
                <p className="font-mono text-sm text-foreground/70">“Prepare presentation tomorrow at 10am, include slides and notes”</p>
                <p className="font-mono text-sm text-foreground/70">“Workout for 45 minutes tonight, high priority”</p>
              </div>
               <p className="mt-6 text-sm text-muted-foreground">Less friction. More clarity.</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="bg-muted rounded-xl p-8 h-96 flex items-center justify-center">
                <p className="text-muted-foreground italic">
                    [Animated text to structured task transformation]
                </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
