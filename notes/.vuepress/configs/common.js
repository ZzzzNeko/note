/**
 * 配置格式
 * - dest: 构建后输出目录
 * - title: 文档 `<title>` 元素
 * - head: 文档 `<head>` 元素
 * - themeConfig: 主题配置
 *  - logo: favicon
 *  - nav: 顶部导航栏, 用作大模块区分
 *  - sidebar: 侧边栏, 用作每个模块的细分
 *    - 属性名: 对应 nav 中的导航(link)地址
 *    - 属性值: 使用 `[文件名, 侧边栏标题]` 格式描述
 * - markdown: markdown扩展
 * - plugins: 插件扩展
 */
module.exports = (target) => ({
  target: target,
  base: `/note/`,
  dest: `docs/`, // NOTE: github 上只支持 docs/ 和 (root)/ 目录进行静态部署，二级分类没有意义
  // dest: `docs/${target}/`,
  patterns: ["**/*.vue", "readme.md", `${target}/**/*.md`], // 直解析当前目标下的md
  // head: [["script", { src: "/libs/d3.js"}]],
  themeConfig: {
    logo: "/imgs/logo.jpg",
    displayAllHeaders: true, // 展示子标题
    sidebarDepth: 3, // 子标题深度设置为3
    nav: [{ text: "nekoya", link: "http://blog.lazyneko.com" }],
  },
  plugins: [
    "@vuepress/back-to-top",
    "demo-block",
    require("../plugins/mermaid"),
  ],
});
