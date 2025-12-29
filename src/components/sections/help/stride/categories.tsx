import { FadeIn } from '@/components/fade-in';
import { Card } from '@/components/ui/card';
import {
  Rocket,
  ListTodo,
  Timer,
  BarChart,
  GripVertical,
  Database,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'Learn the basics of Stride',
    href: '#',
  },
  {
    icon: ListTodo,
    title: 'Quick Add',
    description: 'How Stride understands your tasks',
    href: '#',
  },
  {
    icon: Timer,
    title: 'Focus Mode',
    description: 'Sessions, breaks, customization',
    href: '#',
  },
  {
    icon: BarChart,
    title: 'Planning & Scheduling',
    description: 'Editing, rescheduling, priorities',
    href: '#',
  },
  {
    icon: GripVertical,
    title: 'Reports & Insights',
    description: 'Weekly summaries and trends',
    href: '#',
  },
  {
    icon: Database,
    title: 'Account & Data',
    description: 'Sync, backup, privacy',
    href: '#',
  },
];

export function CategoriesSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 100}>
              <Link href={category.href}>
                <Card className="p-6 bg-muted h-full transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1">
                  <category.icon className="size-8 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {category.description}
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
