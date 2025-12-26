import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

const filters = [
  "All",
  "Focus",
  "Productivity",
  "Design",
  "Technology",
  "Principles",
];

export function FiltersSection() {
  return (
    <section className="bg-muted py-6">
      <div className="container mx-auto px-4">
        <FadeIn>
          <nav className="flex justify-center items-center gap-6 md:gap-8">
            {filters.map((filter, index) => (
              <Link
                key={filter}
                href="#"
                className={`group text-sm transition-colors ${
                  index === 0
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{filter}</span>
                <div
                  className={`mt-0.5 h-px w-full origin-center transition-transform duration-300 ${
                    index === 0 ? "scale-x-100 bg-foreground" : "scale-x-0 group-hover:scale-x-100 bg-foreground"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}