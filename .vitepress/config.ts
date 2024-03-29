import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "笔记",
  description: "note",
  base: '/note',
  srcDir: "./note",
  outDir: "./docs",
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '程序',
        items: [
          { text: '前端基础', link: '/程序/前端基础/css/01 基本语法' },
          { text: '网络通信', link: '/程序/网络通信/网络模型/网络模型' },
          { text: '工作原理', link: '/程序/工作原理/js引擎/内存管理' },
          { text: '项目管理', link: '/程序/项目管理/版本管理/Git 基本使用' },
          { text: '框架生态', link: '/程序/框架生态/koa/01 基本使用' },
          { text: '可视化库', link: '/程序/可视化库/g2/01 图形语法' },
          { text: '经验汇总', link: '/程序/经验汇总/场景应用/剪切板' },
          { text: '知识梳理', link: '/程序/知识梳理/前端概览/01 语言基础' },
        ]
      },
      {
        text: '金融',
        items: [
          { text: '基础知识', link: '/金融/基础知识/财务报表/01 财报简介' },
          { text: '行业知识', link: '/金融/行业知识/能源化工/能源化工产业链' },
          { text: '宏观探讨', link: '/金融/宏观探讨/宏观数据/居民负债' }
        ]
      }
    ],
    sidebar,

    sidebarMenuLabel: '文章',     // 移动端
    returnToTopLabel: '回到顶部', // 移动端
    outlineTitle: '大纲',
    outline: 'deep',
    editLink: {
      pattern: 'https://github.com/ZzzzNeko/note/tree/master/note/:path',
    },
    lastUpdatedText: '最近更新',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZzzzNeko/note' }
    ]
  }
})
