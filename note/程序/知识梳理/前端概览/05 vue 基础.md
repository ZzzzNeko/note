# vue 基础

## 描述组件

### 生命周期

vue2 生命周期

- `beforeCreate`: 组件创建之前 (初始化 默认事件和生命周期，此时组件 data 和 methods 未创建)
- `created`: 组件创建完成 (初始化 注入和反射，此时组件 data 和 methods 已创建)
- `beforeMount`: 组件挂载之前 (将模板编译为渲染函数，渲染函数用于生成 VNode)
- `mounted`: 组件挂载完毕 (将组件挂载为真实 DOM)
- `beforeUpdate`: 组件更新之前 (数据变更之前)
- `updated`: 组件更新完毕 (更新 VNode 并进行 patch)
- `beforeDestory`: 组件销毁之前 (组件销毁之前)
- `destoryed`: 组件销毁之后 (卸载 数据、方法、监听器、观察器、子组件)
- `activated`: 被 keep-alive 缓存的组件激活
- `deactivated`: 被 keep-alive 缓存的组件停用
- `errorCaptured`: 捕获到后代组件异常 (v2.5+ 新增)

vue3 生命周期, 大体保持一致, 以下部分名称有所调整

- `beforeDestory` -> `beforeUnmount`
- `destoryed` -> `unmounted`

组件调用顺序：先父后子，渲染完成顺序：先子后父 <br>
组件销毁顺序：先父后子，销毁完成顺序：先子后父

### 模板描述

- `v-if` & `v-show`: `v-if` 控制元素是否渲染, `v-show` 通过 `display: none` 控制元素是否展示
- `v-if` & `v-for` 优先级: vue2 中 `v-for` 优先级高, vue3 中 `v-if` 优先级高, **应避免同时使用**

### 数据响应

- `data`: 通常为返回对象的函数, 此处声明的数据是响应式的
  - 若直接使用对象 则该部分数据将在多个组件实例中共享
  - 若未在此处声明但需要增加响应式数据, 需要使用 `Vue.set(target, propName, value)`
- `computed`: 返回根据响应式数据计算获取返回值的函数
- `watch`: 监听响应式数据的变动, 并触发回调函数

## 组件通信

父子组件

- 父 -> 子：通过 `props` 传递信息
- 子 -> 父：通过 `$emit` 传递信息

后代组件

- 祖先 -> 后代：祖先通过 `provide` 提供数据，后代通过 `inject` 获取数据

任意层级

- 通过 `EventBus` 进行管理消息的发布和订阅
- 通过 `vuex`(vue2) / `pinia`(vue3) 管理全局的数据通信

## 内置组件

- `<component :is="xx" />`: 动态组件, 与 `<keep-alive>` 配合会触发 `activated` 和 `deactivated` 生命周期
- `<keep-alive :include="" :exclude="" max="10" />`: 包裹动态组件时，缓存不活动的实例
- `<teleport :to="" />`: 挂载传送, 将渲染内容挂载到指定元素下

## 功能扩展

### 扩展插件

```js
// vue2
const opts = { demo: true }; // 可选参数
const plg2 = {
  install(Vue, opts) {
    // 插件逻辑
  },
};
Vue.use(plg2, opts); // 作用于全局
```

```js
// vue3
const plg3 = {
  install(app, opts) {
    // 插件逻辑
  },
};
app.use(plg3, opts); // 作用于app
```

### 扩展指令

```js
// vue2
Vue.directive("demo", {
  bind() {}, // 只调用一次，指令第一次绑定到元素时调用
  inserted() {}, // 被绑定元素插入父节点时调用
  update() {}, // 所在组件的VNode更新时调用
  componentUpdated() {}, // 指令所在组件的VNode及其子VNode全部更新后调用
  unbind() {}, // 只调用一次，指令与元素解绑时调用
});
```

```js
// vue3
app.directive("demo", {
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}
  unmounted() {}
});
```

```js
/** 参数
  - `el` : 指令绑定的元素
  - `binding` <Object>
    - `name` : 指令名，即指令注册时的名称(不含`v-`)
    - `value` : 指令的绑定值，即给指令所赋的值(`=`后面的值)
    - `oldValue` : 指令绑定的前一个值，仅在`update`和`componentUpdated`钩子中可用
    - `expression` : 字符串形式的指令表达式，即给指令所赋的表达式(`=`后面的表达式，未计算成值)
    - `arg` : 传给指令的参数，可选(使用形式为`v-directive:attr`时，`attr`为其参数)
    - `modifiers` : 包含修饰符的对象(使用形式为`v-directive.modi1.modi2`时，修饰符对象为`{ modi1: true, modi2: true }`)
  - `vnode` : Vue 编译生成的虚拟节点
  - `oldVnode` : 上一个虚拟节点，仅在`update`和`componentUpdated`钩子中可用
 */
```
