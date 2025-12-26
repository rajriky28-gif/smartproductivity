import { FadeIn } from "@/components/fade-in";
import { CheckCircle } from "lucide-react";

const principles = [
  "Sustainable design over fast growth",
  "Thoughtful evolution over constant change",
  "Trust over engagement metrics",
];

export function LongTermSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            We are thinking in decades
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-8">
          {principles.map((principle, index) => (
            <FadeIn key={principle} delay={index * 150}>
              <div className="flex items-center gap-4">
                <CheckCircle className="size-6 text-foreground flex-shrink-0" />
                <span className="text-lg text-muted-foreground">{principle}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
