
"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TermsContent } from "./terms-content";

const products = [
  {
    id: "stride",
    name: "Stride",
    description: "Task planning & focus app",
  },
  {
    id: "platform",
    name: "Smart Productivity (Platform)",
    description: "Website & ecosystem",
  },
];

export function ProductSelectorSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get("product") || "stride";

  const handleProductSelect = (productId: string) => {
    router.push(`/terms?product=${productId}`, { scroll: false });
  };

  return (
    <>
      <section className="bg-muted py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Choose a product
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 150}>
                <Card
                  onClick={() => handleProductSelect(product.id)}
                  className={cn(
                    "bg-background p-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1",
                    selectedProduct === product.id
                      ? "border-primary/50 ring-2 ring-primary/30"
                      : "border-border hover:border-foreground/30"
                  )}
                >
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && <TermsContent product={selectedProduct} />}
    </>
  );
}
