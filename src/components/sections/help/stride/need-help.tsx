import { FadeIn } from '@/components/fade-in';
import { HelpRequestForm } from '@/components/help-request-form';
import { Separator } from '@/components/ui/separator';

export function NeedHelpSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <Separator />
        <div className="max-w-2xl mx-auto mt-24 sm:mt-32">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Need more help?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                If you couldn’t find an answer, reach out — we’ll help.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200} className="mt-12">
            <HelpRequestForm product="Stride" />
          </FadeIn>
           <FadeIn delay={200}>
             <p className="mt-8 text-center text-sm text-muted-foreground">
              We read every request carefully. Response times may vary, but every message matters.
            </p>
           </FadeIn>
        </div>
      </div>
    </section>
  );
}
