import { FadeIn } from '@/components/fade-in';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

export function ProductSearchSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Stride help articles…"
                className="w-full h-14 pl-12 pr-4 text-lg rounded-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
