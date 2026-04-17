import { siteConfig, getSiteUrl } from "@/lib/site-config";
import { profile } from "@/constants/profile";

export function PersonJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url,
    image: `${url}/logo.jpg`,
    jobTitle: "Full-Stack Developer",
    sameAs: [
      profile.social.github,
      profile.social.linkedin,
      profile.social.facebook,
    ] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
