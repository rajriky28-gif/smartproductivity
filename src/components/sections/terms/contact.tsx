
import { FadeIn } from "@/components/fade-in";

export function ContactSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg text-muted-foreground">
            If you have questions about these terms, contact us at:
          </p>
          <a
            href="mailto:legal@smartproductivity.in"
            className="mt-2 inline-block text-lg text-foreground hover:underline"
          >
            legal@smartproductivity.in
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
