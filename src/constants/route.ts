export const WEB_ROUTE = {
  root: "/",
  home: "/",
  myStory: "/my-story",
  blogs: "/blogs",
  blogDetail: "/blogs/[slug]",
  projects: "/projects",
  projectDetail: "/projects/[slug]",
} as const;

export const ROUTES = {
  web: WEB_ROUTE,
} as const;

type Routes = typeof ROUTES;
type Namespace = keyof Routes;

/** reuseable helper to extract params from template strings */
type ExtractParams<S extends string> =
  S extends `${infer _Start}[${infer P}]${infer Rest}`
    ? P | ExtractParams<Rest>
    : S extends `${infer _Start}:${infer P}/${infer Rest}`
    ? P | ExtractParams<`/${Rest}`>
    : S extends `${infer _Start}:${infer P}`
    ? P
    : never;

type TemplateOf<
  N extends Namespace,
  K extends keyof Routes[N],
> = Routes[N][K] extends string ? Routes[N][K] : never;
type ParamsForRoute<
  N extends Namespace,
  K extends keyof Routes[N],
> = ExtractParams<TemplateOf<N, K>> extends never
  ? never
  : Record<ExtractParams<TemplateOf<N, K>>, string | number>;

const PARAM_REGEX = /\[([^\]]+)\]|:([A-Za-z0-9_]+)/g;

/**
 * Generic generator for any namespace+key.
 * If route requires params, the third argument is required (enforced by types).
 */
export function generateRoute<N extends Namespace, K extends keyof Routes[N]>(
  namespace: N,
  key: K,
  ...args: ParamsForRoute<N, K> extends never
    ? []
    : [params: ParamsForRoute<N, K>]
): string {
  const template = ROUTES[namespace][key] as string;
  const params = (args[0] ?? {}) as Record<string, string | number | undefined>;

  return template.replace(PARAM_REGEX, (_, p1, p2) => {
    const name = (p1 ?? p2) as string;
    const value = params[name];
    if (value === undefined) {
      throw new Error(
        `Missing route param "${name}" for template "${template}"`,
      );
    }
    return encodeURIComponent(String(value));
  });
}

export const webRoutes = {
  root: () => WEB_ROUTE.root,
  home: () => WEB_ROUTE.home,
  myStory: () => WEB_ROUTE.myStory,
  blogs: () => WEB_ROUTE.blogs,
  blogDetail: (params: { slug: string }) =>
    generateRoute("web", "blogDetail", params),
  projects: () => WEB_ROUTE.projects,
  projectDetail: (params: { slug: string }) =>
    generateRoute("web", "projectDetail", params),
};
