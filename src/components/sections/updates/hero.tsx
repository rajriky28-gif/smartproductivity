import { FadeIn } from "@/components/fade-in";

export function HeroSection() {
  return (
    <section className="relative flex h-[60vh] min-h-[500px] items-center justify-center bg-background px-4 text-center">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Product updates, thoughtfully shared.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            A record of improvements, refinements, and changes across our
            products — shared with clarity and honesty.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
