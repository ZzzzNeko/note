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
      { text: '首页', link: '/' },
      {
        text: '程序',
        items: [
          { text: '前端基础', link: '/程序/前端基础/css/01 基本语法' },
          { text: '开发生态', link: '/程序/开发生态/项目管理/Git 基本使用' },
          { text: '网络通信', link: '/程序/网络通信/网络模型/网络模型' },
          { text: '工作原理', link: '/程序/工作原理/浏览器/高层结构' },
          { text: '场景应用', link: '/程序/场景应用/剪切板' },
          { text: '知识梳理', link: '/程序/知识梳理/01 语言基础' },
        ]
      },
      {
        text: '金融',
        items: [
          { text: '财务报表', link: '/金融/财务报表/01 财报简介' }
        ]
      }
    ],

    outline: 'deep',
    editLink: {
      pattern: 'https://gitee.com/zzzzneko/note/note/:path'
      // pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    lastUpdatedText: '最近更新',

    sidebar: {
      '/程序/前端基础/': [
        {
          text: 'css',
          collapsed: false,
          items: [
            { text: '基本语法', link: '/程序/前端基础/css/01 基本语法' },
            { text: '盒子模型', link: '/程序/前端基础/css/02 盒子模型' },
            { text: '元素类别', link: '/程序/前端基础/css/03 元素类别' },
            { text: '内联元素', link: '/程序/前端基础/css/04 内联元素' },
            { text: '流式文档', link: '/程序/前端基础/css/05 流式文档' },
            { text: '弹性布局', link: '/程序/前端基础/css/06 弹性布局' },
            { text: '网格布局', link: '/程序/前端基础/css/07 网格布局' },
            // { text: '多列布局', link: '/程序/前端基础/css/08 多列布局' },
            { text: '动画过渡', link: '/程序/前端基础/css/09 动画过渡' },
            { text: '转换', link: '/程序/前端基础/css/10 转换' },
          ]
        },
        {
          text: 'sass',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/程序/前端基础/sass/01 快速开始' },
            { text: '语法扩展', link: '/程序/前端基础/sass/02 语法扩展' },
            { text: '指令扩展', link: '/程序/前端基础/sass/03 指令扩展' },
            { text: '变量运算', link: '/程序/前端基础/sass/04 变量运算' },
            { text: '流程控制', link: '/程序/前端基础/sass/05 流程控制' },
            { text: '样式复用', link: '/程序/前端基础/sass/06 样式复用' },
          ]
        }
      ],
      '/程序/开发生态/': [
        {
          text: '项目管理',
          items: [
            { text: 'Git 基本使用', link: '/程序/开发生态/项目管理/Git 基本使用' }
          ]
        },
        {
          text: '打包工具 - webpack',
          collapsed: false,
          items: [
            { text: '概念介绍', link: '/程序/开发生态/打包工具 - webpack/01 概念介绍' },
            { text: '基础配置', link: '/程序/开发生态/打包工具 - webpack/02 基础配置' },
            { text: '开发环境', link: '/程序/开发生态/打包工具 - webpack/03 开发环境' },
            { text: '生产环境', link: '/程序/开发生态/打包工具 - webpack/04 生产环境' },
            { text: '性能优化', link: '/程序/开发生态/打包工具 - webpack/05 性能优化' },
            { text: '配置示例', link: '/程序/开发生态/打包工具 - webpack/06 配置示例' },
            { text: '配置示例 - webpack5', link: '/程序/开发生态/打包工具 - webpack/07 配置示例 - webpack5' },
          ]
        },
        {
          text: '打包工具 - vite',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/程序/开发生态/打包工具 - vite/快速开始' },
            { text: '项目配置', link: '/程序/开发生态/打包工具 - vite/项目配置' },
          ]
        }
      ],
      '/程序/网络通信/': [
        {
          text: '网络模型',
          collapsed: false,
          items: [
            { text: '网络模型', link: '/程序/网络通信/网络模型/网络模型' },
            { text: '应用层 - HTTP', link: '/程序/网络通信/网络模型/应用层 - HTTP' },
            { text: '应用层 - DNS', link: '/程序/网络通信/网络模型/应用层 - DNS' },
            { text: '传输层 - TCP', link: '/程序/网络通信/网络模型/传输层 - TCP' },
            { text: '传输层 - UDP', link: '/程序/网络通信/网络模型/传输层 - UDP' },
          ]
        },
        {
          text: '网络安全',
          collapsed: false,
          items: [
            { text: '常见攻击', link: '/程序/网络通信/网络安全/常见攻击' },
            { text: '资源盗链', link: '/程序/网络通信/网络安全/资源盗链' },
          ]
        },
        {
          text: '跨域通信',
          collapsed: false,
          items: [
            { text: '同源策略', link: '/程序/网络通信/跨域通信/同源策略' },
            { text: '跨域通信', link: '/程序/网络通信/跨域通信/跨域通信' },
            { text: '跨域通信 - CORS', link: '/程序/网络通信/跨域通信/跨域通信 - CORS' },
            { text: '跨域通信 - JSONP', link: '/程序/网络通信/跨域通信/跨域通信 - JSONP' },
            { text: '跨域通信 - postMessage', link: '/程序/网络通信/跨域通信/跨域通信 - postMessage' },
          ]
        }
      ],
      '/程序/工作原理/': [
        {
          text: 'V8',
          collapsed: false,
          items: [
            { text: '内存管理', link: '/程序/工作原理/V8/内存管理' },
            { text: '事件循环', link: '/程序/工作原理/V8/事件循环' },
          ]
        },
        {
          text: '浏览器',
          collapsed: false,
          items: [
            { text: '高层结构', link: '/程序/工作原理/浏览器/高层结构' },
            { text: '工作流程', link: '/程序/工作原理/浏览器/工作流程' },
            { text: '渲染引擎', link: '/程序/工作原理/浏览器/渲染引擎' },
            { text: '缓存控制', link: '/程序/工作原理/浏览器/缓存控制' },
          ]
        },
      ],
      '/程序/场景应用/': [
        {
          text: '场景应用',
          collapsed: false,
          items: [
            { text: '剪切板', link: '/程序/场景应用/剪切板' },
            { text: '批量打印', link: '/程序/场景应用/批量打印' },
            { text: '图片懒加载', link: '/程序/场景应用/图片懒加载' },
            { text: '资源下载', link: '/程序/场景应用/资源下载' },
            { text: 'qrcode生成', link: '/程序/场景应用/qrcode生成' },
            { text: 'webp判断', link: '/程序/场景应用/webp判断' },
          ]
        }
      ],
      '/程序/知识梳理/': [
        {
          text: '知识梳理',
          collapsed: false,
          items: [
            { text: '语言基础', link: '/程序/知识梳理/01 语言基础' },
            { text: '网络通信', link: '/程序/知识梳理/02 网络通信' },
            { text: '工作原理', link: '/程序/知识梳理/03 工作原理' },
            { text: '前端工程', link: '/程序/知识梳理/04 前端工程' },
            { text: '框架使用', link: '/程序/知识梳理/05 框架使用' },
            { text: '框架原理', link: '/程序/知识梳理/06 框架原理' },
          ]
        },
      ],
      '/金融/财务报表/': [
        {
          text: '财务报表',
          collapsed: false,
          items: [
            { text: '财报简介', link: '/金融/财务报表/01 财报简介' },
            { text: '资产负债表', link: '/金融/财务报表/02 资产负债表' },
            { text: '利润表', link: '/金融/财务报表/03 利润表' },
            { text: '现金流量表', link: '/金融/财务报表/04 现金流量表' },
            { text: '财务报表速览', link: '/金融/财务报表/05 财务报表速览' },
            { text: '财报综合阅读', link: '/金融/财务报表/06 财报综合阅读' },
            { text: '财务造假手段', link: '/金融/财务报表/07 财务造假手段' },
          ]
        },
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
