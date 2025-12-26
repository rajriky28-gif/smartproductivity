import { FadeIn } from "@/components/fade-in";

const nextItems = [
  "Deeper weekly insights and trends",
  "Smarter task suggestions",
  "Focus Mode refinements based on usage patterns",
  "Subtle customization improvements",
];

export function NextSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Up next
          </h2>
        </FadeIn>
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
          {nextItems.map((item, index) => (
            <FadeIn key={item} delay={index * 150}>
              <p className="text-xl text-muted-foreground">{item}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={nextItems.length * 150}>
          <p className="mt-12 text-sm text-muted-foreground">
            These are areas we are actively exploring.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
