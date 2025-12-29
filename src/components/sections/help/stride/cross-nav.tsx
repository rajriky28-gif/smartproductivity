import { FadeIn } from '@/components/fade-in';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const links = [
    { href: "/help", label: "← Back to Help Centre" },
    { href: "/products/stride", label: "View Product Page →" },
    { href: "/feedback", label: "Give Feedback →" },
];

export function CrossNavSection() {
    return (
        <section className="bg-muted py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        {links.map(link => (
                            <Button asChild variant="link" key={link.href} className="text-foreground text-base">
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
