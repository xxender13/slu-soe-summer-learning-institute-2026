import { SpeakerCard } from "@/components/cards/speaker-card";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/typography/section-heading";
import { featuredSpeakers } from "@/data/speakers";

export function SpeakersSection() {
  return (
    <SectionContainer id="speakers" className="bg-background">
        <SectionHeading
          eyebrow="Featured Speakers"
          title="Faculty, practitioners, and community partners in conversation."
          description="Speaker content is centralized for easy updates as keynote, panel, and facilitator details are finalized."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
    </SectionContainer>
  );
}
