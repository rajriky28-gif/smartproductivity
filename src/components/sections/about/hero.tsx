import { FadeIn } from "@/components/fade-in";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top,white,transparent)] dark:bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex h-[80vh] min-h-[600px] items-center justify-center px-4 sm:px-6 lg:px-8">
      <AnimatedGrid />
      <div className="container mx-auto text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            We build tools for clear thinking.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Smart Productivity is a technology company focused on helping people
            work with intention, not pressure.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
