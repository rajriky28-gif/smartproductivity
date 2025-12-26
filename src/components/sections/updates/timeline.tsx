import { FadeIn } from "@/components/fade-in";
import { updates } from "@/lib/updates";
import { Separator } from "@/components/ui/separator";

export function UpdateTimelineSection() {
  const pastUpdates = updates.slice(1);

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {pastUpdates.map((update, index) => (
            <FadeIn key={update.version} delay={index * 150}>
              <div>
                <p className="text-sm text-muted-foreground">
                  {update.version} — {update.date} · {update.product}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {update.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {update.description}
                </p>
                {update.changes.length > 0 && (
                  <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {update.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                )}
                {index < pastUpdates.length - 1 && <Separator className="mt-12" />}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
