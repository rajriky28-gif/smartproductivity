import { FadeIn } from "@/components/fade-in";

const leftSide = [
  "Endless alerts",
  "Cognitive overload",
  "Busywork",
  "Fragmented attention",
];
const rightSide = [
  "Intentional systems",
  "Mental clarity",
  "Meaningful progress",
  "Focused attention",
];

export function NoiseToClaritySection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            From Noise to Clarity
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto items-center">
          <FadeIn>
            <div className="space-y-4 text-center md:text-right">
              {leftSide.map((item) => (
                <p key={item} className="text-xl text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="space-y-4 text-center md:text-left">
              {rightSide.map((item) => (
                <p key={item} className="text-xl font-medium text-foreground">
                  {item}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
