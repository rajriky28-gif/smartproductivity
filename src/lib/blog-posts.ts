export type BlogPost = {
  title: string;
  excerpt: string;
  readingTime: string;
  category: string;
  slug: string;
};

export const posts: BlogPost[] = [
  {
    title: "Productivity is not about doing more",
    excerpt: "Most systems push people toward constant activity. But progress often comes from choosing less, not more.",
    readingTime: "6 min read",
    category: "Philosophy",
    slug: "productivity-is-not-about-doing-more",
  },
  {
    title: "The cost of constant context switching",
    excerpt: "Exploring the cognitive load of juggling tasks and how to reclaim your focus.",
    readingTime: "5 min read",
    category: "Focus",
    slug: "cost-of-context-switching",
  },
  {
    title: "Why calm systems outperform aggressive ones",
    excerpt: "A deep dive into why sustainable productivity is more effective than hustle culture.",
    readingTime: "7 min read",
    category: "Design",
    slug: "calm-systems-outperform-aggressive-ones",
  },
  {
    title: "Designing tools that respect attention",
    excerpt: "Our approach to building software that serves users, not engagement metrics.",
    readingTime: "4 min read",
    category: "Technology",
    slug: "designing-tools-that-respect-attention",
  },
  {
    title: "The myth of hustle productivity",
    excerpt: "Breaking down the flawed belief that being busy equals being productive.",
    readingTime: "5 min read",
    category: "Productivity",
    slug: "myth-of-hustle-productivity",
  },
  {
    title: "Slow improvement beats fast growth",
    excerpt: "Why we prioritize deliberate, thoughtful progress over rapid, unsustainable expansion.",
    readingTime: "4 min read",
    category: "Principles",
    slug: "slow-improvement-beats-fast-growth",
  },
];