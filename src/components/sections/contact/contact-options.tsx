import { FadeIn } from "@/components/fade-in";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ContactFormSection } from "./contact-form";

const socialLinks = [
  { icon: Twitter, href: "#", name: "X / Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Github, href: "#", name: "GitHub" },
];

export function ContactOptionsSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:hello@smartproductivity.com"
                  className="mt-2 block text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@smartproductivity.com
                </a>
                <p className="mt-2 text-sm text-muted-foreground/80">
                  For general inquiries, partnerships, and press.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Product Feedback
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  For product ideas, bugs, or suggestions, please use our
                  feedback system.
                </p>
                <Link
                  href="/feedback"
                  className="mt-2 inline-block text-foreground hover:underline underline-offset-4"
                >
                  Go to Feedback →
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Social
                </h3>
                <div className="mt-4 flex gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      aria-label={link.name}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <link.icon className="size-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          <ContactFormSection />
        </div>
      </div>
    </section>
  );
}
