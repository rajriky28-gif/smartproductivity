import { FadeIn } from "@/components/fade-in";
import { XCircle } from "lucide-react";

const principles = [
  "No dark patterns",
  "No unnecessary data collection",
  "No attention manipulation",
];

export function PrivacyAndSimplicitySection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Built with respect
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <FadeIn key={principle} delay={index * 150}>
              <div className="flex flex-col items-center gap-3 text-center">
                <XCircle className="size-7 text-muted-foreground" />
                <span className="text-foreground text-lg">{principle}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
