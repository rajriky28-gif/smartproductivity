import { FadeIn } from "@/components/fade-in";

export function WhoWeAreSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Who We Are
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Smart Productivity is built by people who value depth, clarity, and
            long-term thinking over short-term growth.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
            We are small by choice and thoughtful by design.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
