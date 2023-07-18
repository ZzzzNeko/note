# vue2: vue-router

## 写在前面

vue-router 是一个 vue 插件, 用于进行路由管理

- 与 vue2 对应的版本: [`vue-router 3.x`](https://v3.router.vuejs.org/zh/)
- 与 vue3 对应的版本: [`vue-router 4.x`](https://router.vuejs.org/zh/)

这里以 vue-router 3.x 为基础进行描述

## 快速开始

安装

```shell
npm i vue-router@3.6 --save
```

配置&引入

```js
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  // { path: '/', component: HomePage }
];
const router = new Router({ routes });
new Vue({ router });
```

组件中使用

```html
<template>
  <div>
    <div>
      <router-link to="/home" />
      <button @click="routerTo('/user')" />
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    methods: {
      routerTo(path) {
        console.log(this.$route);
        console.log(this.$router);
        this.$router.push(path);
      },
    },
  };
</script>
```

## 路由导航

### 通过模板

- 导航链接: `<router-link>`, 生成一个点击触发 `router` 导航的元素, 默认为 `<a>` 标签, 方式为 `router.push`, 属性参数包括
  - `to: string | Location`: 目标路由地址(相当于指定`path`)或对象(`{ name?: string, path?: string, query?: object, params?: object }`)
  - `replace: boolean`: 默认 `false`, 使用 `router.replace` 代替 `router.push`
  - `append: boolean`: 默认 `false`, 在跳转路径前增加当前路径为基路径
  - `exact: boolean`: 默认 `false`, 激活路由由**包含匹配**调整为**精确匹配**
  - `tag: string`: 默认 `'a'`, 渲染的标签
  - `event: string | string[]`: 默认 `'click'`, 触发导航的事件
  - `active-class: string`: 默认 `'router-link-active'`, 激活时的类名(默认是**包含匹配**)
  - `exact-active-class: string`: 默认 `'router-link--exact-active'`, 链接精确匹配时的类名
- 路由视图: `<router-view>`, 渲染匹配到的路由对应的组件, 属性参数包括
  - `name: string`: 默认 `'default'`, 该属性用于 命名视图 场景

```html
<router-link to="/home" />
```

### 通过代码

```js
// 对应组件中使用 this.$router[fn] 即可
router.push(location, onComplate?, onAbort?)  // location: { name?: string, path?: string, query?: object, params?: object }
router.push(location).then(onComplate).catch(onAbort)
router.replace(location, onComplate?, onAbort?)
router.replace(location).then(onComplate).catch(onAbort)
router.go(n) // 正数为前进, 负数为后退
router.back() // 后退
router.forward() // 前进
```

## 路由规则

### 配置路由

```ts
// 类型定义
interface RouteConfig = {
  path: string,
  component?: Component,
  name?: string, // 命名路由
  components?: { [name: string]: Component }, // 命名视图组件
  redirect?: string | Location | Function,
  props?: boolean | Object | Function,
  alias?: string | Array<string>,
  children?: Array<RouteConfig>, // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void,
  meta?: any,
  // 2.6.0+
  caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object // 编译正则的选项
}
```

**补充说明 `props`** (官方文档中缺少了)

- 布尔模式: 设置 `props: true` 会将 `$route.params` 转换为对应的 `props`
- 对象模式: 设置需要传递的 `props` 对象, 用于传递**静态**数据
- 函数模式: 接受 `route` 作为第一个参数, 可以实现复杂的 `props` 传递

```js
// 简单路由
const routes = [
  { path: "/xxx", component: XXX }, // 简单的路由地址
  { name: "demo", path: "/xxx", component: XXX }, // 命名路由, 若 path 可能随着项目发生变化 或 过长等情况, 使用 name 替代更为方便, 注意 name 唯一
  { path: "/xxx/:xx", component: XX }, // 动态的路由地址, 冒号部分表示动态值(后面为参数名), 可以通过 `$route.params` 访问
  { path: "/user/:name/fav/:item", component: UserItem }, // 示例, 这里的 $route.params 为 { name: string, item: string }
  { path: '/*', redirect: '/404' }, // 重定向
  { path: '/demo', alias: '/example' }, // 别名 (如, 这里表示访问 '/example' 等于访问 '/demo', 但 url 地址保持为 '/example')
  { path: '/lazy', component: () => import(/* webpackChunkName: "Lazy" */ './Lazy.vue') }, // 懒加载
  { path: '/meta', meta: { xxx: 'xx' } } // 元信息, 可以在 $route.matched 中筛选后访问
  { path: '/note', component: Note, props: { mode: 'read' } } // props
];
// 嵌套路由
const routes = [
  {
    path: '/user',
    component: User,
    children: [ // 注意: 子路由 path 会以父级路径为基路径, 若以 '/' 开头则会当作更路径
      { path: 'star', component: XX }
      { path: 'item', component: XX }
    ]
  }
];
/**
 * 命名视图 - 若需在同级路由展示多个视图, 可以使用多个 `<router-view name="" />`, 这里的 'name' 对应此处配置的 components 属性名
 * 如: 此处视图为 `<router-view />`、`<router-view name="aside">`、`<router-view name="footer">`
 */
const routes = [
  {
    path: '/multiViews',
    components: {
      default: Main,
      aside: Aside,
      footer: Footer
    }
  }
];
```

### 路由信息

```js
$route.name; // 路由 name
$route.path; // 当前路径
$route.fullPath; // 当前路径, 包含 query 和 hash
$route.params; // 动态路由的动态地址信息
$route.query; // 跳转地址携带的 query 信息
$route.hash; // 跳转地址携带的 hash 信息
$route.redirectedFrom; // 重定向的来源地址
$route.matched; // 匹配的当前路由的所有嵌套路径片段的路由记录
```

### 历史模式

```js
/**
 * history 模式
 * - 默认为 'hash' 模式, 路由内容放在 '#' 后面
 * - 'history' 模式, 路由表现为常规模式, 但需要服务端支持, 需要针对地址访问忽略 path 的解析, 直接返回 index.html
 */
const router = new VueRouter({
  mode: "history",
  routes: [],
});
```

### 滚动行为

```ts
type Position = { x: number; y: number };
type ScrollBehavior = "auto" | "instant" | "smooth"; // 滚动模式, instant-瞬间 smooth-平滑
type PositionResult =
  | Position
  | { selector: string; offset?: Position; behavior?: ScrollBehavior }
  | void;
type scrollBehaviorHandler = (
  to: Route,
  from: Route,
  savedPosition: Position | void
) => PositionResult | Promise<PositionResult> | undefined | null;
```

```js
const router = new VueRouter({
  routes: [],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return to.hash ? { selector: to.hash } : savedPosition || { x: 0, y: 0 };
  },
});
```

## 导航守卫

导航守卫即对导航流程中的各个阶段增加钩子处理, 导航流程如下

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。

### 全局守卫

```js
const router = new VueRouter({}); // 配置略
/**
 * 全局前置守卫 .beforeEach
 */
router.beforeEach((to, from, next) => {
  // ...
  next(); //确保要调用 next 方法，否则钩子就不会被 resolved。
});
/**
 * 全局解析守卫 .beforeResolve
 * 在导航被确认之前, 同时在所有组件内守卫和异步路由组件被解析之后触发
 */
router.beforeResolve((to, from, next) => {});
/**
 * 全局后置守卫 .afterEach
 */
router.afterEach((to, from) => {
  //没有next方法
});
```

参数说明

- `to: Route`: 即将要进入的目标 路由对象
- `from: Route`: 当前导航正要离开的路由
- `next: Function`: 必须执行该方法确保 `resolve` 该钩子, 否则钩子会被 `rejected`
  - `next()`: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
  - `next(false)`: 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
  - `next('/')` 或 `next({ path: '/' })`: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

### 路由守卫

```js
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    // 在进入路由前触发, 参数同全局前置守卫
    beforeEnter(to, from, next) {
      // ...
    },
  },
];
```

### 组件守卫

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`, 因为当钩子执行前，组件实例还没被创建
    // 可以传递回调函数给 next 访问组件实例
    next(vm => {
      /** do something */
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`, next 中不接收回调
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`, next 中不接收回调
    // 通常用来禁止用户在还未保存修改前突然离开, 通过 `next(false)` 来取消导航
  },
};
```
