import type { Speaker } from "@/types/site";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="group rounded-lg border bg-card p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="font-heading text-xl font-bold" aria-hidden="true">
          {speaker.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <p className="mt-7 font-label text-eyebrow font-semibold uppercase text-primary">{speaker.role}</p>
      <h3 className="mt-3 font-heading text-2xl font-bold text-card-foreground">{speaker.name}</h3>
      {speaker.organization ? (
        <p className="mt-2 font-heading text-base font-semibold text-muted-foreground">{speaker.organization}</p>
      ) : null}
      {speaker.topic ? <p className="mt-5 font-heading text-lg font-bold text-card-foreground">{speaker.topic}</p> : null}
      <p className="mt-3 font-body text-base leading-7 text-muted-foreground">{speaker.focus}</p>
    </article>
  );
}
