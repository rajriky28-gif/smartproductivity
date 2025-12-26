import Link from "next/link";
import { Twitter, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const productLinks = [
    { href: "/products/stride", label: "Stride" },
    { href: "/products", label: "Product Overview" },
    { href: "/#", label: "Roadmap" },
    { href: "/blog", label: "Updates" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/philosophy",label: "Philosophy" },
    { href: "/vision", label: "Vision" },
    { href: "/careers", label: "Careers" },
  ];

  const resourceLinks = [
    { href: "/blog", label: "Blog / Insights" },
    { href: "/#principles", label: "Productivity Principles" },
    { href: "#", label: "Help Center" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground">
              Smart Productivity
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building calm, intentional tools for focused work.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Smart Productivity. All rights reserved.</p>
            <div className="flex gap-4 mt-2 justify-center sm:justify-start">
              <Link
                href="#"
                className="hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
