# vue2

## 写在前面

由于 vue 生态已切换至 vue3, 因而项目搭建时需要注意其版本

- vue2.7 为最后一个版本，移植了 vue3 的 `<script setup>` 与组合式 API 等功能
- vue2 的终止维护时间为 23 年结束, 因而**不建议新项目使用 vue2 开发**

[vue2](https://v2.cn.vuejs.org/) 与 [vue3](https://cn.vuejs.org/) 生态的变化

- 开发生态: (`vue2` + `vue-router 3.x` + `vuex`) -> (`vue3` + `vue-router 4.x` + `pinia`), 提升了 api 的原子化，提高了开发的灵活度和复用性
- 构建生态: (基于 `webpack` 的 `vue-cli`) -> (基于 `ES 模块` 的 `vite`), 实现了开发时按需加载, 极大提高了开发体验

## 项目开始

通过包安装，若作为项目主要框架还需手动进行环境搭建

```shell
# 安装 vue2，需要指定其版本
npm i vue@2.7
```

---

通过 [`vue-cli`](https://cli.vuejs.org/zh/) 初始化项目, 注意 `vue-cli` 已处于维护模式

```shell
npm i -g @vue/cli
vue create <project-name>
```

---

通过 [`vite`](https://cn.vitejs.dev/) 初始化项目, 注意 `vite` 默认不支持 `vue2`, 需要手动处理

```shell
pnpm create vite
# 选择 vue 并进入项目
pnpm i vue@2.7
pnpm i -D vite-plugin-vue2
pnpm un @vitejs/plugin-vue
```

```js
// vite.config.js
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
export default defineConfig({
  plugins: [createVuePlugin()],
});
```

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
new Vue({ render: h => h(App) }).$mount("#app");
```

## 基本语法

### vue 实例

```js
// 基本配置
const vm = new Vue({
  el: "#demo", // 挂载元素, 也可通过 `vm.$mount(el)`
  template: "", // 模板
  props: {
    demoString: String,
    demoNumber: [Number, String],
    demoDefault: {
      type: String,
      default: "demo",
    },
  },
  data() {
    // 数据, 一般是返回对象数据的方法, 若为对象则存在共用问题
    return {
      num: 0,
      obj: { o: { b: "j" } },
    };
  },
  computed: {
    // 计算属性
    db_num() {
      return this.num * 2;
    },
    triple: {
      get() {
        return this.num * 3;
      },
      set() {},
    },
  },
  watch: {
    num(newVal, oldVal) {
      // do something
    },
    obj: {
      handler(newVal, oldVal) {},
      deep: true,
    },
  },
  filters: {}, // 过滤器
  methods: {}, // 方法
});
```

```js
// 生命周期
const vm = new Vue({
  // 初始化 events & lifecycle 后触发
  beforeCreate() {},
  // 初始化 injections & reactivity 后触发
  created() {},
  // 编译 template 或将 el 的 outerHTML 作为 template 编译后触发
  beforeMount() {},
  // 创建 vm.$el 并替换 el 后触发
  mounted() {},
  // data 修改后触发 (此时 DOM 还没同步)
  beforeUpdate() {},
  // data 修改后且虚拟DOM完成了更新后触发(此时 DOM 已更新)
  updated() {},
  // 调用 vm.$destory() 后触发
  beforeDestory() {},
  // 卸载 数据监听、事件监听、子组件 后触发
  destoryed() {},
});
```

```js
// 挂载、销毁
vm.$mount("#demo"); // 挂载到指定元素
vm.$destory(); // 销毁实例，该操作会保留已经渲染的 HTML
```

```js
// nextTick: 数据更新后 DOM 是非同步更新的, nextTick 为DOM更新后的回调
vm.$nextTick(cb);
```

### 模板语法

**描绘元素内容**

```html
<a>双括号内为动态渲染的内容，可以是变量或表达式{{ msg }}</a>
<a>可以使用一或多个过滤器{{ msg | filterA | filterB(params) }}</a>
<a v-text="`使用 v- 作为前缀为指令, 其内容为表达式, 如 ${msg}`"></a>
<a v-html="`这里内容不经过转义直接插入 HTML, 如 <p>渲染为p标签</p>`"></a>
<a v-bind:src="src">v-bind 可以绑定属性</a>
<a v-bind:[attrName]="attrVal">v-bind 绑定的属性也可以是动态的</a>
<a :[attrName]="attrVal" :class="'url'">v-bind 可以简写为 ':'</a>
<a :class="'-active'">class 属性与其他 v-bind 一样接受字符串</a>
<a :class="{ -active: isActive }">class 属性可以接受对象, 可以更加灵活的切换</a>
<a :class="[urlClass, stateClass]">class 属性可以接受数组</a>
<a :class="[{ url: isUrl }, isActive ? '-active' : '']">
  class 属性的数组可以是表达式或对象, 其中空字符串在渲染时会被过滤
</a>
<a v-on:click="onClick">v-on 可以绑定监听事件</a>
<a @click="onClick('xxx', $event)">'@'为简写, 原生事件参数可通过 $event 访问</a>
<a @click.stop="onClick">'.后缀'为修饰符, 常用于修饰事件, 也可用于自定义场景</a>
<input v-model="input" />
```

补充内容

- `v-on` 监听事件的修饰符
  - `.stop`: 调用 `event.stopPropagation()`
  - `.prevent`: 调用 `event.preventDefault()`
  - `.capture`: 事件监听使用 capture 模式
  - `.self`: 事件监听需要从元素本身触发才触发回调
  - `.native`: 监听组件根元素的原生事件
  - `.once`: 只触发一次回调
  - `.[keyCode | keyAlias]`: 监听键盘事件指定按键或按键别名, 对于鼠标则为 `.left`、`.right`、`.middle`
- `v-model` 限制于原生表单元素和复合规范的自定义组件使用, 其本质是对特定事件和属性值的复合处理
  - 原生表单控件
    - `<input>`、`<textarea>`: 监听 `input` 事件并赋值给 `value` 属性
    - `<select>`: 监听 `change` 事件并赋值给 `value` 属性
    - `<checkbox>`、`<radio>`: 监听 `change` 事件并赋值给 `checked` 属性
  - 自定义组件
    - 默认为接受 `value` 属性并触发 `input` 事件
    - 可以通过 `model: { prop: '', event: '' }` 修改默认的配置
  - 修饰符
    - `.lazy`: 取代 `input` 事件，改为监听 `change` 事件
    - `.number`: 对输入内容转为数字
    - `.trrm`: 对输入内容过滤收尾空格
- 模板中特定的指代
  - `$emit`: 为 `vm.$emit` 的简写, 若方法较为简单, 可以借此省略在 `methods` 上的定义
  - `$attrs`: 当前组件的属性(不含 class 和 style)传递给指定组件, 对应组件若配置了相同的 `props` 则可以实现透传赋值
  - `$event`: 指代原生事件的回调参数, 若回调参数需要额外的包装(如增加场景参数提高复用性), 则可以借助该属性
- 模板中特定的属性
  - `key`: 元素的标识, VNode 在做 patch 时会依次提高性能, `v-for` 渲染列表时须要指定唯一值
  - `ref`: 渲染元素或组件的引用, 挂在与 `this.$refs` 上, 需要在 `mounted` 之后才能访问到
  - `is`: 用于动态组件 `<component />`

---

**控制编译流程**

```html
<a v-pre>{{ 跳过编译过程，可用来展示双括号 }}</a>
<a v-cloak>这里的内容在编译结束前不会显示</a>
<a v-once>渲染一次后, {{ msg }}视为静态内容</a>
```

---

**控制元素渲染**

```html
<a v-show="isVisible">通过切换 css display 控制元素展示</a>
<a v-if="isRender">渲染或销毁 组件或元素</a>
<a v-else-if="isElseIfRender">与 v-if 连用</a>
<a v-else>与 v-if 或 v-else-if 连用</a>
<a v-for="item in list" :key="item.id">根据数组渲染多元素</a>
<a v-for="(item, index) in list" :key="index">根据数组渲染多元素</a>
<a v-for="val in obj" :key="val">根据对象渲染, 经过 Object.keys() 遍历转换</a>
<a v-for="(val, key) in obj" :key="key">根据对象渲染多元素</a>
<a v-for="(val, key, index) in object" :key="key">根据对象渲染多元素</a>
<a v-for="item in list" v-if="item.showRender">v-for 优先级高于 v-if</a>
```

---

**插槽**

```html
<!-- 这里假设是个 Demo 组件 -->
<div>
  <div>预留默认的插槽位置 <slot /></div>
  <div>预留具名的插槽位置 <slot name="demo" /></div>
  <div>传递属性的插槽 <slot name="attr" :user="user" /></div>
  <div>传递属性的插槽 <slot name="attr2" :user="user" :item="item" /></div>
</div>

<!-- 使用 Demo 组件并插入内容 -->
<Demo>
  <template v-slot:default>
    <span>v-slot 必须在 template 上使用, 插槽的内容可以是多个节点</span>
    <span>插到默认插槽中, default 可以省略</span>
    <span>vue2.6 废弃了 slot、slot-scope, 这里不再介绍</span>
  </template>
  <template #demo>
    <span demo>井号表示简写, 但默认插槽该写法名称不可省略</span>
  </template>
  <template v-slot:attr="slotProps">
    <span>{{ slotProps.user }}</span>
  </template>
  <template #attr2="{ user, item }">
    <span>可以直接解构{{ `${user}: ${item}` }}</span>
  </template>
</Demo>
```

## 组件交互

组件是可复用的 Vue 实例，但由于其可复用性，会有一些限制

- 不能指定如 `el` 这种实例化时特有的属性
- `data` 属性需要是一个返回对象的函数, 否则复用时引用的是同一份数据

### 注册引入

```js
// 全局组件注册, 两种命名方式都可以
Vue.component("CompName", {
  /** 组件配置, 略 */
});
Vue.component("comp-name", {
  /** 组件配置, 略 */
});
```

```js
// 在组件中引入组件
import CompName from "./demo/CompName.vue";
export default {
  components: { CompName },
};
```

```html
<!-- 组件使用 -->
<template>
  <CompName />
  <comp-name />
</template>
```

### 组件通信

- 父子组件通信
  - 组件通过配置 `props` 接受外部传入的属性, 接受的属性不应当对其进行修改
  - 组件通过使用 `$emit` 分发事件给外部回调
- 祖先向下派发
  - 祖先组件通过 `provide: Object | () => Object` 描述向下提供的注入内容
  - 子孙组件通过 `inject: string[] | { [key: string]: string | Object }` 选择性指定需要接受的字段
    - 若为数组, 其元素代表祖先注入内容的字段的 `key`
    - 若为对象, 其 `key` 为本地名称, `val` 是祖先注入对象的 `key`
    - 若为对象, 其 `val` 还可以是 `{ from: string, default }` 格式的对象, 额外提供了默认值的配置
- 非父子组件通信
  - 通过 `Event` 手动进行管理
  - 借助第三方库，如 `vuex` 进行统一管理

```html
<!-- 定义组件: 假设是 Add -->
<template>
  <button @click="$emit('add', num + 1)">点我加1</button>
</template>
<script>
  export default { props: { num: Number } };
</script>
```

```html
<!-- 使用组件 -->
<template>
  <Add :num="num" @add="onAdd" />
</template>
<script>
  import Add from "./demo/Add.vue";
  export default {
    components: { SubComp },
    data() {
      return { num: 0 };
    },
    methods: {
      onAdd(num) {
        this.num = num;
        console.log("现在是: ", num);
      },
    },
  };
</script>
```

### 内置组件

- `<component :is="SomeComp" />`: 动态组件, `is` 表示实际渲染的组件, 取值可以是 组件定义 或 组件名称
- `<slot />`: 插槽, 可以指定一个 `name` 属性
- `<keep-alive></keep-alive>`: 缓存包裹的组件, 可以通过参数指定缓存规则(对应组件需要配置 `name` 属性)
  - `include`: 字符串或正则, 只有匹配的组件名称会被缓存
  - `exclude`: 字符串或正则, 只有匹配的组件名称不会缓存
  - `num`: 数字, 限制缓存的最大实例
- `<transition>`、`<transition-group>`: 见 [过渡动画](#过渡动画)

### 异步组件

异步组件可以在需要时才进行加载, 加载后会进行缓存

```js
// 通过 resolve 加载
Vue.component("async-comp", function (resolve) {
  setTimeout(resolve({}), 1000);
});
// 通过 import 加载
Vue.component("async-comp", () => import("./async-comp.vue"));
// 局部注册
export default {
  components: { "async-comp": () => import("./async-comp.vue") },
};
```

## 过渡动画

### `<transition>`

`<transition>` 用于元素或组件进入、离开时的过渡表现, 默认通过在不同阶段切换对应的类名实现

- 应用条件
  - 条件渲染(`v-if`)、条件展示(`v-show`)
  - 动态组件
  - 组件根节点
- 类名后缀(`<transition name="fade">` 会根据 `name` 自动添加后缀, 如 `fade-enter-active`)
  - `-enter`: 元素插入之前, 应用过渡动画的开始
  - `-enter-active`: 元素插入时, 应用过渡动画的主体
  - `-enter-to`: 元素插入后, 应用过渡动画的结束
  - `-leave`: 元素移除之前, 应用过渡动画的开始
  - `-leave-active`: 元素移除时, 应用过渡动画的主体
  - `-leave-to`: 元素移除后, 应用过渡动画的结束
- 指定类名: 通过对应属性手动配置
  - `enter-class`
  - `enter-active-class`
  - `enter-to-class`
  - `leave-class`
  - `leave-active-class`
  - `leave-to-class`
- 指定事件: 通过对应事件钩子配置, 回调参数为 `(el, done?: () => void)`
  - `@before-enter`
  - `@enter`: 有可选回调参数 `done`
  - `@after-enter`
  - `@enter-cancelledd`
  - `@before-leave`
  - `@leave`: 有可选回调参数 `done`
  - `@after-leave`
  - `@leave-cancelled`: 只用于 `v-show`
- 初始渲染: `<transition appear>`
  - 指定类名: `appear-class`、`appear-active-class`、`appear-to-calss`
  - 指定事件: `@before-appear`、`@appear`、`@after-appear`、`@appear-cancelled`
- 过渡模式: 在做元素切换的场景(`v-if & v-else`、`<component :is="">`)需要调整过渡模式, 通过 `mode` 属性指定
  - `in-out`: 新元素先过渡, 完成后当前元素过渡离开
  - `out-in`: 当前元素先过渡, 完成后新元素过渡进入

### `<transition-group>`

`<transition-group>` 用于对列表项目进行过渡

- 指定事件或指定类名: 与 `<transition>` 相同(作用与列表元素而非该容器)
- 元素渲染: 与 `<transition>` 不同, 该组件会渲染为真实的元素, 默认 `<span>` 可通过 `tag` 指定
- 过渡模式(`mode`)不可用, 且内部元素需要提供 `key`
- **元素移动**: 由于列表元素过渡, 通常会伴随着元素定位的调整, 因而增加了 `-move` 后缀的类名

## 渲染函数

[渲染函数](https://v2.cn.vuejs.org/v2/guide/render-function.html)相当于通过 `createElement` 来描述元素, 一般简写为 `h` 函数, 基本格式如下

```js
export default {
  render(createElement) {
    return; // @returns {VNode}
    createElement(
      // {String | Object | Function}
      // 一个 HTML 标签字符串，组件选项对象，或者
      // 解析上述任何一种的一个 async 异步函数。必需参数。
      "div",
      // {Object}
      // 一个包含模板相关属性的数据对象
      // 你可以在 template 中使用这些特性。可选参数。
      {
        // (见下面 数据对象示例)
      },
      // {String | Array}
      // 子虚拟节点 (VNodes)，由 `createElement()` 构建而成，
      // 也可以使用字符串来生成“文本虚拟节点”。可选参数。
      [
        "先写一些文字",
        createElement("h1", "一则头条"),
        createElement(MyComponent, {
          props: {
            someProp: "foobar",
          },
        }),
      ]
    );
  },
};
```

```js
// 数据对象示例
{
  // 与 `v-bind:class` 的 API 相同，
  // 接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，
  // 接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```

## 功能扩展

### 混入

对于重复度较高的组件配置, 可以单独提取出来, 随后通过 `mixins` 混入, 以提高代码复用性

- 对于相同的选项, 将进行合并处理, 若冲突, 则以 组件数据优先
- 使用 `Vue.mixin` 可以进行全局混入, 之后的每个 Vue 实例都会注入混入逻辑
- **在实际开发的多人项目中, 请禁用 `Vue.mixin`，慎用 `mixins`, 该操作并不会提高效率反而会增加项目维护成本**

```js
// 定义一个混入对象, 其内容为 组件的一部分
const commonPart = {
  created() {}, // 可以是一些通用的逻辑等
};
// 在组件中引入混入对象
export default {
  mixins: [commonPart],
};
```

### 自定义指令

```js
/**
 * 全局注册指令, 使用时需要加上 'v-' 前缀, 如这里为 'v-demo'
 * 参数说明:
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
  - 说明
    - 处理`el`参数，其他参数都应是只读的
 */
Vue.directive("demo", {
  bind() {}, // 只调用一次，指令第一次绑定到元素时调用
  inserted() {}, // 被绑定元素插入父节点时调用
  update() {}, // 所在组件的VNode更新时调用
  componentUpdated() {}, // 指令所在组件的VNode及其子VNode全部更新后调用
  unbind() {}, // 只调用一次，指令与元素解绑时调用
});
// 简写方式, 默认配置于 `bind` 和 `update` 钩子上
Vue.directive("demo", function () {});

// 局部注册指令
export default {
  directives: {
    demo: {},
  },
};
```

### 自定义插件

```js
// 定义插件, 需要提供一个 install 方法
// 插件通常用来给示例挂载通用方法，批量加载全局组件、全局指令，或者实现自定义功能等
const somePlugin = {
  install(Vue, options) {
    Vue.component("demo", {});
    Vue.directive("some", function () {});
    Vue.prototype.$http = axios;
  },
};
// 引入插件, 通过 Vue.use 加载插件, options 为可选
Vue.use(somePlugin, options);
```

## 项目开发

### SFC

实际项目中通常采用 单文件组件(SFC) 的形式进行开发, 文件扩展名为 `.vue`, 使用时需要通过 `vue-loader` 进行解析

```html
<template lang="pug"> div 这里进行模板描述 </template>
<script lang="ts">
  export default {};
</script>
<style lang="sass" scoped>
  /* 这里进行样式描述, scoped 表示只作用于当前组件 */
</style>
```

### 环境搭建

- 通过 `vite`: 见 [项目开始](#项目开始)
- 通过 `vue-cli`: `vue-cli` 基于 `webpack` 提供了初始化的模板, 若需定制可参考 [文档](https://cli.vuejs.org/zh/)
- 通过 `webpack`: 需要安装解析依赖 `vue-loader`、`vue-template-compiler`, 并配置 `loader` 和 `plugin`
  - 使用 `pug`: 需要安装 `pug`、`pug-plain-loader`
  - 使用 `ts`: 需要安装 `typescript`、`ts-loader`
  - 使用 `sass`: 需要安装 `sass-loader` 并配置 `sassOptions: { indentedSyntax: true }`(否则默认为 `scss`)

```js
// webpack.config.js 其他配置 略
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  rules: [{ test: /.vue$/, loader: "vue-loader" }],
  plugins: [new VueLoaderPlugin()],
};
```
