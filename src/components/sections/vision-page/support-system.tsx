import { FadeIn } from "@/components/fade-in";

export function SupportSystemSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Productivity should support life, not consume it
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Tools should adapt to human lives — unpredictable, complex, and changing. Our vision is to build systems that support people quietly in the background, without pressure or guilt.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
