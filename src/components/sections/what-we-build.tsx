import { FadeIn } from "@/components/fade-in";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Brain, CalendarCheck, ZapOff } from "lucide-react";

const tools = [
  {
    icon: CalendarCheck,
    title: "Intentional Planning",
    description: "Structure your day without overwhelming it.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Reduce decision fatigue with intelligent systems.",
  },
  {
    icon: ZapOff,
    title: "Sustainable Focus",
    description: "Designed to support long-term consistency, not burnout.",
  },
];

export function WhatWeBuildSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tools designed for deep work
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <FadeIn key={tool.title} delay={index * 150}>
              <Card className="text-left bg-background border border-primary/10 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <tool.icon className="size-8 text-muted-foreground" />
                    <CardTitle>{tool.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-4 text-base text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
