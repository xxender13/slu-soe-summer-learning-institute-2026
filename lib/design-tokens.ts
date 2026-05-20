export const designTokens = {
  colorRoles: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))",
    muted: "hsl(var(--muted))",
    surface: "hsl(var(--surface))",
    border: "hsl(var(--border))"
  },
  spacing: {
    section: "var(--section-spacing)",
    sectionSmall: "var(--section-spacing-sm)",
    sectionXSmall: "var(--section-spacing-xs)",
    containerGutter: "var(--container-gutter)",
    maxContainer: "var(--container-max)",
    headerHeight: "var(--header-height)"
  },
  effects: {
    subtleGradient: "var(--gradient-subtle)",
    heroGradient: "var(--gradient-hero)",
    accentGradient: "var(--gradient-accent)",
    softShadow: "var(--shadow-soft)",
    institutionalShadow: "var(--shadow-institutional)",
    cardShadow: "var(--shadow-card)",
    glassShadow: "var(--shadow-glass)"
  },
  motion: {
    fadeUp: "fade-up 640ms ease-out both",
    fadeIn: "fade-in 280ms ease both",
    scaleIn: "scale-in 640ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
    reducedMotionQuery: "(prefers-reduced-motion: reduce)"
  }
} as const;
