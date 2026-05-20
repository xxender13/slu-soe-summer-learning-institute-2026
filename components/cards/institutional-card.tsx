import { cn } from "@/lib/utils";

type InstitutionalCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function InstitutionalCard({ eyebrow, title, description, className }: InstitutionalCardProps) {
  return (
    <article className={cn("rounded-lg border bg-card p-7 shadow-soft", className)}>
      {eyebrow ? (
        <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-3 font-heading text-2xl font-bold text-card-foreground">{title}</h3>
      <p className="mt-4 font-body text-base leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}
