import type { GeneratedSpeaker } from "@/types/speaker.types";

export type EventSpeaker = GeneratedSpeaker & {
  image: string;
  sessionDescription: string;
  tags: string[];
  mission: string;
  expertise: string[];
  socialLinks: { label: string; href: string }[];
};

export type FocusArea = {
  title: string;
  description: string;
  icon: string;
  accent: "gold" | "teal" | "fountain" | "blue";
};

export type AgendaDay = {
  day: string;
  date: string;
  theme: string;
  sessions: {
    time: string;
    title: string;
    description: string;
    format: string;
  }[];
};
