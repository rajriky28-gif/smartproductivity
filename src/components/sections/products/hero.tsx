import { FadeIn } from "@/components/fade-in";

export function HeroSection() {
  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center bg-background px-4 text-center">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Tools for calm, intentional work.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            A growing collection of thoughtfully designed tools built to
            support focus, clarity, and meaningful progress.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
