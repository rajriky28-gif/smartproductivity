import { FadeIn } from "@/components/fade-in";

export function ClosingThoughtSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">
            The future of productivity is quieter.
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}
