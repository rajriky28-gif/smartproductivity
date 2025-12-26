import { FadeIn } from "@/components/fade-in";

export function SlowProductivitySection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            We believe in slow productivity.
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground space-y-4">
            <p>We do not rush features.</p>
            <p>We do not chase trends.</p>
            <p>
              We design carefully, test thoughtfully, and improve only when it
              adds real value.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
