import { FadeIn } from "@/components/fade-in";

export function GrowingWithUsersSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Growing With Our Users
          </h2>
          <div className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground space-y-6">
            <p>
              We don’t believe in building in isolation.
            </p>
            <p>
              Our vision is to grow alongside our users — listening carefully and improving thoughtfully. Progress should feel collaborative, not imposed.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
