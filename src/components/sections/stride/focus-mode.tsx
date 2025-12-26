import { FadeIn } from "@/components/fade-in";
import { CheckCircle } from "lucide-react";

const features = [
    "Customize session duration",
    "Customize break length",
    "Choose number of focus sessions",
    "Distraction-free interface",
];

export function FocusModeSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Focus mode that adapts to you
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    Stride’s Focus Mode helps you work deeply by letting you control your own rhythm.
                </p>
            </FadeIn>
            <FadeIn delay={200}>
                <div className="mt-12 grid sm:grid-cols-2 gap-8 text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="size-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/80 text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
