"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/vision", label: "Vision" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "w-auto rounded-full border border-border/50 bg-background/80 shadow-md backdrop-blur-lg"
          : "w-full"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 px-6" : "h-20 px-4"
        )}
      >
        <Link
          href="/"
          className={cn(
            "text-lg font-bold text-foreground transition-all duration-300",
            scrolled ? "text-base" : "text-lg"
          )}
        >
          Smart Productivity
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group text-sm text-muted-foreground transition-colors"
            >
              <span className="group-hover:text-foreground">{link.label}</span>
              <div
                className={cn(
                  "mt-0.5 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100",
                  scrolled && "bg-muted-foreground"
                )}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
