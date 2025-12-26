import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";
import { posts } from "@/lib/blog-posts";
import Link from "next/link";

export function ArticleListSection() {
  const otherPosts = posts.slice(1);
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {otherPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 150}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card className="bg-background border-border transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {post.readingTime} · {post.category}
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