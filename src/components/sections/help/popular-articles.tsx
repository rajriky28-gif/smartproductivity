import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const articles = [
  {
    title: 'How Quick Add understands your tasks',
    href: '#',
  },
  {
    title: 'How to customize Focus Mode sessions',
    href: '#',
  },
  {
    title: 'Understanding weekly reports',
    href: '#',
  },
  {
    title: 'Editing tasks with hold gestures',
    href: '#',
  },
];

export function PopularArticlesSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
            Popular articles
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto">
          <FadeIn delay={200}>
            <Card className="bg-muted/50">
              <ul className="divide-y divide-border">
                {articles.map((article) => (
                  <li key={article.title}>
                    <Link
                      href={article.href}
                      className="block p-6 hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg text-foreground">
                          {article.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-muted-foreground transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
