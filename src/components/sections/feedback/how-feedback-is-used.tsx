import { FadeIn } from '@/components/fade-in';

export function HowFeedbackIsUsedSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-foreground">
              Every piece of feedback is read carefully.
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              We do not chase numbers or trends — we use feedback to refine,
              polish, and improve the products you care about.
            </p>
            <p className="mt-8 text-base text-muted-foreground">
              Your input shapes future updates, new tools, and ecosystem
              improvements.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
