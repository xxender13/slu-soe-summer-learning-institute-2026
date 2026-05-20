export const sluBrand = {
  name: "Saint Louis University School of Education",
  instituteName: "Summer Learning Institute",
  year: "2025",
  tagline: "Professional learning for educators, schools, and community partners.",
  contactEmail: "soe-events@slu.edu",
  colors: {
    primary: {
      sluBlue: "#003DA5",
      collegeChurchGray: "#C8C9C7",
      irisWhite: "#FFFFFF"
    },
    secondary: {
      fountainBlue: "#53C3EE",
      grandBlue: "#00244D",
      billikenBronze: "#795D3E",
      westPineBeige: "#E3DECB",
      gatewayGold: "#FFC72C",
      rooftopTeal: "#8FD6BD",
      oriflammeOrange: "#ED8B00",
      valleVerde: "#8EE764"
    }
  },
  logos: {
    primaryBlue: "/branding/logos/primary/slu-soe-primary-blue.svg",
    primaryWhite: "/branding/logos/light/slu-soe-primary-white.svg",
    horizontalBlue: "/branding/logos/horizontal/slu-soe-horizontal-blue.svg",
    horizontalWhite: "/branding/logos/light/slu-soe-horizontal-white.svg"
  },
  logoRules: [
    "Use SVG logos as the primary web format.",
    "Use blue logos on white or light neutral backgrounds.",
    "Use white logos on SLU Blue or Grand Blue backgrounds.",
    "Maintain aspect ratio and clear space.",
    "Do not recolor, crop, stretch, shadow, outline, or add effects to official marks."
  ]
} as const;
