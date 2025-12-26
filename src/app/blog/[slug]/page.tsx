import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { posts, type BlogPost } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/fade-in';
import { Separator } from '@/components/ui/separator';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <article className="py-32 sm:py-48">
          <div className="container mx-auto px-4">
            <FadeIn>
              <header className="max-w-3xl mx-auto text-center">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  {post.category}
                </p>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {post.title}
                </h1>
                <p className="mt-6 text-sm text-muted-foreground">
                  {post.readingTime}
                </p>
              </header>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-16 text-foreground/90">
                <p>{post.excerpt}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nonne merninisti licere mihi ista probare, quae sunt a te
                  dicta? Refert tamen, quo modo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod
                  equidem non reprehendo; Duo Reges: constructio interrete.
                  Quid, si etiam iucunda memoria est praeteritorum malorum? Nec
                  quidem, inquit, tollerem, si quid ad rem pertineret.
                </p>
                
                <p>
                  Non est igitur summum malum dolor. Tu autem inter
                  gravissimos philosophos, qui ista ipsa didicisti, etsi illum
                  probarem, quem sum appellaturus, tamen honestate summa, quam
                  metui nomen dignitatis.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="max-w-3xl mx-auto mt-16">
                <Separator />
                <p className="mt-8 text-sm text-muted-foreground">
                  Written by Smart Productivity
                </p>
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}