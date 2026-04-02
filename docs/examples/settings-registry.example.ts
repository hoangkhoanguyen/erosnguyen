/**
 * Ví dụ registry settings — đặt file thực tế trong admin app, ví dụ:
 * `admin/src/features/settings/registry/site-home-hero.ts` và barrel `index.ts`.
 *
 * Import `@/...` giả định alias trỏ vào `admin/src`.
 *
 * Quy ước:
 * - 1 entry = 1 row DB (`key`) = 1 card.
 * - `groupId` gom vào route `/admin/settings/[groupId]`.
 * - Thứ tự card = `GROUP_KEYS[groupId]`.
 * - `value.version` trong jsonb; migrate khi load/save.
 * - Form paths khớp `DynamicFormField`: section → nested object (`cardMeta.title`, …).
 *
 * Liên quan: docs/settings-admin-groups-navigation.md
 */

import { z } from "zod";
import { createDynamicFormSchema } from "@/lib/dynamic-form.util";
import type { DynamicFormConfig } from "@/types/dynamic-form.type";

// ─── Value lưu DB (jsonb) ───

export type SiteHomeHeroValue = {
  version: number;
  cardMeta: {
    title: string;
    description: string;
  };
  nonLocalized: {
    profileImageUrl: string;
    cvFileUrl: string;
    aboutPath: string;
  };
  locales: Record<
    string,
    {
      badge: string;
      description: string;
      primaryCtaLabel: string;
      secondaryCtaLabel: string;
    }
  >;
};

const LATEST_SITE_HOME_HERO = 1 as const;

/** Form values — khớp path RHF (cardMeta.title, locales.vi.badge, …) */
export type SiteHomeHeroFormValues = {
  cardMeta: SiteHomeHeroValue["cardMeta"];
  nonLocalized: SiteHomeHeroValue["nonLocalized"];
  locales: SiteHomeHeroValue["locales"];
};

function emptyLocales(
  codes: string[],
): SiteHomeHeroValue["locales"] {
  const out: SiteHomeHeroValue["locales"] = {};
  for (const code of codes) {
    out[code] = {
      badge: "",
      description: "",
      primaryCtaLabel: "",
      secondaryCtaLabel: "",
    };
  }
  return out;
}

export function createDefaultSiteHomeHeroValue(
  languageCodes: string[],
): SiteHomeHeroValue {
  return {
    version: LATEST_SITE_HOME_HERO,
    cardMeta: {
      title: "Hero trang chủ",
      description: "Ảnh, link CV, nội dung đa ngôn ngữ.",
    },
    nonLocalized: {
      profileImageUrl: "",
      cvFileUrl: "",
      aboutPath: "/about",
    },
    locales: emptyLocales(languageCodes),
  };
}

export function migrateSiteHomeHero(raw: unknown): SiteHomeHeroValue {
  const v = (typeof raw === "object" && raw !== null ? raw : {}) as Record<
    string,
    unknown
  >;
  const version = Number(v.version ?? 1);

  if (version >= LATEST_SITE_HOME_HERO) {
    return raw as SiteHomeHeroValue;
  }

  // Ví dụ migrate từ shape cũ — chỉnh theo dự án thật
  return {
    version: LATEST_SITE_HOME_HERO,
    cardMeta: {
      title: "Hero trang chủ",
      description: "",
    },
    nonLocalized: {
      profileImageUrl: "",
      cvFileUrl: "",
      aboutPath: "/about",
    },
    locales: (v.locales as SiteHomeHeroValue["locales"]) ?? {},
  };
}

