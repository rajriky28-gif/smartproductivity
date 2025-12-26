import { FadeIn } from "@/components/fade-in";

export function AttentionSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Attention is a limited resource.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            It should be protected, not exploited.
          </p>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground">
            Many systems are designed to maximize engagement. We believe tools
            should minimize interruption.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
