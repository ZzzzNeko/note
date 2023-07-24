import type { DefaultTheme } from 'vitepress'

const tree1 = {
  text: '前端基础',
  items: [
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
    },
    {
      text: 'javascript',
      collapsed: false,
      items: [
        { text: 'BOM', link: '/程序/前端基础/javascript/BOM' },
        { text: 'DOM', link: '/程序/前端基础/javascript/DOM' },
        { text: '尺寸与定位', link: '/程序/前端基础/javascript/尺寸与定位' },
      ]
    },
    {
      text: 'typescript',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/程序/前端基础/typescript/01 数据类型' },
        { text: '基本类型及扩展', link: '/程序/前端基础/typescript/02 基本类型及扩展' },
        { text: '数组类型及扩展', link: '/程序/前端基础/typescript/03 数组类型及扩展' },
        { text: '面向对象及扩展', link: '/程序/前端基础/typescript/04 面向对象及扩展' },
        { text: '高级类型', link: '/程序/前端基础/typescript/05 高级类型' },
        { text: '类型性质', link: '/程序/前端基础/typescript/06 类型性质' },
      ]
    }
  ]
}
const tree2 = {
  text: '项目管理',
  items: [
    {
      text: '版本管理',
      items: [
        { text: 'Git 基本使用', link: '/程序/项目管理/版本管理/Git 基本使用' }
      ]
    },
    {
      text: '依赖管理',
      collapsed: false,
      items: [
        { text: 'node 版本管理', link: '/程序/项目管理/依赖管理/node 版本管理' },
        { text: '包管理器 - npm', link: '/程序/项目管理/依赖管理/包管理器 - npm' },
        { text: '包版本检测 - ncu', link: '/程序/项目管理/依赖管理/包版本检测 - ncu' },
      ]
    },
    {
      text: '打包工具 - webpack',
      collapsed: false,
      items: [
        { text: '概念介绍', link: '/程序/项目管理/打包工具 - webpack/01 概念介绍' },
        { text: '基础配置', link: '/程序/项目管理/打包工具 - webpack/02 基础配置' },
        { text: '开发环境', link: '/程序/项目管理/打包工具 - webpack/03 开发环境' },
        { text: '生产环境', link: '/程序/项目管理/打包工具 - webpack/04 生产环境' },
        { text: '性能优化', link: '/程序/项目管理/打包工具 - webpack/05 性能优化' },
        { text: '配置示例', link: '/程序/项目管理/打包工具 - webpack/06 配置示例' },
        { text: '配置示例 - webpack5', link: '/程序/项目管理/打包工具 - webpack/07 配置示例 - webpack5' },
      ]
    },
    {
      text: '打包工具 - vite',
      collapsed: false,
      items: [
        { text: '快速开始', link: '/程序/项目管理/打包工具 - vite/快速开始' },
        { text: '项目配置', link: '/程序/项目管理/打包工具 - vite/项目配置' },
      ]
    }
  ],
}
const tree3 = {
  text: '框架生态',
  items: [
    {
      text: 'koa',
      collapsed: false,
      items: [
        { text: '基本使用', link: '/程序/框架生态/koa/01 基本使用' },
        { text: '常用中间件', link: '/程序/框架生态/koa/02 常用中间件' },
      ]
    },
    {
      text: 'vue',
      collapsed: false,
      items: [
        { text: 'vue2', link: '/程序/框架生态/vue/vue2' },
        { text: 'vue2:vue-router', link: '/程序/框架生态/vue/vue2 vue-router' },
        { text: 'vue2:vuex', link: '/程序/框架生态/vue/vue2 vuex' },
        { text: 'vue3', link: '/程序/框架生态/vue/vue3' },
        { text: 'vue3:vue-router', link: '/程序/框架生态/vue/vue3 vue-router' },
        { text: 'vue3:pinia', link: '/程序/框架生态/vue/vue3 pinia' },
        { text: '插件与库', link: '/程序/框架生态/vue/插件与库' },
        // { text: '核心原理', link: '/程序/框架生态/vue/核心原理' },
      ]
    },
    // {
    //   text: '数据可视化 - g2',
    //   collapsed: false,
    //   items: []
    // },
    {
      text: '数据可视化 - g6',
      collapsed: false,
      items: [
        { text: '快速开始', link: '/程序/框架生态/g6/01 快速开始' },
        { text: '图的元素', link: '/程序/框架生态/g6/02 图的元素' },
        { text: '图的元素 - Shape', link: '/程序/框架生态/g6/02-01 图的元素 - Shape' },
        { text: '图的元素 - Node', link: '/程序/框架生态/g6/02-02 图的元素 - Node' },
        { text: '图的元素 - Edge', link: '/程序/框架生态/g6/02-03 图的元素 - Edge' },
        { text: '图的元素 - Combo', link: '/程序/框架生态/g6/02-04 图的元素 - Combo' },
        { text: '图的布局', link: '/程序/框架生态/g6/03 图的布局' },
        { text: '图的布局 - 一般布局', link: '/程序/框架生态/g6/03-01 图的布局 - 一般布局' },
        { text: '图的布局 - 树形布局', link: '/程序/框架生态/g6/03-02 图的布局  - 树形布局' },
        { text: '交互事件', link: '/程序/框架生态/g6/04 交互事件' },
        { text: '功能组件', link: '/程序/框架生态/g6/05 功能组件' },
        { text: '基础动画', link: '/程序/框架生态/g6/06 基础动画' },
      ]
    }
  ],
}
const tree4 = {
  text: '网络通信',
  items: [
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
        { text: '同源策略', link: '/程序/网络通信/跨域通信/01 同源策略' },
        { text: '跨域通信', link: '/程序/网络通信/跨域通信/02 跨域通信' },
        { text: '跨域通信 - CORS', link: '/程序/网络通信/跨域通信/02-01 跨域通信 - CORS' },
        { text: '跨域通信 - JSONP', link: '/程序/网络通信/跨域通信/02-02 跨域通信 - JSONP' },
        { text: '跨域通信 - postMessage', link: '/程序/网络通信/跨域通信/02-03 跨域通信 - postMessage' },
      ]
    }
  ],
}
const tree5 = {
  text: '工作原理',
  items: [
    {
      text: 'v8',
      collapsed: false,
      items: [
        { text: '内存管理', link: '/程序/工作原理/v8/内存管理' },
        { text: '事件循环', link: '/程序/工作原理/v8/事件循环' },
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
}
const tree6 = {
  text: '经验汇总',
  items: [
    {
      text: '场景应用',
      collapsed: false,
      items: [
        { text: '剪切板', link: '/程序/经验汇总/场景应用/剪切板' },
        { text: '批量打印', link: '/程序/经验汇总/场景应用/批量打印' },
        { text: '图片懒加载', link: '/程序/经验汇总/场景应用/图片懒加载' },
        { text: '资源下载', link: '/程序/经验汇总/场景应用/资源下载' },
        { text: 'base64 转换', link: '/程序/经验汇总/场景应用/base64 转换' },
        { text: 'cheerio', link: '/程序/经验汇总/场景应用/cheerio' },
        { text: 'markdown解析', link: '/程序/经验汇总/场景应用/markdown解析' },
        { text: 'node 图形验证码', link: '/程序/经验汇总/场景应用/node 图形验证码' },
        { text: 'qrcode生成', link: '/程序/经验汇总/场景应用/qrcode生成' },
        { text: 'webp判断', link: '/程序/经验汇总/场景应用/webp判断' },
      ]
    },
    {
      text: '方案工具',
      collapsed: false,
      items: [
        { text: '代码调试', link: '/程序/经验汇总/方案工具/代码调试' },
        { text: '单点登录', link: '/程序/经验汇总/方案工具/单点登录' },
      ]
    }
  ],
}
const tree7 = {
  text: '知识梳理',
  items: [
    {
      text: '前端概览',
      collapsed: false,
      items: [
        { text: '语言基础', link: '/程序/知识梳理/前端概览/01 语言基础' },
        { text: '网络通信', link: '/程序/知识梳理/前端概览/02 网络通信' },
        { text: '工作原理', link: '/程序/知识梳理/前端概览/03 工作原理' },
        { text: '前端工程', link: '/程序/知识梳理/前端概览/04 前端工程' },
        { text: '框架使用', link: '/程序/知识梳理/前端概览/05 框架使用' },
        { text: '框架原理', link: '/程序/知识梳理/前端概览/06 框架原理' },
      ]
    },
  ],
}
const tree8 = {
  text: '基础知识',
  items: [
    {
      text: '财务报表',
      collapsed: false,
      items: [
        { text: '财报简介', link: '/金融/基础知识/财务报表/01 财报简介' },
        { text: '资产负债表', link: '/金融/基础知识/财务报表/02 资产负债表' },
        { text: '利润表', link: '/金融/基础知识/财务报表/03 利润表' },
        { text: '现金流量表', link: '/金融/基础知识/财务报表/04 现金流量表' },
        { text: '财务报表速览', link: '/金融/基础知识/财务报表/05 财务报表速览' },
        { text: '财报综合阅读', link: '/金融/基础知识/财务报表/06 财报综合阅读' },
        { text: '财务造假手段', link: '/金融/基础知识/财务报表/07 财务造假手段' },
      ]
    },
    {
      text: '传统经济学',
      collapsed: false,
      items: [
        { text: '经济学的核心原理', link: '/金融/基础知识/传统经济学/01 经济学的核心原理' },
        { text: '消费者会如何选择', link: '/金融/基础知识/传统经济学/02 消费者会如何选择' },
        { text: '企业是如何决策的', link: '/金融/基础知识/传统经济学/03 企业是如何决策的' },
        // { text: '市场是如何运行的', link: '/金融/基础知识/传统经济学/04 市场是如何运行的' },
        // { text: '财富的创造和分配', link: '/金融/基础知识/传统经济学/05 财富的创造和分配' },
        // { text: '俯瞰整个经济社会', link: '/金融/基础知识/传统经济学/06 俯瞰整个经济社会' },
      ]
    },
    {
      text: '行为经济学(TODO:)',
      collapsed: false,
      items: []
    }
  ]
}

const sidebar: DefaultTheme.Sidebar = {
  '/程序/前端基础/': tree1.items,
  '/程序/项目管理/': tree2.items,
  '/程序/框架生态/': tree3.items,
  '/程序/网络通信/': tree4.items,
  '/程序/工作原理/': tree5.items,
  '/程序/经验汇总/': tree6.items,
  '/程序/知识梳理/': tree7.items,
  '/金融/基础知识/': tree8.items
}

export default sidebar

export { tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8 }