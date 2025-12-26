import { FadeIn } from "@/components/fade-in";

export function LongTermVisionSection() {
  return (
    <section className="py-24 sm:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight">
              We are building a long-term ecosystem of calm tools designed
              around how humans think and work.
            </p>
            <footer className="mt-8 text-base text-background/70">
              This is a long journey. We are patient.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
