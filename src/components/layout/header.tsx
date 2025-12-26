"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/stride", label: "Stride" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/vision", label: "Vision" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300",
        scrolled
          ? "h-14 bg-background/80 backdrop-blur-sm"
          : "h-16 bg-background"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-foreground">
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
              <div className="mt-0.5 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
