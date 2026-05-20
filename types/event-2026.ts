export type EventSpeaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string;
  presentationExperience: string;
  image: string;
  sessionTitle: string;
  sessionDescription: string;
  extendedDescription: string;
  takeaways: string[];
  focusAreas: string[];
  audience: string[];
  experienceLevel: string;
  sessionFormat: string;
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
