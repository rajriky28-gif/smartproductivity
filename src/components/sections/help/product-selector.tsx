import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const products = [
  {
    name: 'Stride',
    description: 'Tasks, focus, and planning made calm.',
    href: '/help/stride',
  },
];

export function ProductSelectorSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Choose a product
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 150}>
              <Card className="bg-background p-8 flex flex-col h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <Link
                  href={product.href}
                  className="mt-8 text-foreground hover:underline underline-offset-4 self-start"
                >
                  View help →
                </Link>
              </Card>
            </FadeIn>
          ))}
          <FadeIn delay={products.length * 150}>
            <Card className="bg-muted/50 border-dashed border-border p-8 text-center flex flex-col justify-center h-full">
              <h3 className="text-xl font-medium text-muted-foreground">
                More products coming soon
              </h3>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
