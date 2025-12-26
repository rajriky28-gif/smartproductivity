import { FadeIn } from "@/components/fade-in";

export function VisionSection() {
  return (
    <section
      id="vision"
      className="py-24 sm:py-32 bg-foreground text-background"
    >
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A long-term vision
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-background/80">
            Smart Productivity is building a suite of tools designed around
            human attention, not engagement metrics.
          </p>
          <p className="mt-8 text-sm text-background/60">
            We are just getting started.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
