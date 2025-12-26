import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    step: "01",
    title: "Observe",
    description: "We study real behavior, not ideal workflows.",
  },
  {
    step: "02",
    title: "Reduce",
    description: "We remove unnecessary features before adding new ones.",
  },
  {
    step: "03",
    title: "Design Slowly",
    description: "Every interaction is intentional and considered.",
  },
  {
    step: "04",
    title: "Refine Continuously",
    description: "We improve carefully, without chasing trends.",
  },
];

export function OurApproachSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How we build
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-12">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 150}>
                <li className="relative pl-10">
                  <div className="absolute left-0 top-1 text-sm font-bold text-muted-foreground">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                     <div className="absolute left-[8.5px] top-8 bottom-[-3rem] w-px bg-border" />
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
