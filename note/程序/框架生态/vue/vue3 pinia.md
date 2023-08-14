# vue3: pinia

## 写在前面

[pinia](https://pinia.vuejs.org/zh/) 作为 vuex 在 vue3 的替代品主要解决了以下几个问题

- vuex 的类型声明在 vue3 项目中使用及其麻烦
- 独立的模块，不再需要嵌套的结构
- 简化冗余的操作定义，如 `commit` `mutation`(弃用)，`dispatch` `action`

## 快速开始

1. 安装

   ```shell
   pnpm i pinia
   ```

2. 引入

   ```js
   // main.ts
   import { createApp } from "vue";
   import { createPinia } from "pinia";
   import App from "./App.vue";

   const app = createApp(App);
   const pinia = createPinia();

   app.use(pinia).mount("#app");

   // 获取全局 pinia
   getActivePinia();
   ```

3. 定义

   ```js
   // 使用 `defineStore` 定义 store
   // 约定命名为 `useXxxStore`
   // `defineStore` 支持 option 风格(与 vuex 类似) 和 setup 风格
   // 定义 store 中可以使用其他 store
   import { defineStore } from "pinia";

   // option 风格
   export const useUserStore = defineStore("user", {
     state: () => ({ name: "", id: "" }),
     getters: {
       uppercaseName: state => state.name.toUpperCase(),
     },
     actions: {
       toLowCaseName() {
         this.name = this.name.toLowCase();
       },
     },
   });

   // setup 风格
   export const userUserStore = defineStore("user", () => {
     const name = ref("");
     const upercaseName = computed(() => name.value.toUpperCase());
     function toLowCase() {
       name.value = name.value.toLowCase();
     }
     return { name, upercaseName, toLowCase };
   });
   ```

4. 使用

   ```js
   // store 中定义的 state、getters、actions 会直接挂在 store 上
   // store 是一个 reactive 包装的对象，若需要解构，可以借助 `storeToRefs`
   // actions 可以直接解构
   import { storeToRefs } from "pinia";
   import { useUserStore } from "./some/path/userStore.ts";

   export default {
     setup() {
       const store = useUserStore();
       const { name } = storeToRefs(store);
       return { store, name };
     },
   };
   ```

5. 全局

   ```js
   // app.use(pinia) 之后可以通过 `getActivePinia` 访问全局 pinia
   import { getActivePinia } from "pinia";
   const pinia = getActivePinia();
   const storeId = "xxxStore"; // defineStore 中第一个参数
   pinia.state[storeId]; // 访问指定 store 的 state
   ```

## 核心概念

### state

常用操作

- `state` 中定义的是初始值
- 通过 `store` 实例可以直接访问并修改 `state`
  - `store[stateProp] = 'newVal'`
  - `store.$patch({ name: 'Zzzz', id: '777' })` 修改多个属性
  - `store.$patch(state => { })` 支持函数进行复杂的修改
  - `store.$state = { newVal: '' }` 直接赋值(内部调用 `$patch`, 不会修改引用)
  - `store.$reset()` 重置为初始值

属性映射

```js
// 与 vuex 类似，可以映射为只读的计算属性
import { mapState, mapWritableState } from "pinia";

export default {
  computed: {
    ...mapState(useUserStore, ["name"]),
    ...mapState(useUserStore, {
      rename: store => store.name,
    }),
  },
};

// 映射为可修改的 state
export default {
  computed: {
    ...mapWritableState(useUserStore, {
      rename: "name",
    }),
  },
};
```

订阅变动

```js
// $subscribe 相比于 watch，在 $patch 后只触发一次
store.$subscribe(
  (mutation, state) => {
    mutation.type; // 'direct' | 'patch object' | 'patch function'
    mutation.storeId; // 定义 store 时的 id
    mutation.payload; // $patch() 传递的对象
  },
  { detached: false } // 默认 false, 表示生命周期跟随组件
);
```

### getters

说明

- 类似于 computed 属性，`getter` 为 `state` 的计算值
- 可以通过 `this` 访问 `store` 实例
- 属性映射与 `state` 相同使用 `mapState`

```js
// this 访问 gettter
export const useStore = defineStore("num", {
  state: () => ({ base: 0 }),
  getters: {
    db: state => state.base * 2,
    dbAbs(): number {
      return Math.abs(this.db);
    },
  },
});
```

### actions

说明

- 类似于 methods, action 为操作 `state` 的方法，支持异步
- 类似 getter ，可以通过 `this` 访问 `store` 实例
- 属性映射使用 `mapActions`，映射至 `methods` 属性中

属性映射

```js
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(useUserStore, ["toLowCase"]),
    ...mapActions(useUserStore, {
      xxxx: "toLowCase",
    }),
  },
};
```

订阅 action

```js
const unsubscribe = store.$onAction(({ name, store, args, after, onError }) => {
  name; // action 名称
  args; // 传递给 action 的参数
  after(result => console.log("action 执行完毕后触发"));
  onError(error => console.warn("action 执行异常触发"));
}, true); // 第二个参数与 `store.$subscribe` 类似，为 true 表示生命周期跟随组件

unsubscribe(); // 移除监听
```

### 插件

说明

- 使用 `pinia.use` 加载插件
- 插件将在调用 `useXxxStore()` 生成实例时对当前 store 触发
- 若插件返回一个对象，则将对每个 store 实例都添加对应的属性
- 也可手动通过 `store` 进行扩展，但不会被 devtools 追踪
  - `process.env.NODE_EVN == 'development' && store._customProperties.add('extProp')` 在开发模式下手动追踪扩展属性
- 添加非响应属性时可以使用 `markRaw()` 包装

```js
import { createPinia } from "pinia";

function somePlugin(ctx) {
  ctx.pinia;
  ctx.app;
  ctx.store;
  ctx.options;
  return { globalProp: "demo" };
}
const pinia = createPinia();
pinia.use(somePlugin);

const someStore = useSomeStore();
someStore.globalProp; // 'demo'
```
