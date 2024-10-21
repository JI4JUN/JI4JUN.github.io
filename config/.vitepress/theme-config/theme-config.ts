import { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { footer } from "./footer";
import { search } from "./search";
import { CustomConfig, customConfig } from "./custom";
import { nav, sidebar } from "./routes/routes";

export const themeConfig = {
  // 配置首页左上角的icon+title
  logo: "/images/avatar.png", // 首页左上角的icon
  siteTitle: "JI4JUN's Blog", // 首页左上角的title
  outline: {
    level: "deep",
    label: "目录",
  },
  search,
  nav,
  sidebar,
  footer,
  docFooter: {
    prev: "上一页",
    next: "下一页",
  },
  lastUpdated: {
    text: "最后更新于",
    formatOptions: {
      dateStyle: "short",
      timeStyle: "short",
    },
  },
  editLink: {
    pattern:
      "https://github.com/ji4jun/ji4jun.github.io/edit/main/packages/docs/src/:path",
    text: "在 GitHub 上编辑此页面",
  },
  socialLinks: [{ icon: "github", link: "https://github.com/ji4jun" }],
  customConfig,
} satisfies LocaleSpecificConfig<DefaultTheme.Config>["themeConfig"] & {
  customConfig: CustomConfig;
};
