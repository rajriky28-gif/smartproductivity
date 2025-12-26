import { FadeIn } from "@/components/fade-in";

const items = [
  "Internal experiments",
  "Short-lived tests",
  "Ideas that didn’t work",
];

export function NotAnnouncedSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What doesn’t appear here
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FadeIn key={item} delay={index * 150}>
              <div className="text-center">
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
