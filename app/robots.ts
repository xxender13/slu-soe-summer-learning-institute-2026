import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isGithubPages = process.env.GITHUB_PAGES === "true";
  const baseUrl = isGithubPages
    ? "https://xxender13.github.io/slu-soe-summer-learning-institute-2026"
    : "http://localhost:3002";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
