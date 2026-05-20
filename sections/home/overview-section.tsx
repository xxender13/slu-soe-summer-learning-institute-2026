import { InstitutionalCard } from "@/components/cards/institutional-card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { overviewCards } from "@/data/site";

export function OverviewSection() {
  return (
    <SectionContainer id="overview" className="bg-muted" spacing="sm">
        <SectionHeading
          eyebrow="Event Overview"
          title="A university-level professional learning experience for educators and partners."
          description="The institute brings together SLU faculty, regional school teams, and community organizations for learning that is reflective, practical, and grounded in mission."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {overviewCards.map((card) => (
            <InstitutionalCard key={card.title} {...card} />
          ))}
        </div>
    </SectionContainer>
  );
}
