import { InstitutionalCard } from "@/components/cards/institutional-card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { programPillars } from "@/data/site";

export function PillarsSection() {
  return (
    <SectionContainer id="why-attend" className="bg-background">
        <SectionHeading
          eyebrow="Why Attend"
          title="Professional development that respects educators' expertise."
          description="The institute is designed for participants who want credible content, thoughtful facilitation, and time to translate learning into action."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {programPillars.map((pillar) => (
            <InstitutionalCard key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </div>
    </SectionContainer>
  );
}
