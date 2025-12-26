import { FadeIn } from "@/components/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const focusItems = [
  "Refining Quick Add intelligence",
  "Improving Focus Mode customization",
  "Stability, performance, and polish",
  "Accessibility improvements",
];

export function NowSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Now
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Stride
          </p>
        </FadeIn>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusItems.map((item, index) => (
            <FadeIn key={item} delay={index * 150}>
              <Card className="h-full bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-lg text-foreground">{item}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
