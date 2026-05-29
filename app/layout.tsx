import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";
const assetPath = (path: string) => `${basePath}${path}`;
const absoluteAssetUrl = (path: string) => `${siteUrl}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "3rd Annual Summer Learning Institute 2026 | SLU School of Education",
    template: "%s | SLU School of Education"
  },
  description: "A premium interactive event experience for the 3rd Annual Summer Learning Institute, July 22-24, 2026 at Saint Louis University.",
  applicationName: "SLU School of Education Summer Learning Institute",
  keywords: [
    "Saint Louis University",
    "School of Education",
    "Summer Learning Institute 2026",
    "educator professional development",
    "St. Louis education",
    "teacher learning"
  ],
  authors: [{ name: "Saint Louis University School of Education" }],
  creator: "Saint Louis University School of Education",
  publisher: "Saint Louis University",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: assetPath("/branding/favicon/icon.svg"),
    shortcut: assetPath("/branding/favicon/icon.svg"),
    apple: assetPath("/branding/favicon/icon.svg")
  },
  openGraph: {
    title: "3rd Annual Summer Learning Institute 2026 | SLU School of Education",
    description: "July 22-24, 2026 at Saint Louis University. A justice-centered professional learning experience for educators, leaders, and community partners.",
    siteName: "SLU School of Education",
    images: [
      {
        url: absoluteAssetUrl("/branding/social/og-logo.svg"),
        width: 1200,
        height: 630,
        alt: "Saint Louis University School of Education logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "3rd Annual Summer Learning Institute 2026 | SLU School of Education",
    description: "A premium professional learning summit for educators and community partners.",
    images: [absoluteAssetUrl("/branding/social/og-logo.svg")]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
