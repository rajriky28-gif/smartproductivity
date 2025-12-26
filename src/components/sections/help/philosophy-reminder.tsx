import { FadeIn } from '@/components/fade-in';

export function PhilosophyReminderSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl font-medium text-foreground">
              Help should reduce stress, not add to it.
            </p>
            <footer className="mt-4 text-base text-muted-foreground">
              We design our systems — and our support — with care.
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
