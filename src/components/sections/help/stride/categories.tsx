import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { helpArticles } from '@/lib/help-articles';

export function CategoriesSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {helpArticles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 100}>
              <Link href={`/help/stride/${article.slug}`}>
                <Card className="p-6 bg-muted h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1">
                  {article.icon && <article.icon className="size-8 text-muted-foreground" />}
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {article.description}
                  </p>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
