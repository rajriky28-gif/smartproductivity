import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const appImage = PlaceHolderImages.find((p) => p.id === "app-screenshot-abstract");

const features = [
  "Clean task organization",
  "Thoughtful daily planning",
  "Zero clutter",
];

export function ProductSection() {
  if (!appImage) return null;

  return (
    <section id="product" className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our first product
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Smart Tasks is a simple task system built to support focus, not
              distract from it.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-foreground" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="link"
              className="mt-8 text-foreground p-0 h-auto"
            >
              <Link href="#">
                Learn more about Smart Tasks
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </Button>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                <Image
                  src={appImage.imageUrl}
                  alt={appImage.description}
                  data-ai-hint={appImage.imageHint}
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
