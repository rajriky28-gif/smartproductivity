import { FadeIn } from "@/components/fade-in";
import Image from "next/image";

export function OurFirstStepSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Starting small
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our first product,{" "}
            <span className="text-foreground font-medium">Smart Tasks</span>, is
            a simple task system designed to support focus rather than control
            behavior. It represents our belief that less, when designed well, can
            be more powerful than complexity.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-16 relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[300px] w-[150px] sm:h-[600px] sm:w-[300px] shadow-xl">
            <div className="w-[74px] h-[9px] sm:w-[148px] sm:h-[18px] bg-gray-800 top-0 rounded-b-[0.5rem] sm:rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[23px] w-[1.5px] sm:h-[46px] sm:w-[3px] bg-gray-800 absolute -left-[8.5px] sm:-left-[17px] top-[62px] sm:top-[124px] rounded-l-lg"></div>
            <div className="h-[23px] w-[1.5px] sm:h-[46px] sm:w-[3px] bg-gray-800 absolute -left-[8.5px] sm:-left-[17px] top-[89px] sm:top-[178px] rounded-l-lg"></div>
            <div className="h-[32px] w-[1.5px] sm:h-[64px] sm:w-[3px] bg-gray-800 absolute -right-[8.5px] sm:-right-[17px] top-[71px] sm:top-[142px] rounded-r-lg"></div>
            <div className="rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-zinc-800">
                <div className="w-full h-full flex items-center justify-center bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 sm:w-16 sm:h-16 w-8 h-8"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
