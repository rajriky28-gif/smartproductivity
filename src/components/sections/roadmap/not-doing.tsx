import { FadeIn } from "@/components/fade-in";
import { XCircle } from "lucide-react";

const items = [
  "Gamification and streak pressure",
  "Feature overload",
  "Artificial urgency",
  "Attention-driven metrics",
];

export function NotDoingSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What we are intentionally avoiding
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <FadeIn key={item} delay={index * 100}>
              <div className="flex items-center gap-3">
                <XCircle className="size-5 text-muted-foreground flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
