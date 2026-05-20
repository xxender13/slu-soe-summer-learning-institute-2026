import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { partnerOrganizations } from "@/data/partners";

export function PartnersSection() {
  return (
    <SectionContainer id="partners" className="bg-background">
        <SectionHeading
          eyebrow="Partners"
          title="A platform for university and community collaboration."
          description="Partner placements use quiet, formal presentation so recognition feels institutional rather than promotional."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerOrganizations.map((partner) => (
            <div key={partner.name} className="rounded-lg border bg-card px-5 py-8 text-center shadow-card">
              <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary">{partner.category}</p>
              <h3 className="mt-4 font-heading text-xl font-bold text-card-foreground">{partner.name}</h3>
              <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>
    </SectionContainer>
  );
}
