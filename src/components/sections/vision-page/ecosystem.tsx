import { FadeIn } from "@/components/fade-in";

export function EcosystemSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Beyond a single product
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Smart Productivity is building a long-term ecosystem of thoughtfully connected tools. Each product will stand on its own, yet work together to reduce mental load.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
