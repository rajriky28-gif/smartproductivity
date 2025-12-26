import { FadeIn } from "@/components/fade-in";

const definitions = [
  {
    term: "Clarity",
    definition: "Knowing what matters—and what doesn’t.",
  },
  {
    term: "Focus",
    definition: "Giving your attention to one thing at a time.",
  },
  {
    term: "Consistency",
    definition: "Showing up sustainably, without burnout.",
  },
];

export function DefinitionSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What productivity really means to us
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-12">
          {definitions.map((item, index) => (
            <FadeIn key={item.term} delay={index * 150}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {item.term}
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  {item.definition}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
