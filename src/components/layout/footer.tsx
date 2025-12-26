import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">
              Smart Productivity
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Smart Productivity. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="#product"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </Link>
            <Link
              href="#vision"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
