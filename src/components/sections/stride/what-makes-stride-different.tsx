import { FadeIn } from "@/components/fade-in";

const statements = [
    "Tasks shouldn’t require manual setup",
    "Focus should be customizable, not forced",
    "Progress should feel informative, not judgmental",
];

export function WhatMakesStrideDifferentSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Designed for how people actually think
          </h2>
        </FadeIn>
        <div className="max-w-4xl mx-auto space-y-10 text-center">
            {statements.map((statement, index) => (
                <FadeIn key={index} delay={index * 150}>
                    <p className="text-2xl md:text-3xl text-foreground/90">
                        {statement}
                    </p>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
}
