import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    name: "Stride",
    positioning: "A calmer way to plan, focus, and move forward.",
    meta: "Task & Focus System",
    overviewUrl: "/products/stride",
    learnMoreUrl: "/products/stride",
  },
];

export function ProductSelectorSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our products
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-8">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 150}>
              <Card className="bg-background border-border p-8 transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  {product.positioning}
                </p>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  {product.meta}
                </p>
                <div className="mt-6 flex gap-8">
                  <Link
                    href={product.overviewUrl}
                    className="text-foreground hover:underline underline-offset-4"
                  >
                    View overview →
                  </Link>
                  <Link
                    href={product.learnMoreUrl}
                    className="text-foreground hover:underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
          <FadeIn delay={products.length * 150}>
            <Card className="bg-background border-dashed border-border p-8 text-center">
              <h3 className="text-xl font-medium text-muted-foreground">
                More tools coming soon.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground/80">
                Built with the same philosophy.
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
