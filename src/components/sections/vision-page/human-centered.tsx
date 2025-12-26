import { FadeIn } from "@/components/fade-in";

export function HumanCenteredSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight text-foreground">
              Technology should serve human limits, not demand people exceed them.
            </p>
            <footer className="mt-8 text-base text-muted-foreground">
              This belief shapes everything we build.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
