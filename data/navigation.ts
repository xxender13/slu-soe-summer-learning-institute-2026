import type { NavigationItem } from "@/types/site";

export const primaryNavigation: NavigationItem[] = [
  { label: "Overview", href: "#overview", description: "Institute goals and audience" },
  { label: "Speakers", href: "#speakers", description: "Featured keynote and panels" },
  { label: "Agenda", href: "#agenda", description: "Multi-day program highlights" },
  { label: "Why Attend", href: "#why-attend", description: "Professional learning outcomes" },
  { label: "Partners", href: "#partners", description: "University and community partners" },
  { label: "FAQ", href: "#faq", description: "Common registration and event questions" }
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Registration", href: "#registration" },
  { label: "Contact", href: "mailto: oscp@slu.edu" }
];
