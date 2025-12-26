import { FadeIn } from "@/components/fade-in";
import { CommunityForm } from "@/components/community-form";

export function CommunitySection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Build with us
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            Smart Productivity is evolving. We listen closely and build
            carefully.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <CommunityForm />
        </FadeIn>
      </div>
    </section>
  );
}
