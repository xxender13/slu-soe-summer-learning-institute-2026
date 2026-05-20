import type { AgendaItem } from "@/types/site";

export function AgendaCard({ item }: { item: AgendaItem }) {
  return (
    <article className="grid gap-4 rounded-lg border bg-card p-6 shadow-card md:grid-cols-[11rem_1fr] md:p-8">
      <p className="font-label text-eyebrow font-semibold uppercase text-primary">{item.time}</p>
      <div>
        <h3 className="font-heading text-2xl font-bold text-card-foreground">{item.title}</h3>
        <p className="mt-3 font-body text-base leading-7 text-muted-foreground">{item.description}</p>
      </div>
    </article>
  );
}
