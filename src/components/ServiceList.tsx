import { Clock } from "lucide-react";
import { formatDuration, lowestPrice, type ServiceGroup } from "../data/services";

/**
 * Lists services. Prices and durations come only from src/data/services.ts,
 * which mirrors Fresha. Missing values are shown as "on Fresha", never guessed.
 */
export default function ServiceList({ groups, compact = false }: { groups: ServiceGroup[]; compact?: boolean }) {
  if (compact) {
    return (
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {groups.map((g) => (
          <li key={g.id} className="flex items-baseline justify-between gap-6 py-6">
            <h3 className="text-2xl sm:text-3xl">{g.name}</h3>
            <span className="shrink-0 font-serif text-lg text-muted">{lowestPrice(g) ?? "on Fresha"}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-16 sm:space-y-20">
      {groups.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-28 grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">{g.name}</h2>
            <p className="mt-3 leading-relaxed text-muted">{g.description}</p>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {g.items.map((item) => (
              <li key={item.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <h3 className="font-sans text-base font-medium tracking-normal">{item.name}</h3>
                  {item.note && <p className="mt-1 text-sm text-muted">{item.note}</p>}
                </div>
                <div className="flex shrink-0 items-center gap-5 text-sm text-muted sm:flex-col sm:items-end sm:gap-1">
                  <span className="font-serif text-xl text-ink">{item.price ?? "Price on Fresha"}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.duration ? formatDuration(item.duration) : "Duration on Fresha"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
