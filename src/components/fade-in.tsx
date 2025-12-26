"use client";

import { useRef, useEffect, useState, type ReactNode, type FC } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  yOffset?: number;
  xOffset?: number;
}

export const FadeIn: FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  direction = "up",
  yOffset = 24,
  xOffset = 24,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${yOffset}px)`;
      case "down":
        return `translateY(-${yOffset}px)`;
      case "left":
        return `translateX(${xOffset}px)`;
      case "right":
        return `translateX(-${xOffset}px)`;
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "none" : getTransform(),
      }}
    >
      {children}
    </div>
  );
};
