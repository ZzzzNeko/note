import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "note",
  description: "note",
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
          { text: '项目管理', link: '/程序/项目管理/版本管理/Git 基本使用' },
          { text: '框架生态', link: '/程序/框架生态/koa/01 基本使用' },
          { text: '网络通信', link: '/程序/网络通信/网络模型/网络模型' },
          { text: '工作原理', link: '/程序/工作原理/v8/内存管理' },
          { text: '场景应用', link: '/程序/经验汇总/场景应用/剪切板' },
          { text: '知识梳理', link: '/程序/知识梳理/前端概览/01 语言基础' },
        ]
      },
      {
        text: '金融',
        items: [
          { text: '基础知识', link: '/金融/基础知识/财务报表/01 财报简介' }
        ]
      }
    ],

    outline: 'deep',
    editLink: {
      pattern: 'https://github.com/ZzzzNeko/note/note/:path'
    },
    lastUpdatedText: '最近更新',

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/zzzzneko/note' }
    ]
  }
})
