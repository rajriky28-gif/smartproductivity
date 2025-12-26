import { FadeIn } from "@/components/fade-in";
import { posts } from "@/lib/blog-posts";
import Link from "next/link";

export function FeaturedEssaySection() {
  const featuredPost = posts[0];
  if (!featuredPost) return null;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <Link href={`/blog/${featuredPost.slug}`} className="group max-w-3xl mx-auto block">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Featured
            </p>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {featuredPost.title}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              {featuredPost.excerpt}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {featuredPost.readingTime} · {featuredPost.category}
            </p>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}