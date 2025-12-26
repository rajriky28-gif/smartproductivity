import { FadeIn } from "@/components/fade-in";

export function FutureSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Work should not feel overwhelming.
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground space-y-6">
            <p>
              The modern world moves fast. Information is constant. Expectations are endless.
            </p>
            <p>
              Our vision is not to accelerate this pace, but to give people tools that bring balance and clarity.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
