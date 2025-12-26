import { FadeIn } from "@/components/fade-in";

export function DesignedToDisappearSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-medium leading-tight text-foreground">
              Stride is designed to disappear while you focus on meaningful work.
            </p>
            <footer className="mt-8 text-base text-muted-foreground">
              This is intentional.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
