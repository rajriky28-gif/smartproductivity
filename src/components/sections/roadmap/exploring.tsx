import { FadeIn } from "@/components/fade-in";

const exploringItems = [
  "Cross-tool integration within Smart Productivity",
  "Expanded reflection and awareness features",
  "Optional sync across devices",
  "New tools built on the same philosophy",
];

export function ExploringSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Exploring
          </h2>
        </FadeIn>
        <div className="mt-12 max-w-2xl mx-auto space-y-8">
          {exploringItems.map((item, index) => (
            <FadeIn key={item} delay={index * 150}>
              <p className="text-xl text-muted-foreground">{item}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={exploringItems.length * 150}>
          <p className="mt-12 text-sm text-muted-foreground">
            Ideas that require time, research, and care.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
