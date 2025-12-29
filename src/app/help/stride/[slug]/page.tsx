import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { helpArticles } from '@/lib/help-articles';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/fade-in';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return helpArticles.map((article) => ({
    slug: article.slug,
  }));
}

function getArticle(slug: string) {
  return helpArticles.find((article) => article.slug === slug);
}

export default function HelpArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const ArticleContent = article.content;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <article className="py-32 sm:py-48">
          <div className="container mx-auto px-4">
            <FadeIn>
              <header className="max-w-3xl mx-auto text-center">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  Stride Help Article
                </p>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {article.title}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  {article.description}
                </p>
              </header>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-16 text-foreground/90">
                <ArticleContent />
              </div>
            </FadeIn>
            <FadeIn delay={400}>
                <div className="max-w-3xl mx-auto mt-16 text-center">
                    <Separator />
                    <p className="mt-8 text-sm text-muted-foreground">
                    Still have questions?
                    </p>
                    <Button asChild variant="link" className="mt-2 text-foreground">
                        <Link href="/help/stride">← Back to Stride Help Center</Link>
                    </Button>
                </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
