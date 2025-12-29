
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
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
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "top-4 w-[calc(100%-2rem)] md:w-auto rounded-full border border-border/50 bg-background/80 shadow-md backdrop-blur-lg"
          : "top-0 w-full"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16 px-4 md:px-6" : "h-24 px-4"
        )}
      >
        <Link
          href="/"
          className={cn("flex items-center gap-2 text-lg font-bold text-foreground transition-all duration-300")}
        >
          <Image
            src="/smartproductivitylogo.png"
            alt="Smart Productivity Logo"
            width={scrolled ? 40 : 60}
            height={scrolled ? 40 : 60}
            className={cn("transition-all duration-300 md:hidden", scrolled && "md:block")}
          />
           <Image
            src="/smartproductivitylogo.png"
            alt="Smart Productivity Logo"
            width={60}
            height={60}
            className={cn("transition-all duration-300 hidden md:block", scrolled && "!hidden")}
          />
          <span
            className={cn(
              "transition-all duration-300",
               scrolled ? "text-base md:hidden" : "text-xl md:inline",
              "inline" 
            )}
          >
            Smart Productivity
          </span>
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
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-y-8 pt-12">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/smartproductivitylogo.png"
                    alt="Smart Productivity Logo"
                    width={40}
                    height={40}
                  />
                  <span className="font-bold text-lg">Smart Productivity</span>
                </Link>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
