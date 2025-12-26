import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";

const statements = ["Clarity over chaos", "Systems over hacks", "Focus over speed"];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Productivity is not about doing more.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most tools push people to move faster. We believe productivity
              should help you think better, decide clearly, and act
              intentionally.
            </p>
          </FadeIn>
          <div className="space-y-4">
            {statements.map((statement, index) => (
              <FadeIn key={statement} delay={index * 150} direction="left">
                <Card className="p-6 bg-background border-border">
                  <p className="text-lg font-medium text-foreground">
                    {statement}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
