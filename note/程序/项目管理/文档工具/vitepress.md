# vitepress

[vitepress](https://vitepress.dev/) 是一个静态站点生成工具

- 支持 markdown 和 vue 组件
- 基于 vite 构建

## 配置示例

```js
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "note",
  description: "note",
  base: "/note", // 站点访问相对路径, 由于个人向的静态站点通常依附于 github、gitlab 等平台, 故建议与项目同名
  srcDir: "./note", // markdown 目录地址
  outDir: "./docs", // build 输出文件, github pages 默认为 /root 和 /docs 目录
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记",
        items: [{ text: "测试", link: "/xx/xx" }],
      },
    ],

    sidebarMenuLabel: "文章", // 移动端
    returnToTopLabel: "回到顶部", // 移动端
    outlineTitle: "大纲",
    outline: "deep",
    editLink: {
      pattern: "https://gitee.com/zzzzneko/note/note/:path",
    },
    lastUpdatedText: "最近更新",

    sidebar: {
      "/笔记/测试": [
        { text: "1", collapsed: false, link: "" },
        { text: "2", collapsed: false, items: [] },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://gitee.com/zzzzneko/note" }],
  },
});
```

## 补充说明

目前 vitepress 处于阶段, 本站点也是基于此构建, 若引入第三方模块, 构建时可能存在异常, 建议先手动构建为库后再引入
