import { FadeIn } from "@/components/fade-in";
import { CheckCircle } from "lucide-react";

const points = [
  "Clear communication",
  "Thoughtful updates",
  "Honest limitations",
  "Long-term thinking",
];

export function TransparencySection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Transparency matters
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <FadeIn key={point} delay={index * 150}>
              <div className="flex flex-col items-center text-center gap-4">
                <CheckCircle className="size-8 text-foreground" />
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
