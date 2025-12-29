"use client";

import { FadeIn } from "@/components/fade-in";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const reportItems = [
  "Time spent in focus",
  "Tasks completed",
  "Planning consistency",
  "Trends over the week",
];

const chartData = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 6 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 7 },
  { day: "Fri", tasks: 4 },
  { day: "Sat", tasks: 2 },
  { day: "Sun", tasks: 1 },
];

const chartConfig = {
  tasks: {
    label: "Tasks",
    color: "hsl(var(--foreground))",
  },
};

export function WeeklyReportsSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Weekly reports that inform, not judge
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Understand how you spend your time without streaks, guilt, or
                artificial scores.
              </p>
              <div className="mt-8 space-y-4">
                {reportItems.map((item) => (
                  <div
                    key={item}
                    className="p-4 bg-muted/50 rounded-lg text-foreground/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Insight over motivation tricks.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-muted dark:bg-zinc-800 p-8 flex flex-col justify-center">
                <p className="text-center font-bold text-foreground/80 mb-4">
                  Weekly Completion
                </p>
                <ChartContainer
                  config={chartConfig}
                  className="w-full h-[200px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                    >
                      <XAxis
                        dataKey="day"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}`}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Bar dataKey="tasks" fill="hsl(var(--primary))" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                 <p className="text-center text-xs text-muted-foreground mt-4">
                  You're most productive on Thursdays.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}