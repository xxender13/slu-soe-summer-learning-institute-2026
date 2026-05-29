import type { FooterGroup } from "@/types/site";

export const footerGroups: FooterGroup[] = [
  {
    title: "Institute",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Speakers", href: "#speakers" },
      { label: "Agenda", href: "#agenda" },
      { label: "Registration", href: "#registration" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Partners", href: "#partners" },
      { label: "FAQ", href: "#faq" },
      { label: "Email the Team", href: "mailto:oscp@slu.edu" }
    ]
  }
];

export const footerContent = {
  address: "Saint Louis University School of Education, St. Louis, Missouri",
  description:
    "A mission-driven professional learning experience connecting educators, university faculty, and community partners.",
  copyright: "Saint Louis University School of Education"
};
