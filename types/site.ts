export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export type ProgramPillar = {
  title: string;
  description: string;
};

export type FeatureCard = ProgramPillar & {
  eyebrow?: string;
};

export type AgendaItem = {
  time: string;
  title: string;
  description: string;
};

export type Speaker = {
  name: string;
  role: string;
  focus: string;
  organization?: string;
  topic?: string;
  image?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type NetworkingContact = {
  name: string;
  role: string;
  organization: string;
  email: string;
  area: string;
};

export type PartnerOrganization = {
  name: string;
  category: "University" | "School Partner" | "Community Partner" | "Sponsor";
  description: string;
};

export type FlyerAsset = {
  title: string;
  format: "PDF" | "PNG" | "JPG";
  href: string;
  description: string;
};

export type EventStat = {
  value: string;
  label: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type RegistrationLink = {
  label: string;
  href: string;
  description: string;
  isPrimary?: boolean;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
