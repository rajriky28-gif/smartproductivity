
"use client";

import { FadeIn } from "@/components/fade-in";
import Image from "next/image";
import { StridePolicy } from "@/components/privacy-policies/stride-policy";
import { PlatformPolicy } from "@/components/privacy-policies/platform-policy";
import { cn } from "@/lib/utils";

const productDetails: { [key: string]: any } = {
  stride: {
    logo: "/stridelogo.png",
    name: "Stride",
    description: "Task planning & focus app",
    lastUpdated: "29 December 2025",
    content: <StridePolicy />,
  },
  platform: {
    logo: "/smartproductivitylogo.png",
    name: "Smart Productivity (Platform)",
    description: "Website & ecosystem",
    lastUpdated: "29 December 2025",
    content: <PlatformPolicy />,
  },
};

export function PolicyContent({ product }: { product: string }) {
  const details = productDetails[product];

  if (!details) {
    return null;
  }

  return (
    <>
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex items-center gap-4">
                <Image
                  src={details.logo}
                  alt={`${details.name} Logo`}
                  width={64}
                  height={64}
                  className={cn(product === 'stride' && "border rounded-lg")}
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {details.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {details.description}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground self-start md:self-center">
                Last updated: {details.lastUpdated}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="bg-muted py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90">
              {details.content}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