export function siteHomeHeroFormConfig(
  languageTabs: { id: string; label: string }[],
): DynamicFormConfig<SiteHomeHeroFormValues> {
  return {
    fields: [
      {
        type: "section",
        name: "cardMeta",
        label: "Thẻ card (lưu trong value.cardMeta)",
        fields: [
          {
            type: "text",
            name: "title",
            label: "Tiêu đề card",
            zodSchema: z.string().min(1),
          },
          {
            type: "textarea",
            name: "description",
            label: "Mô tả ngắn",
            zodSchema: z.string(),
            rows: 2,
          },
        ],
      },
      {
        type: "section",
        name: "nonLocalized",
        label: "Không đa ngôn ngữ",
        fields: [
          {
            type: "text",
            name: "profileImageUrl",
            label: "URL ảnh",
            zodSchema: z.string().url().or(z.literal("")),
          },
          {
            type: "text",
            name: "cvFileUrl",
            label: "URL / file CV",
            zodSchema: z.string().url().or(z.literal("")),
          },
          {
            type: "text",
            name: "aboutPath",
            label: "Đường dẫn About",
            zodSchema: z.string().startsWith("/"),
          },
        ],
      },
      {
        type: "tabs-uniform",
        name: "locales",
        label: "Nội dung theo ngôn ngữ",
        tabs: languageTabs.map((t) => ({
          id: t.id,
          label: t.label,
          defaultActive: t.id === languageTabs[0]?.id,
        })),
        fields: [
          {
            type: "text",
            name: "badge",
            label: "Badge",
            zodSchema: z.string(),
          },
          {
            type: "textarea",
            name: "description",
            label: "Mô tả",
            zodSchema: z.string(),
          },
          {
            type: "text",
            name: "primaryCtaLabel",
            label: "CTA chính",
            zodSchema: z.string(),
          },
          {
            type: "text",
            name: "secondaryCtaLabel",
            label: "CTA phụ",
            zodSchema: z.string(),
          },
        ],
      },
    ],
  };
}

export function siteHomeHeroFormSchema(
  languageTabs: { id: string; label: string }[],
) {
  return createDynamicFormSchema(siteHomeHeroFormConfig(languageTabs));
}

/** DB value ↔ form: cùng shape — chỉ cần merge version khi persist */
export function siteHomeHeroValueToForm(value: SiteHomeHeroValue): SiteHomeHeroFormValues {
  return {
    cardMeta: value.cardMeta,
    nonLocalized: value.nonLocalized,
    locales: value.locales,
  };
}

export function siteHomeHeroFormToValue(
  form: SiteHomeHeroFormValues,
): SiteHomeHeroValue {
  return {
    version: LATEST_SITE_HOME_HERO,
    cardMeta: form.cardMeta,
    nonLocalized: form.nonLocalized,
    locales: form.locales,
  };
}

// ─── Registry entry (union mở rộng từng key) ───

export type SettingRegistryEntry =
  | {
      kind: "site.home.hero";
      key: "site.home.hero";
      groupId: "site:home";
      latestVersion: typeof LATEST_SITE_HOME_HERO;
      defaultValue: (languageCodes: string[]) => SiteHomeHeroValue;
      formConfig: typeof siteHomeHeroFormConfig;
      migrate: typeof migrateSiteHomeHero;
      valueToForm: typeof siteHomeHeroValueToForm;
      formToValue: typeof siteHomeHeroFormToValue;
    }
  // | { kind: "site.home.featuredProjects"; ... }
  ;

export const SETTING_REGISTRY: SettingRegistryEntry[] = [
  {
    kind: "site.home.hero",
    key: "site.home.hero",
    groupId: "site:home",
    latestVersion: LATEST_SITE_HOME_HERO,
    defaultValue: createDefaultSiteHomeHeroValue,
    formConfig: siteHomeHeroFormConfig,
    migrate: migrateSiteHomeHero,
    valueToForm: siteHomeHeroValueToForm,
    formToValue: siteHomeHeroFormToValue,
  },
];

export const registryByKey = new Map<string, SettingRegistryEntry>(
  SETTING_REGISTRY.map((e) => [e.key, e]),
);

// ─── Nhóm: list + map groupId → keys (thứ tự = thứ tự card) ───

export type SettingsGroupMeta = {
  id: string;
  title: string;
  description?: string;
  order: number;
};

export const SETTINGS_GROUPS: SettingsGroupMeta[] = [
  {
    id: "site:global",
    title: "Toàn site",
    description: "Footer, SEO mặc định, …",
    order: 1,
  },
  {
    id: "site:home",
    title: "Trang chủ",
    description: "Hero, khối nổi bật, …",
    order: 2,
  },
];

export const GROUP_KEYS: Record<string, string[]> = {
  "site:global": [
    /* "site.global.footer", "site.global.seoDefaults" */
  ],
  "site:home": ["site.home.hero" /* , "site.home.featuredProjects" */],
};

export function getRegistryEntryOrThrow(key: string): SettingRegistryEntry {
  const e = registryByKey.get(key);
  if (!e) throw new Error(`Unknown setting key: ${key}`);
  return e;
}
