import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "note",
  description: "note",
  srcDir: "./note",
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '程序', link: '/程序/08 面试整理/01 知识梳理/01 语言基础' },
      { text: '金融', link: '/金融/' },
    ],
    
    outline: 'deep',
    editLink: {
      pattern: 'https://gitee.com/zzzzneko/note/note/:path'
      // pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    lastUpdatedText: '最近更新',

    sidebar: {
      '/程序/': [
        {
          text: '知识梳理',
          collapsed: true,
          items: [
            { text: '01 语言基础', link: '/程序/08 面试整理/01 知识梳理/01 语言基础' },
            { text: '02 网络通信', link: '/程序/08 面试整理/01 知识梳理/02 网络通信' },
            { text: '03 工作原理', link: '/程序/08 面试整理/01 知识梳理/03 工作原理' },
            { text: '04 前端工程', link: '/程序/08 面试整理/01 知识梳理/04 前端工程' },
            { text: '05 框架使用', link: '/程序/08 面试整理/01 知识梳理/05 框架使用' },
            { text: '06 框架原理', link: '/程序/08 面试整理/01 知识梳理/06 框架原理' },
          ]
        },
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
