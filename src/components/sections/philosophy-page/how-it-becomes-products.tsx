import { FadeIn } from "@/components/fade-in";

export function HowItBecomesProductsSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How This Philosophy Becomes Products
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our philosophy is not abstract. It directly shapes every decision we
            make—from interface design to feature selection.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground/80">
            Our first product is a reflection of this thinking, not the
            definition of our company.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
