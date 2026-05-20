import type { EventStat } from "@/types/site";

export function StatCard({ stat }: { stat: EventStat }) {
  return (
    <article className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-primary-foreground backdrop-blur">
      <p className="font-heading text-5xl font-bold">{stat.value}</p>
      <h3 className="mt-3 font-label text-eyebrow font-semibold uppercase text-accent">{stat.label}</h3>
      <p className="mt-4 font-body text-base leading-7 text-primary-foreground/80">{stat.description}</p>
    </article>
  );
}
