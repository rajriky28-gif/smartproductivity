import { FadeIn } from "@/components/fade-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const scenarios = [
  {
    title: "When your day doesn’t go as planned",
    description: "The system adapts instead of punishing you.",
  },
  {
    title: "When motivation is low",
    description: "Structure helps you move forward without pressure.",
  },
  {
    title: "When work and life overlap",
    description: "Planning remains flexible, not rigid.",
  },
];

export function BuiltForRealLifeSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Designed for how life actually works
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <FadeIn key={scenario.title} delay={index * 150}>
              <Card className="text-left bg-muted border-none h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  <CardDescription className="pt-4 text-base text-foreground/80">
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
