export type SocialKey = "github" | "linkedin" | "facebook" | "zalo";

export const profile = {
  /** Public-facing display name */
  name: "Eros Nguyen",

  /** Primary contact email */
  email: "nguyenhoangkhoa2305@gmail.com",

  /** Social profiles */
  social: {
    github: "https://github.com/hoangkhoanguyen",
    linkedin: "https://linkedin.com/in/hoangkhoanguyen",
    facebook: "https://facebook.com/hoangkhoanguyen2305",
    zalo: "https://zalo.me/0772028960",
  } satisfies Record<SocialKey, string>,
} as const;

export function mailto(email: string) {
  return `mailto:${email}`;
}

