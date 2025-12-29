import { FadeIn } from "@/components/fade-in";
import Image from "next/image";

export function QuickAddSection() {
  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Quick Add
              </h3>
              <p className="mt-4 text-2xl text-muted-foreground">
                Describe what you need to do. Stride handles the rest.
              </p>
              <p className="mt-6 text-lg text-foreground/80">
                Write naturally — Stride intelligently understands time, date, title, subtasks, and priority without forcing you into forms.
              </p>
              <div className="mt-8 space-y-4 rounded-xl bg-muted/50 p-4">
                <p className="font-mono text-sm text-foreground/70">“Prepare presentation tomorrow at 10am, include slides and notes”</p>
                <p className="font-mono text-sm text-foreground/70">“Workout for 45 minutes tonight, high priority”</p>
              </div>
               <p className="mt-6 text-sm text-muted-foreground">Less friction. More clarity.</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-zinc-800">
                  <Image
                    src="/quickadd.jpeg"
                    alt="Stride Quick Add interface"
                    width={300}
                    height={600}
                    className="object-cover w-full h-full"
                  />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
