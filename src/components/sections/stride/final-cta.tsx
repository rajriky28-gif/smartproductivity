import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Start moving forward, calmly
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="link" className="text-foreground text-base">
              <Link href="/philosophy">Read our philosophy →</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
