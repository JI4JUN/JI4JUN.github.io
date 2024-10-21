import Components from "unplugin-vue-components/vite";
import svgLoader from "vite-svg-loader";
import { title, description } from "./title";
import { head } from "./head";
import { DefaultTheme, UserConfig } from "vitepress";
import { markdown } from "./markdown";
import { resolve } from "node:path";

const customElements = [
  "mjx-container",
  "mjx-assistive-mml",
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml",
];

const docsConfig: UserConfig<DefaultTheme.Config> = {
  lang: "zh-CN",
  title,
  description,
  head,
  appearance: false,
};

const buildConfig: UserConfig<DefaultTheme.Config> = {
  base: "/",
  srcDir: resolve(__dirname, "../../../packages/docs/src"),
  markdown,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  vite: {
    plugins: [
      Components({
        dirs: [".vitepress/theme/components"],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
      svgLoader(),
    ],
    resolve: {
      alias: {
        mermaid: "mermaid/dist/mermaid.esm.mjs",
        "@ji4jun/config": resolve(__dirname),
      },
    },
  },
};

export const siteConfig: Omit<
  UserConfig<DefaultTheme.Config>,
  "themeConfig"
> = {
  ...docsConfig,
  ...buildConfig,
  cleanUrls: true,
};
