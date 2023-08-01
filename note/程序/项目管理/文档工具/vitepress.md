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

## 自动部署

自动部署到 github, 新建 `deploy.yml` 于 `.github/workflows` 目录下

```yml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      - name: Install Pnpm
        uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
        with:
          version: 8.6.10
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: pnpm # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: pnpm install # or pnpm install / yarn install
      - name: Build with VitePress
        run: pnpm run build # or pnpm docs:build / yarn docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

若使用 `pnpm` 则需要 `package.json` 中配置

```json
{
  "packageManager": "pnpm@8.6.10"
}
```

## 补充说明

目前 vitepress 处于阶段, 本站点也是基于此构建, 若引入第三方模块, 构建时可能存在异常, 建议先手动构建为库后再引入
