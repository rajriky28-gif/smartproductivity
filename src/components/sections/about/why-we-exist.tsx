import { FadeIn } from "@/components/fade-in";

export function WhyWeExistSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Tools should support people, not compete for their attention.
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <p className="text-lg text-muted-foreground">
              Many modern apps are built to maximize engagement, not
              well-being. Smart Productivity exists to build an alternative —
              tools that respect human attention and cognitive limits.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
