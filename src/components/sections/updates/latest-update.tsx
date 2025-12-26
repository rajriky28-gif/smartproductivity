import { FadeIn } from "@/components/fade-in";
import { updates } from "@/lib/updates";
import { Card } from "@/components/ui/card";

export function LatestUpdateSection() {
  const latestUpdate = updates[0];

  if (!latestUpdate) {
    return null;
  }

  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Latest Update
            </p>
            <Card className="mt-6 bg-background border-border p-8">
              <p className="text-sm text-muted-foreground">
                {latestUpdate.version} — {latestUpdate.date} · {latestUpdate.product}
              </p>
              <h2 className="mt-4 text-2xl font-bold text-foreground">
                {latestUpdate.title}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {latestUpdate.description}
              </p>
              {latestUpdate.changes.length > 0 && (
                <div className="mt-6">
                  <p className="font-medium text-foreground">What Changed</p>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                    {latestUpdate.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
