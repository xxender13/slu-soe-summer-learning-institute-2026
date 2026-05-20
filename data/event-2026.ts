import type { AgendaDay, FocusArea } from "@/types/event-2026";

export const event2026 = {
  name: "3rd Annual Summer Learning Institute",
  shortName: "Summer Learning Institute 2026",
  dates: "July 22-24, 2026",
  startsAt: "2026-07-22T08:30:00-05:00",
  location: "Saint Louis University, St. Louis, Missouri",
  hostedBy: ["School of Education", "Office of School and Community Partnerships"],
  theme: "Justice-Centered Education for a Changing World",
  recapVideoLabel: "School of Education Summer Learning Institute 2025 - YouTube",
  recapVideoUrl: "https://youtu.be/ItNst1rxuTU?si=_DD4PhYzVIGoWk1C",
  recapVideoEmbedUrl: "https://www.youtube-nocookie.com/embed/ItNst1rxuTU",
  calendlyUrl: "https://calendly.com/",
  zoomUrl: "https://zoom.us/",
  contactEmail: "soe-events@slu.edu",
  registrationUrl: "mailto:soe-events@slu.edu?subject=Summer%20Learning%20Institute%202026%20Updates"
} as const;

export const eventNavigation = [
  { label: "Why", href: "#why" },
  { label: "Highlights", href: "#highlights" },
  { label: "Focus", href: "#focus" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Register", href: "#registration" }
] as const;

export const focusAreas: FocusArea[] = [
  {
    title: "Educational Equity",
    description: "Move from equity language to daily practices that expand belonging, access, and opportunity.",
    icon: "Scale",
    accent: "gold"
  },
  {
    title: "Instructional Leadership",
    description: "Strengthen coaching, team routines, and decision-making systems that improve learning conditions.",
    icon: "Compass",
    accent: "fountain"
  },
  {
    title: "Grant Writing",
    description: "Build practical capacity for resource development, proposal strategy, and sustainable program funding.",
    icon: "PenTool",
    accent: "teal"
  },
  {
    title: "Emerging Leadership",
    description: "Support educators ready to lead through collaboration, reflection, influence, and community partnership.",
    icon: "Sparkles",
    accent: "blue"
  }
];

export const agendaDays: AgendaDay[] = [
  {
    day: "Day 1",
    date: "Wednesday, July 22",
    theme: "Shared Purpose",
    sessions: [
      {
        time: "8:30 AM",
        title: "Welcome: Justice-Centered Education for a Changing World",
        description: "A cinematic opening that grounds the institute in SLU mission, equity, community, and educator leadership.",
        format: "Mainstage"
      },
      {
        time: "10:15 AM",
        title: "Keynote and Reflection Labs",
        description: "Participants connect keynote ideas to school, district, nonprofit, and classroom realities.",
        format: "Keynote + Lab"
      },
      {
        time: "2:00 PM",
        title: "Community Collaboration Studio",
        description: "Cross-role teams identify local challenges and begin mapping actionable next steps.",
        format: "Studio"
      }
    ]
  },
  {
    day: "Day 2",
    date: "Thursday, July 23",
    theme: "Practice and Resources",
    sessions: [
      {
        time: "9:00 AM",
        title: "Professional Learning Intensives",
        description: "Interactive workshops across equity, leadership, grant writing, resource development, and belonging.",
        format: "Workshop"
      },
      {
        time: "12:30 PM",
        title: "Networking Lunch: Educator Connection Tables",
        description: "Structured networking for educators, school leaders, community partners, and university collaborators.",
        format: "Networking"
      },
      {
        time: "3:00 PM",
        title: "Resource Development Clinics",
        description: "Small-group support for turning ideas into fundable, sustainable, partnership-ready initiatives.",
        format: "Clinic"
      }
    ]
  },
  {
    day: "Day 3",
    date: "Friday, July 24",
    theme: "Leadership in Motion",
    sessions: [
      {
        time: "9:00 AM",
        title: "Emerging Leadership Roundtables",
        description: "Peer-led conversations on influence, courage, culture, and leadership in changing education systems.",
        format: "Roundtable"
      },
      {
        time: "11:00 AM",
        title: "Implementation Sprint",
        description: "Participants leave with a 30-day plan, partner map, and personal commitment for continued action.",
        format: "Sprint"
      },
      {
        time: "1:00 PM",
        title: "Closing Convocation",
        description: "A final gathering celebrating educator empowerment, community wisdom, and next steps.",
        format: "Closing"
      }
    ]
  }
];

export const eventHighlights = [
  { label: "Dates", value: "July 22-24, 2026", detail: "Three days of professional learning" },
  { label: "Location", value: "Saint Louis University", detail: "St. Louis, Missouri" },
  { label: "Format", value: "Workshops + Mainstage", detail: "Interactive, reflective, and practical" },
  { label: "Attendance", value: "Free", detail: "Designed for access and community participation" }
];

export const communityOutcomes = [
  "A stronger network of educators, leaders, and community partners",
  "Practical strategies for justice-centered classrooms and organizations",
  "Grant and resource-development tools for sustainable impact",
  "Leadership routines that support belonging, trust, and collaboration"
];

export const eventFaqs = [
  {
    question: "Who should attend?",
    answer:
      "Classroom teachers, instructional coaches, school and district leaders, higher education partners, nonprofit teams, grant writers, and community collaborators invested in educational equity."
  },
  {
    question: "Is the institute really free?",
    answer:
      "The event is being positioned as a free professional learning opportunity. Final registration details can be added when the registration form is opened."
  },
  {
    question: "Where will sessions take place?",
    answer:
      "Sessions are planned for Saint Louis University in St. Louis, Missouri. Specific campus building and room details can be added as logistics are finalized."
  }
];
