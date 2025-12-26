"use client";

import { FadeIn } from "@/components/fade-in";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductSelectorSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-xs mx-auto">
          <h2 className="text-center text-lg font-medium text-foreground mb-4">
            Select a product
          </h2>
          <Select defaultValue="stride">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stride">Stride</SelectItem>
            </SelectContent>
          </Select>
        </FadeIn>
      </div>
    </section>
  );
}
