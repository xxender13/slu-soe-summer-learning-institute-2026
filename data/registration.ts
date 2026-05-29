import type { RegistrationLink } from "@/types/site";

export const registrationLinks: RegistrationLink[] = [
  {
    label: "Register Interest",
    href: "mailto: oscp@slu.edu?subject=Summer%20Learning%20Institute%202025",
    description: "Contact the institute team to receive registration updates and planning details.",
    isPrimary: true
  },
  {
    label: "Request Accessibility Support",
    href: "mailto: oscp@slu.edu?subject=Accessibility%20Support%20Request",
    description: "Share accessibility needs early so event staff can support full participation."
  }
];
