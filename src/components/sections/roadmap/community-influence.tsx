import { FadeIn } from "@/components/fade-in";

export function CommunityInfluenceSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Shaped by real feedback
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our roadmap is influenced by how people actually use our tools — not
            by trend cycles.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Thoughtful feedback matters more than loud requests.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
