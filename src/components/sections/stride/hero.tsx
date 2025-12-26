import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const appImage = PlaceHolderImages.find((p) => p.id === "app-screenshot-abstract");

export function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-background h-[90vh] min-h-[700px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Stride
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A calmer way to plan, focus, and move forward.
              </p>
              <p className="mt-6 max-w-lg text-lg text-foreground/80">
                Stride is a thoughtfully designed task system that turns
                intention into action — without clutter, pressure, or noise.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="#">Get early access →</Link>
                </Button>
                <Button asChild variant="link" className="text-foreground text-base">
                  <Link href="#how-it-works">See how it works →</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                {appImage && (
                  <Image
                    src={appImage.imageUrl}
                    alt={appImage.description}
                    data-ai-hint={appImage.imageHint}
                    width={300}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
