import { FadeIn } from "@/components/fade-in";

export function ToolsDisappearSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight text-foreground">
              The best tool is the one you forget about while doing meaningful
              work.
            </p>
            <footer className="mt-8 text-base text-muted-foreground">
              This is our design goal.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
