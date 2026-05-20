import { AgendaCard } from "@/components/cards/agenda-card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { agendaHighlights } from "@/data/agenda";

export function AgendaSection() {
  return (
    <SectionContainer id="agenda" className="bg-slu-subtle">
        <SectionHeading
          eyebrow="Agenda Highlights"
          title="A calm, structured day-of experience."
          description="The agenda is organized around keynote learning, applied practice, networking, and implementation planning."
        />
        <div className="mt-12 grid gap-5">
          {agendaHighlights.map((item) => (
            <AgendaCard key={item.time} item={item} />
          ))}
        </div>
    </SectionContainer>
  );
}
