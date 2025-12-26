import { FadeIn } from "@/components/fade-in";

export function ResponseExpectationSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            We read every message carefully. While we may not respond immediately, every message is valued.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
