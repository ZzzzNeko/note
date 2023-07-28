# vue3: vue-router

与 vue3 对应的版本: [`vue-router 4.x`](https://router.vuejs.org/zh/)

vue-router4 核心内容并不太大变化, 这里描述常用的 迁移性 变动

## 路由的使用

### 路由的创建

主要调整有

- 创建调整为 组合式 API
- `mode` 调整为 `history` 并使用函数替换
  - `createWebHistory(base?)`: 原 `mode: 'history'`
  - `createWebHashHistory(base?)`: 原 `mode: 'hash'`
  - `createMemoryHistory(base?)`: 一般用于 SSR
- `base` 调整至 `history` 提供的函数
- `scrollBehavior` 原返回值 `{ x, y }` 调整为 `{ left, top }`

```js
import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(base?),
  routes: [],
  scrollBehavior
})
const app = createApp(App)
app.use(router)
```

### 组件中使用

组件中使用保留了选项式 API 的方式, 同时提供了组合式 API 的函数

- 访问路由
  - `useRoute()`: 等于 `this.$route`
  - `useRouter()`: 等于 `this.$router`
- 路由守卫
  - `onBeforeRouteLeave(to, from)`: 等于 `beforeRouteLeave` 钩子
  - `onBeforeRouteUpdate(to, from, next)` 等于 `beforeRouteUpdate` 钩子
  - 注意: `beforeRouteEnter` 钩子并没有对应的 组合式 API， 因为其阶段早于 `setup` (需要使用 选项式 API 描述)
- 链接相关
  - `useLink(props: VueUseOptions<RouterLinkOptions>)`: 对 `RouterLink` 进行解析
  - `RouterLink`: 路由链接信息

```js
import {
  useRoute,
  useRouter,
  useLink,
  RouterLink,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
const route = useRoute();
const router = useRouter();
```

## 内置组件变动

- `<router-view>` 增加了 `slot` 内容: `<router-view v-slot="{ Component, route }">`
  - `<keep-alive>`、`<transition>` 因而需要在 `<router-view>` 内部使用
- `<router-link>` 增加了 `slot` 内容: `<router-link v-slot="{ route, href, isActive, isExactActive, navigate }">`
  - `navigate` 为导航函数, 若要自定义 `tag`, 直接在内部插入对应元素即可
  - 移除了 `append`、`event`、`tag`、`exact` 属性

## 配置项变动

```js
// 路径正则的变动
const routes = [
  // 匹配任意路径
  { path: "/:pathMatch(.*)*" },
  // 匹配任意一级路径(注意少了个 '*')
  { path: "/:pathMatch(.*)" },
];
```

## 其他变动

参考 [迁移文档](https://router.vuejs.org/zh/guide/migration/)
