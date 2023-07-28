# vue3

[vue3](https://cn.vuejs.org/) 相较于 vue2 语法层面变动不大，继承了选项式 API 的语法, 还添加了组合式 API 的语法, 这里描述常用的 [迁移性](https://v3-migration.vuejs.org/zh/) 变动为主

## 生态变动

- 核心库: `vue2` -> `vue3`
- 路由库: `vue-router3.x` -> `vue-router4.x`
- 状态库: `vuex3.x` -> `pinia`
- IDE 插件: `vetur` -> `volar`
- 项目构建: `vue cli` -> `vite` + `vue-tsc`
- 文档生成: `vuepress` -> `vitepress`

## 项目开始

```shell
npm create vite
```

```ts
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```

```vue
<template>
  <div></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
```

## 组合式 API

组合式 API 是对于 选项式 API 的映射, 但由于其函数形式的描述, 带来了以下特点

- 易于管理的逻辑复用, 解决了 `mixins` 带来的复杂度
- 灵活管理功能逻辑, 跳出了 `data`、`methods` 统一管理数据、逻辑的方式
- `ts` 支持更好, 代码压缩更好(不依赖实例)

组合式 API 应用在 `setup() {}` 钩子中, 具有以下特点

- `setup` 返回值暴露给模板和组件实例, 且覆盖选项式中的同名定义
- `setup` 中访问 `this` 为 `undefined`
- `setup(props, context)` 接收两个参数, `props` 是响应式的, `context` 是非响应式的
  - `context` 包括 `attrs`、`slots`、`emit`、`expose`
- `setup` 可以满足绝大数组件声明的情况, 开发中通常使用 `<script setup>` 将整个代码块描述为 `setup`

### 响应式 API

```ts
/**
 * 声明数据
 * - ref: 接受数据并返回响应式代理, 返回值通过 .value 访问, 若值为对象, 则会经过 reactive 处理
 * - reactive: 接受对象并返回响应式代理, 访问时与原对象无异, 但使用解构后的值是没有响应式的
 * - readonly: 与 reactive 相同, 但对象内容是只读的
 * - computed: 接受有返回值的函数或 { get(), set() } 对象, 并返回响应式代理, 返回值通过 .value 访问
 * shallowRef(val)、shallowReactive(obj)、shallowReadonly(obj): 为对应的浅层代理
 */
import { ref, reactive, readonly, computed } from "vue";
import { shallowRef, shallowReactive, shallowReadonly } from "vue";
const a = ref(1);
a.value++;
a.value; // 2
const b = ref({ b: "b" });
b.value.b; // 'b'
const c = reactive({ c: "" });
c.c = "c";
c.c; // 'c'
const d = readonly({ d: "d" });
const e = computed(() => c.c + d.d);
const f = computed({
  set: val => {},
  get: () => c.c + d.d,
});
// reactive 除了 Object 还支持 Array, Set, Map, 对于 Map 若需要修改其值建议结合 ref 使用
const g = reactive(
  new Map([
    ["demo1", ref("some")],
    ["demo2", ref("other")],
  ])
);
```

```ts
/**
 * 监听数据
 * - watch: 接一或多个数据, 当数据变动时触发回调
 * - watchEffect：接受一个函数, 其内部响应式数据变动时触发回调, 该函数在创建时会执行一次, 并返回一个停止监听的函数
 */
import { ref, watch, watchEffect } from "vue";

const first = ref("");
const second = ref("");
const state = ref(true);
// 返回值是一个函数, 调用后移除监听
const stopEffect = watchEffect(() => {
  first.value;
  second.value;
  console.log("响应式数据变动时执行");
});
// 针对数据进行监听
watch(state, (state, preState) => {
  if (!state.value) stopEffect(); // 移除上述 watchEffect 监听
});
const obj = reactive({ key: "val" });
const noop = () => {}; // 占位
watch(() => obj.key, noop); // 针对某个属性监听
watch([first, second], ([first, second], [prevFirst, prevSecond]) => {}); // 多个数据

/**
 * watchEffect 还支持第二个可选项
 * - flush: 为触发时机
 *  - 'pre': 默认状态, 在组件渲染之前执行, 若 watchEffect 中有多个变动的响应式对象, 在一次同步流程中只触发一次回调
 *  - 'post': 与 'pre' 对应，在组件渲染之后执行, 别名函数 watchPostEffect
 *  - 'sync': 若 watchEffect 中有多个变动的响应式对象, 每变动一次都会触发一次回调, 别名函数 watchSyncEffect
 */
interface WatchEffectOptions {
  flush?: "pre" | "post" | "sync"; // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void;
  onTrigger?: (event: DebuggerEvent) => void;
}

/**
 * watch 也支持第二个可选项
 * - immediate: 是否立即执行一次, 默认不执行, 与 watchEffect 不同的是 watchEffect 必须立即执行一次
 * - flush: 与 watchEffect 相同; 但 watch 一般较少监听多个数据, 通常不需要调整该策略
 * - deep: 是否深度监听
 */
interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean; // 默认：false
  deep?: boolean; // 默认：false
  flush?: "pre" | "post" | "sync"; // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void;
  onTrigger?: (event: DebuggerEvent) => void;
}
```

```ts
/**
 * 工具函数
 */
const str = ref("str");
const obj = reactive({ obj: true });
const oly = readonly({ changed: false });

isRef(str); // true  判断是否为 ref 或 shallowRef 创建的对象
isReactive(obj); // true 判断是否为 reactive 或 shallowReactive 创建的对象
isReadonly(oly); // true 判断是否为 readonly 或 shallowReadonly 创建的对象
isProxy(str); // false 判断是否为 reactive、readonly、shallowReactive、shallowReadonly 创建的对象
isProxy(oly); // true

unref(str); // 'str'  等价于 `val = isRef(val) ? val.value : va`
// 返回 reactive、shallowReactive、readonly、shallowReadonly 的原始对象(代理对象属性修改也会修改原始对象)
toRaw(obj); // { obj: true }
toRaw(oly); // { changed: false }

markRaw(val); // 将数据标记为不可被转换为代理的, 谨慎使用
toRef(val); // 与 ref(val) 类似, 对于函数会创建只读的 ref
toRef(obj, key); // 将对象的属性转为响应式
toRefs(obj); // 将对象的全部属性转为响应式

triggerRef(shallowRefObj); // 强制触发一个 shallowRef 的副作用
```

### 依赖注入

- `provide` -> `provide()`
- `inject` -> `inject()`

### 声明周期钩子

生命周期进行了调整并提供了对应的钩子函数

- `beforeCreate` 无对应函数
- `created` 无对应函数
- `beforeMount` 对应 `onBeforeMount()`
- `mounted` 对应 `onMounted()`
- `beforeUpdate` 对应 `onBeforeUpdate()`
- `updated` 对应 `onUpdated()`
- `beforeUnmount` 对应 `onBeforeUnmount()`
- `unmounted` 对应 `onUnmounted()`
- `activated` 对应 `onActivated()`： 与 `<keep-alive>` 相关, 组件从 DOM 插入时触发
- `deactivated` 对应 `onDeactivated()`: 与 `<keep-alive>` 相关, 组件从 DOM 移除时触发
- `errorCaptured` 对应 `onErrorCaptured()`: 异常捕获
- `renderTracked` 对应 `onRenderTracked()`: **开发模式专用**, 组件渲染时追踪到响应式依赖时触发
- `renderTriggered` 对应 `onRenderTriggered()`: **开发模式专用**, 响应式依赖的变更触发了组件渲染时触发
- `serverPrefetch` 对应 `onServerPrefetch()`: **服务端渲染专用**, 组件实例在服务器上被渲染之前调用

注意

- `setup` 执行早于 `beforeCreate`
- **vue3 对 vue2 部分生命周期名称进行了调整**
  - `destroyed` -> `unmounted`
  - `beforeDestory` -> `beforeUnmount`

### `<script setup>`

`<script setup>` 是 `setup() {}` 的语法糖, 其语法更加简洁

- 无需 `return`, 代码块内声明的内容将自动暴露
- 无需 `components`, 代码块内引入的组件将自动注册
- 局部自定义指令无需显示注册, 但需遵循 `vNameOfDirective` 命名规范

对 `setup(props, { attrs， slots, emit, expose })` 的支持

- `props`: 通过 `const props = defineProps()` 定义
- `emit`: 通过 `const emit = defineEmits()` 定义, 顺带免去了选项式中 `emits` 的描述
- `slots`: 通过 `const slots = defineSlots()` 定义 或 `useSlots()` 函数
- `expose`: 通过 `defineExpose()` 定义

#### 泛型

通过 `generic` 可以声明泛型约束, 该方式可用于描述 `props` 中具有关联性的属性

```vue
<script setup lang="ts" generic="T extends string, U externds Item">
import type { Item } from "./some/types";
</script>
```

#### 编译器宏

`<script setup>` 中提供了 `defineProps` & `withDefaults`、`defineEmits`、`defineOptions`、`defineSlots`、`defineExpose` 编译器宏, 无需导入, 但随 `<script setup>` 处理时一同被编译掉

```ts
/**
 * defineProps 用于描述 props
 * - 可以通过返回值直接访问 props
 * - 支持 运行时声明 和 类型声明 两种形式, 注意 只能择其一
 */
// 运行时声明: 使用 选项式 props 中的规则
const props = defineProps({
  single: {
    type: String,
    default: "demo",
  },
  multi: [String, Boolean],
});

// 类型声明: 使用 ts 规则
interface Props {
  single: stirng;
  multi: string | boolean;
}
const props = withDefaults(defineProps<Props>(), {
  single: "demo",
});
```

```ts
/**
 * defineEmits 用于描述 emits
 * - 其定义相当于描述 emits 属性
 * - 其返回值相当于 $emit, 用于派发事件
 * - 支持 运行时声明 和 类型声明 两种形式, 注意 只能择其一
 */
// 运行时声明: 使用 选项式 emits 中的规则
const emits = defineEmits(["someEvent", "otherEvent"]);
const emits = defineEmits({
  someEvent: null, // 没有验证函数
  otherEvent: payload => isValid(payload),
});

// 类型声明: 使用 ts 规则
interface Emits {
  (ev: "someEvent"): void;
  (ev: "otherEvent", payload: any): void;
}
interface Emits {
  someEvent: []; // 具名元组语法 v3.3+ 新增
  otherEvent: [payload: any];
}
const emits = defineEmits<Emits>();

// 派发事件
emits("otherEvent", "demo");
```

```ts
/**
 * defineSlots 只接受类型参数, 相较于 useSlots() 增加了类型检查
 * - v3.3+ 新增
 * - 返回值与 useSlots() 或 setup() 上下文中的 slots 相同
 */
interface Slots {
  default(props: { someAttr: string }): any;
}
const slots = defineSlots<Slots>();
```

```ts
/**
 * 部分组件选项无法在 <script setup> 中直接声明, 如 `name`
 * defineOptions 用于声明组件选项, v3.3 新增
 */
defineOptions({
  name: "demo",
  inheritAttrs: false,
});
```

```ts
// defineExpose 用于暴露组件属性, 默认是不暴露 `<script setup>` 中的声明
const some = "some";
const other = ref();
defineExpose({ some, other });
```

## 内置组件

新增 `<Teleport>` 和 `<Suspense>` 组件

- `<Teleport>` 用于将包含内容渲染到指定元素下, 通常用于 模态框、消息、通知 等适合全局展示的内容
- `<Suspense>` 用于对异步组件, 在实际组件渲染完成前给定一个展示内容, **实验性** 组件，暂不介绍

```html
<template>
  <Teleport to="body">
    <div>这里的内容将被挂载到 body 中</div>
  </Teleport>
  <Teleport to="body">
    <div>多个 teleport 可以共享目标, 按顺序追加</div>
  </Teleport>
</template>
<script lang="ts">
  interface TeleportProps {
    // 指定容器 可以是选择器或元素
    to: string | HTMLElement;
    // 为 true 时 to 失效
    disabled?: boolean;
  }
</script>
```

## 其他变动

### 模板相关变动

- **组件模板可以包含多个根节点**
- **`v-model`** 语法变动
  - 默认属性与事件调整
    - `prop`: `value` -> `modelValue`
    - 事件名: `input` -> `update:modelValue`
  - 原先指定名称通过 `model: { prop, event }` 属性, 现在调整为根据 `v-model:attr` 参数
    - `v-model="xxx"` 默认为 `<div :modelValue="xxx" @update:modelValue="xxx = $event">`
    - `v-model:notDefaultName="xxx"`: 相当于 `<div :notDefaultName="xxx" @update:notDefaultName="xxx = $event">`
    - 因而调整后可以使用多个 `v-model`
- `v-if` 与 `v-for` 作用同元素时, **`v-if` 优先级更高**
  - 建议不要公用
  - 若要实现筛选, 先对 `v-for` 的数据源进行筛选
- `v-on.native` 修饰符删除
- 模板中独立属性覆盖 `v-bind` 调整为根据 `v-bind` 和独立属性出现的先后顺序进行合并
  - `<a name="a" v-bind="{ name: "changed" }">`: `name` 为 `changed`
  - `<a v-bind="{ name: "changed" }"  name="a">`: `name` 为 `a`

### 移除内容

- 按键修饰符: 移除 `keyCode`, 请使用按键名称
- 过滤器移除, 建议使用 `computed` 进行转换
- `$children` 移除, 官方建议使用模板引用
  - 从实际开发角度这点挺不友好, 尤其是在创建库组件时需要对 `slot` 内容进行交互的情况
- 全局和实例方法的移除:
  - 事件相关: `.$on`、`.$off`、`.$once`
  - 数据相关: `Vue.set`、`Vue.delete`、`.$set`、`.$delete`、
  - 组件相关: `Vue.extend`

### 组件与 APP

- APP 概念: 将实例调整为 APP(写法变动，本质没区别), 对应的**全局方法调整至当前 APP**(原先影响全部实例)
  - `new Vue({ })` -> `createApp({ })`
  - `Vue.extend` 移除, 统一用 `createApp({ })`
  - 全局方法调整至 `app`
    - `Vue.use` -> `app.use`
    - `Vue.directive` -> `app.directive`
    - `Vue.component` -> `app.component`
- 选项式 API 中可以使用 `defineComponet({})` 进行描述, 拥有更好的类型提示
- `nextTick()` 提供了独立的函数

自定义指令钩子变动: 调整为与组件生命周期名称一致

- 无 -> created
- bind -> beforeMount
- inserted -> mounted
- 无 -> beforeUpdate
- update -> 移除
- componentUpdated -> updated
- 无 -> beforeUnmount
- unbind -> unmounted

## 浅谈实战

vue3 语法层面的主要变动就是引入了组合式 API, 在经过 3.0-3.3 的持续迭代后, 基本补全了 `<script setup>` 的必要功能 <br />

开发上的建议

- 以组合式 API 和 `<script setup lang="ts">` 为主, 弃用 `mixin`
  - 对于编译器宏, 建议使用 类型描述 的方式进行声明
  - 建议变量与方法按逻辑进行划分而非统一管理
  - 对于 DOM 引用建议使用 `shallowRef`
- 评估系统复杂度后再考虑是否需要引入状态管理插件
  - 对于状态管理插件推荐 `pinia` 代替 `vuex`
  - 对于跨页交互较少的系统, 手动维护一个 `const store = reactive({})` 进行管理即可
