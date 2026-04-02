/**
 * Canonical site URL for metadata, OG tags, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Eros Nguyen",
  shortName: "Eros",
  /** Default document title */
  title: "Eros Nguyen — Full-Stack Developer Portfolio",
  /** Used in OG / Twitter / manifest */
  description:
    "Portfolio of Eros Nguyen: full-stack development, application architecture, performance and user experience.",
  /** Open Graph locale */
  locale: "vi_VN",
  /** Brand colors (align with default orange palette in globals.css) */
  themeColorLight: "#ea580c",
  themeColorDark: "#141211",
  /** PWA splash / manifest */
  manifestBackgroundColor: "#fffaf5",
  keywords: [
    "Eros Nguyen",
    "full-stack developer",
    "portfolio",
    "React",
    "Next.js",
    "web development",
  ],
} as const;
