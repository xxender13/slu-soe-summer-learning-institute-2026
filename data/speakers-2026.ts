import generatedSpeakers from "@/data/generated/speakers.json";
import type { EventSpeaker } from "@/types/event-2026";
import type { GeneratedSpeaker } from "@/types/speaker.types";

function excerpt(value: string, maxLength = 180) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength).trim()}...`;
}

function toEventSpeaker(speaker: GeneratedSpeaker): EventSpeaker {
  return {
    ...speaker,
    image: speaker.headshot,
    sessionDescription: speaker.shortDescription,
    tags: [...speaker.focusAreas, ...speaker.audience].slice(0, 3),
    mission: excerpt(speaker.extendedDescription || speaker.shortDescription || speaker.bio || ""),
    expertise: speaker.focusAreas,
    socialLinks: []
  };
}

export const eventSpeakers2026: EventSpeaker[] = (generatedSpeakers as GeneratedSpeaker[]).map(toEventSpeaker);
