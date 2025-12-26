import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Careers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              This page is under development. Please check back later.
            </p>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
