import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center">
      <AnimatedGrid />
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Build focus.
            <br />
            Eliminate noise.
            <br />
            Do meaningful work.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Smart Productivity creates tools and systems that help people work
            with clarity, not pressure.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <Button
            asChild
            variant="link"
            className="mt-8 text-lg text-foreground"
          >
            <Link href="#philosophy">
              Explore our approach
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
