import { FadeIn } from "@/components/fade-in";

export function HumanSchedulingSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Planning that respects real life
          </h2>
          <div className="mt-8 max-w-3xl mx-auto grid sm:grid-cols-3 gap-8">
            <p className="text-lg text-muted-foreground">Flexible rescheduling</p>
            <p className="text-lg text-muted-foreground">No rigid penalties</p>
            <p className="text-lg text-muted-foreground">Easy task movement across days</p>
          </div>
           <p className="mt-12 text-lg text-foreground/90">Life changes. Your system should too.</p>
        </FadeIn>
      </div>
    </section>
  );
}
