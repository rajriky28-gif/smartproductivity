import {
  GettingStartedArticle,
  QuickAddArticle,
  FocusModeArticle,
  PlanningSchedulingArticle,
  ReportsInsightsArticle,
  AccountDataArticle,
} from '@/components/help-articles/stride-articles';
import {
  Rocket,
  PlusCircle,
  Timer,
  ListTodo,
  BarChart,
  Database,
} from 'lucide-react';

export const helpArticles = [
  {
    slug: 'getting-started',
    icon: Rocket,
    title: 'Getting Started',
    description: 'Learn the basics, setup, first tasks, and login help.',
    content: GettingStartedArticle,
  },
  {
    slug: 'quick-add',
    icon: PlusCircle,
    title: 'Quick Add',
    description: 'How Stride understands your tasks',
    content: QuickAddArticle,
  },
  {
    slug: 'focus-mode',
    icon: Timer,
    title: 'Focus Mode',
    description: 'Sessions, breaks, customization',
    content: FocusModeArticle,
  },
  {
    slug: 'planning-scheduling',
    icon: ListTodo,
    title: 'Planning & Scheduling',
    description: 'Editing, rescheduling, priorities',
    content: PlanningSchedulingArticle,
  },
  {
    slug: 'reports-insights',
    icon: BarChart,
    title: 'Reports & Insights',
    description: 'Weekly summaries and trends',
    content: ReportsInsightsArticle,
  },
  {
    slug: 'account-data',
    icon: Database,
    title: 'Account & Data',
    description: 'Sync, backup, privacy',
    content: AccountDataArticle,
  },
];
