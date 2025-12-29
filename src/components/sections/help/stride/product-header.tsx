import { FadeIn } from '@/components/fade-in';
import Image from 'next/image';

export function ProductHeaderSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <Image
                src="/smartproductivitylogo.png"
                alt="Stride Logo"
                width={64}
                height={64}
                className="mx-auto md:mx-0"
              />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Stride
              </h1>
              <p className="text-lg text-muted-foreground">
                A calm system for tasks, focus, and meaningful progress.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200} className="hidden md:block">
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
