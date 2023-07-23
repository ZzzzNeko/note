# vue2: vuex

## 写在前面

Vuex 是一个 vue 插件, 用于进行 全局的、模块的 状态管理

- 与 vue2 对应的版本: [`vuex 3.x`](https://v3.vuex.vuejs.org/zh/)
- 与 vue3 对应的版本: [`vuex 4.x`](https://vuex.vuejs.org/zh/)

由于 vue3 不再推荐 vuex，因而本篇基于 vue2 对应的 vuex 3.x 整理

## 快速开始

```shell
npm install vuex@3.6 --save
```

```js
// 安装 vuex
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
new Vue({ store }).$mount("#app");
```

```js
// vuex 使用单一状态树包含全部的应用层级状态
// 组件中可以通过 this.$store 进行访问
this.$store.state;
this.$store.commit(""); // 对应 mutations
this.$store.dispatch(""); // 对应 actions
```

## 核心概念

### State

`state` 类似于 `Vue` 实例中的 `data` 属性, 但其修改需要通过 `mutatuions`

```js
// 定义 store
import App from "app.vue";
const store = new Vuex.Store({
  state: {
    count: 0,
  },
});
```

在组件中使用时通常置于 `computed` 属性中, 为了方便使用, 提供了 `mapState` 辅助函数用于字段映射

```js
// 使用 mapState 进行映射
import { mapState } from "vuex";
// 通过 store 访问
this.$store.state
// 简单的同名映射
export default {
  // 映射 this.count 为 store.state.count
  computed: mapState(['count'])
}
// 自定义映射名称与取值逻辑
export default {
  computed: mapState({
    computed_count: state => state.count,
  }),
};
// 有其他属性的情况下
export default {
  computed: {
    xxx(){},
    ...mapState(['count']),
    ...mapState({
      computed_count: state => state.count,
      simple_count: "count",  // 简写, 等同 state => state.count,
    })
  }
}
```

### Getters

`getters` 类似于 Vue 实例中的 `computed` 属性, 其接受 `state` 作为第一个参数, `getters` 作为第二个参数

```js
const store = new Vuex.Store({
  state: { count: 0 },
  getters: {
    db_count: state => state.count * 2,
    db_dec: (state, getters) => {
      return getters.db_count - 1;
    },
  },
});
```

在组件中使用时与 `state` 类似, 为了方便使用, 提供了 `mapGetters` 辅助函数用于字段映射

```js
import { mapGetters } from "vuex";
// 通过 store 访问
this.$store.getters;
// 同名映射
export default {
  computed: mapGetters(['db_count'])
};
// 自定义映射
export default {
  computed: {
    xx() {},
    ...mapGetters({
      dbCount: 'db_count',
      dbDec: getters => getters.db_dec
    })
  }
}
```

### Mutation

`Mutation` 是修改 `State` 的唯一方式, 必须是同步函数, 其接受 `state` 为第一个参数, 第二个参数为可选的载荷(建议为 对象)

```js
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state, n) {
      state.count += n;
    },
    addObj(state, payload) {
      state.count += payload.n;
    },
  },
});
```

在组件中使用时通过 `store.commit` 调用

```js
export default {
  methods: {
    globalAddn() { this.$store.commit('add', 6) }
    globalAddObj() { this.$store.commit({ type: 'addObj', n }) } // 对象风格的调用
  }
}
```

在组件中通过 `mapMutations` 映射

```js
import { mapMutations } from "vuex";
export default {
  // ...
  methods: {
    // 映射 this.add() 为 this.$store.commit('add')
    ...mapMutations(["add"]),
    ...mapMutations({
      globalAddObj: "addObj", // 映射 this.globalAddn() 为 this.$store.commit('add')
    }),
  },
};
```

### Actions

`Actions` 类似于 `Mutations`, 但不同于

- 不能修改 `state`, 需要通过 `commit(mutation)`,
- 可以包含任意异步操作。

`action` 接受一个与 `store` 实例具有相同方法和属性的 `context` 对象(并不是 `store` 实例本身)

```js
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state, n) {
      state.count += n;
    },
  },
  actions: {
    add(context, n) {
      context.commit("add", n);
      console.log(context.state.count);
    },
    addObj(context, payload) {
      context.commit("add", payload);
    },
  },
});
```

在组件中通过 `store.dispatch` 分发 `action`, 其参数格式于 `mutation` 类似

```js
export default {
  methods: {
    doAction() { this.$store.dispatch('add', 6) }
    doActionObj(n) { this.$store.dispatch({ type: 'add', n }) }
  }
}
```

在组件中通过 `mapActions` 映射

```js
export default {
  methods: {
    ...mapActions(["add"]),
  },
};
```

### Modules

对于中大型项目, 使用单一的 `store` 可能变得臃肿, 可以根据系统功能按模块对 `store` 进行分隔

```js
const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};
const moudleB = {...};
const store = new Vuex.Store({
  modules: {
    mda: moudleA,
    mdb: moudleB
  }
})
store.state.mda // 访问moduleA
store.state.mdb // 访问moduleB
```

注意: **未指定命名空间的情况下, Vuex 对模块的管理是极其混乱的**, 其表现如下

- 对 `state` 按照模块名并入父模块 `state` 属性
- 对 `getter` 不允许父子模块存在同名
- 对 `mutations` 则是允许父子模块同名, 执行时按父子顺序依次执行
- 对于映射函数的默认表现如下
  - `mapState` 默认映射为 根模块
  - `mapGetters` 则是按父子模块找到匹配的名称
  - `mapMutations` 和 `mapActions` 则相当于创建了新的方法, 将同名的方法按照父子顺序依次录入

#### 局部状态

参数上的变动

- `getter`: 前两个参数指向当前模块的 `state`、`getters`, 第三个参数为根节点的 `rootState`
- `mutation`: 第一个参数指向当前模块的 `state`
- `action`: `context.state` 指向当前模块的 `state`, `context.rootState` 指向根节点的 `rootState`

#### 命名空间

```js
const moduleStore = {
  namespaced: true,
  state: () => ({}),
  getters: {
    someGetter(state, getters, rootState, rootGetters) {},
  },
  actions: {
    someAction({ dispatch, commit, getters, rootGetters }) {
      commit("someMutation"); // 模块内的 mutation
      commit("someMutation", null, { root: true }); // root 的 mutation

      dispatch("someOtherAction"); // 模块内的 action
      dispatch("someOtherAction", null, { root: true }); // root 的 action
    },
  },
};
```

开启命名空间后, 默认的操作都会指向根模块, 对应的操作也是基于命名空间的

- `state` 的访问没有变化, 默认时按照嵌套关系并入根节点的
- 对于其他内容的访问和映射需要增加命名空间路径
  - `mapState({ a: state => state.moduleA.a })`
  - `mapGetters({ aGet: getters => getters.moduleA.aGet })`
  - `mapMutations("moduleA", { })`
  - `mapActions("moduleA", [ ])`
- 对于 `mutations` 和 `actions` 的使用调整
  - `this.$store.commit(modulePath + '/'  + xxx)`
  - `this.$store.dispatch(modulePath + '/' + xxx)`

```js
// 为方便使用, 提供了辅助函数以简化命名空间路径
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("some/nested/module");
```

## 浅谈实战

vuex3.x 主要应用在 vue2 项目中, 由于架构设计复杂, ts 支持性差等原因, vue3 项目中已经不推荐使用(官方推荐 `pinia`, 个人建议直接使用 `reactive()` 管理即可) <br />
这里简述一下 vuex3.x 的应用和注意事项

- `store` 的设计应当围绕数据管理, 其逻辑部分应当以数据获取、加工等为主 而非与具体 UI 交互挂钩
- `store` 对模块的划分应当以业务模块进行映射而非页面级别, 避免过多的嵌套模块以降低后期维护成本
- `store` 中使用模块应当是开启命名空间的, 未开启命名空间的模块管理是极其混乱的
- 建议对 `store` 的实现是可重用、可脱离 UI 的, 易跨页面使用的

浅谈 vuex 为何在 vue3 项目中被抛弃

- `vuex` 本身的设计过于复杂
  - `mutations` 和 `actions` 本质实现的功能都是去修改 `state`, 没有必要存在两个概念
  - 嵌套模块结构混乱, 若未开启 `namespaced`, 其对 `state`、`getters`、`mutations`&`actions` 的策略是不同的
- `ts` 支持不友好, 即便是 vuex4.x 依然存在该问题
