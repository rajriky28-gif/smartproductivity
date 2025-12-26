import { FadeIn } from "@/components/fade-in";

export function HoldToEditSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Change plans without friction
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hold and edit tasks instantly. Adjust schedules naturally as your day evolves.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-12 space-y-4 max-w-sm mx-auto">
            <div className="p-4 bg-background rounded-lg shadow-sm">Hold to edit time</div>
            <div className="p-4 bg-background rounded-lg shadow-sm">Hold to reschedule</div>
            <div className="p-4 bg-background rounded-lg shadow-sm">Hold to break tasks into subtasks</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
