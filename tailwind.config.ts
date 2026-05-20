import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        slu: {
          blue: "var(--slu-blue)",
          "college-church-gray": "var(--college-church-gray)",
          white: "var(--iris-white)",
          fountain: "var(--fountain-blue)",
          grand: "var(--grand-blue)",
          bronze: "var(--billiken-bronze)",
          beige: "var(--west-pine-beige)",
          gold: "var(--gateway-gold)",
          teal: "var(--rooftop-teal)",
          orange: "var(--oriflamme-orange)",
          green: "var(--valle-verde)"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        xl: "var(--radius-xl)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        label: ["var(--font-label)", "Arial Narrow", "Arial", "sans-serif"]
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 5.75rem)", { lineHeight: "0.95", letterSpacing: "0" }],
        "section-title": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1.04", letterSpacing: "0" }],
        lead: ["1.25rem", { lineHeight: "1.75" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }]
      },
      spacing: {
        section: "var(--section-spacing)",
        "section-sm": "var(--section-spacing-sm)",
        "section-xs": "var(--section-spacing-xs)",
        gutter: "var(--container-gutter)",
        header: "var(--header-height)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        institutional: "var(--shadow-institutional)",
        card: "var(--shadow-card)",
        glass: "var(--shadow-glass)"
      },
      backgroundImage: {
        "slu-subtle": "var(--gradient-subtle)",
        "slu-hero": "var(--gradient-hero)",
        "slu-accent": "var(--gradient-accent)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      },
      animation: {
        "fade-up": "fade-up var(--motion-emphasis) both",
        "fade-in": "fade-in var(--motion-standard) both",
        "scale-in": "scale-in var(--motion-emphasis) both"
      }
    }
  },
  plugins: [animate]
};

export default config;
