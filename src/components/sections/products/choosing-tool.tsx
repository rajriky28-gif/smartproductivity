import { FadeIn } from "@/components/fade-in";

export function ChoosingToolSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Choosing a product
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Start with the tool that solves your immediate need. As your system
            grows, our tools are designed to complement each other — not compete
            for attention.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
