
import { FadeIn } from "@/components/fade-in";

export function ContactSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-lg text-muted-foreground">
            For privacy-related questions or requests, contact us at:
          </p>
          <a
            href="mailto:privacy@smartproductivity.in"
            className="mt-2 inline-block text-lg text-foreground hover:underline"
          >
            privacy@smartproductivity.in
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
