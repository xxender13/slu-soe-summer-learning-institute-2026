import type { FeatureCard, ProgramPillar } from "@/types/site";

export { agendaHighlights as agendaItems } from "@/data/agenda";
export { faqs } from "@/data/faqs";
export { featuredSpeakers as speakers } from "@/data/speakers";
export { primaryNavigation as siteNavigation } from "@/data/navigation";

export const programPillars: ProgramPillar[] = [
  {
    title: "Practice-Centered Learning",
    description: "Sessions organized around decisions educators, school leaders, and community partners make in real contexts."
  },
  {
    title: "Community Partnership",
    description: "A convening model that honors schools, families, agencies, and university expertise as shared contributors."
  },
  {
    title: "Accessible Participation",
    description: "Clear content, inclusive interaction patterns, and durable governance for a university-level digital experience."
  }
];

export const overviewCards: FeatureCard[] = [
  {
    eyebrow: "For educators",
    title: "Professional learning with purpose",
    description: "A focused institute experience for teachers, leaders, counselors, and partners committed to student success."
  },
  {
    eyebrow: "For communities",
    title: "Built around relationships",
    description: "Programming designed to connect university scholarship with local school and community priorities."
  },
  {
    eyebrow: "For impact",
    title: "Designed for implementation",
    description: "Every page pattern supports clear next steps, accessible information, and responsible institutional stewardship."
  }
];
