import { siteConfig, getSiteUrl } from "@/lib/site-config";

export function PersonJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url,
    image: `${url}/logo.jpg`,
    jobTitle: "Full-Stack Developer",
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
