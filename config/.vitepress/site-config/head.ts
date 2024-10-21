import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const head: LocaleSpecificConfig<DefaultTheme.Config>["head"] = [
  // 这里配置网站的logo，即网页tab上的logo图案
  ["link", { rel: "icon", type: "image/svg", href: "/images/avatar.png" }],
];
