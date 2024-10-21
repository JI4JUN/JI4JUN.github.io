/**
 * used in components
 */
export const customConfig = {
  // 自定义扩展: 文章元数据配置
  articleMetadataConfig: {
    author: "ji4jun", // 文章全局默认作者名称
    authorLink: "https://github.com/ji4jun", // 点击作者名时默认跳转的链接
    showViewCount: false, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: "署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)",
    licenseLink: "http://creativecommons.org/licenses/by-sa/4.0/",
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: "gitalk",
    showComment: true, // 是否显示评论
  },
};

export type CustomConfig = typeof customConfig;
