import { FadeIn } from "@/components/fade-in";

export function SoftCtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg text-muted-foreground">
            Explore a product to begin.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
