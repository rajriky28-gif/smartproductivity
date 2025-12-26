import { FadeIn } from "@/components/fade-in";

const categories = [
  "Planning & Tasks",
  "Focus & Deep Work",
  "Reflection & Awareness",
];

export function CategoriesSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Designed to work together
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {categories.map((category, index) => (
            <FadeIn key={category} delay={index * 150}>
              <div className="text-center">
                <p className="text-lg text-foreground">{category}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
