import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const articles = [
  {
    title: 'How Quick Add extracts task details',
    href: '#',
  },
  {
    title: 'Customizing focus sessions and breaks',
    href: '#',
  },
  {
    title: 'Using hold-to-edit scheduling',
    href: '#',
  },
  {
    title: 'Understanding weekly productivity reports',
    href: '#',
  },
  {
    title: 'Managing priorities effectively',
    href: '#',
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
            Help articles
          </h2>
        </FadeIn>
        <div className="max-w-2xl mx-auto">
          <FadeIn delay={200}>
            <Card className="bg-background">
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
