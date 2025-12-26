import { FadeIn } from "@/components/fade-in";

export function PhilosophyTieInSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            We believe communication should be intentional, not noisy or transactional.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
