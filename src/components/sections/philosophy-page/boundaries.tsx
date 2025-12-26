import { FadeIn } from "@/components/fade-in";
import { XCircle } from "lucide-react";

const boundaries = [
  "No endless loops",
  "No artificial urgency",
  "No guilt-driven design",
  "No attention traps",
];

export function BoundariesSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Technology should know when to stop
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-3xl mx-auto">
          {boundaries.map((principle, index) => (
            <FadeIn key={principle} delay={index * 100}>
              <div className="flex items-center gap-3">
                <XCircle className="size-5 text-muted-foreground flex-shrink-0" />
                <span className="text-foreground">{principle}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
