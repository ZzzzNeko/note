# 框架原理

## 模板编译

Vue 模板编译流程

1. 解析: 将模板解析为 AST
2. 优化: 对静态内容进行优化(静态结点渲染后不会经过 patch 流程)

   - 标记静态和非静态结点
   - 标记静态根节点

3. 生成: 对处理后的 AST 转换为 render 函数

## MVVM 的理解

将视图与数据进行绑定，视图变化会通知 VM 层更新数据，数据修改会通知 VM 层更新视图。MVVM 中 UI 是数据驱动的，便于将关注点集中在数据的处理中。

## 数据接持

### vue2

劫持对象

```js
const span = document.createElement("span");
document.body.appendChild(span);
const updateNode = (key, val) => {
  if (key === "span") {
    span.innerHTML = val;
  }
};
const data = { span: "" };
const copyData = JSON.parse(JSON.stringify(data));
for (let key in copyData) {
  Object.defineProperty(copyData, key, {
    get() {},
    set(val) {
      data[key] = val;
      updateNode(key, val);
    },
  });
}
copyData.span = "666";
```

劫持数组：通过覆写数组原生方法进行接持

```js
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
// hack 以下几个函数
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methodsToPatch.forEach(function (method) {
  // 获得原生函数
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    // 调用原生函数
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // 触发更新
    ob.dep.notify();
    return result;
  });
});
```

### vue3

使用 Proxy 进行代理，相比 Object.defineProperty 的方式，具有以下优点

- 可以直接监听对象而非属性
- 可以直接监听数组
- 具有更多的拦截方法，扩展性高
- 无需在操作前拷贝原对象

```js
const span = document.createElement("span");
document.body.appendChild(span);
const updateNode = (key, val) => {
  if (key === "span") {
    span.innerHTML = val;
  }
};
const data = { span: "" };
const proxy = new Proxy(data, {
  set(target, prop, value, receiver) {
    Reflect.set(target, prop, value, receiver);
    updateNode(prop, value);
  },
});
proxy.span = "777";
```

## nextTick

- 2.4 之前优先使用微任务
- 2.5 改为优先使用宏任务
- 2.6 改为优先使用微任务，特殊情况下使用宏任务(v-on)

v2.5 中 setImmediate > MessageChannel > Promise > setTimeout <br>
v2.6 中 Promise > MutationObserver > setImmediate > setTimeout

## Diff 算法

### VNode key 的作用

key 用于标识 vnode 的唯一性，在 diff 过程中，对于 key 相同的 vnode 仅进行移动和更新，而不做删除创建操作，进而提高 DOM 的复用性，从而提升 patch 流程的性能

### diff(react)

1. 遍历现节点列表，查看每个节点在是否存在于原列表中

   - 维护一个最大索引值，该值为查询中在原列表中的最大索引值
   - 若存在，则更新节点，之后判断是否需要移动
     - 原节点索引小于最大索引值则需要移动节点
     - 否则将该索引置为最大索引
   - 若不存在，则插入节点
     - 若为首个节点，则插在原列表第一个节点之前
     - 若为非头节点，则插在现列表上一个节点之后

2. 遍历原节点列表，移除现列表中不存在的节点

```
[a, b, c, d]    // 原列表
[c, a, d, b]    // 现列表
a, b, c, d      // 遍历 c，获取最大索引 2，不做移动
b, c, a, d      // 遍历 a，小于最大索引 2，插入到 c 后面
b, c, a, d      // 遍历 d，获取最大索引 3，不做移动
c, a, d, b      // 遍历 b，小于最大索引 3，插入到 d 后面

---

[a, b, c, d, e]
[d, b, o, a, c, e]
a, b, c, d, e    // 遍历 d 获取原列表最大索引 3
a, c, d, b, e    // 遍历 b 获取原列表索引 1 小于最大索引，将 b 移动到 d 后
a, c, d, b, o, e // 遍历 o 未能查询到原索引，进行插入处理
c, d, b, o, a, e // 遍历 a 获取原列表索引 0 小于最大索引，将 a 移动到 o 后
d, b, o, a, c, e // 遍历 c 获取原列表索引 2 小于最大索引，将 c 移动到 a 后
d, b, o, a, c, e // 遍历 e 获取原列表索引 4 大于最大索引，更新最大索引为 4
```

### diff(vue2)

- 信息记录
  - 原列表：使用 oldHead 与 oldTail 指向头尾节点
  - 现列表：使用 newHead 与 newTail 指向头尾节点
- 双端比较：在一次比较中，按顺序进行以下最多四次比较，若节点相同则更新，并修改节点指向
  1. oldHead 与 newHead 比较，若相同则更新，oldHead 与 newHead 分别指向下一个节点
  2. oldTail 与 newHead 比较，若相同则更新，oldTail 与 newHead 分别指向上一个节点
  3. oldHead 与 newTail 比较，若相同则更新，oldHead 节点移动到 oldTail 之后，oldHead 后移，newTail 前移
  4. oldTail 与 newHead 比较，若相同则更新，oldTail 节点移动到 oldHead 之前，oldTail 前移，newTail 后移
  5. 若以上都不满足，则遍历原列表查看 newHead 是否存在
  - 若存在，则更新节点，并将该节点移动到 oldHead 之前；若不存在，则添加到 oldHead 之前
  - newHead 后移
- 双端比较结束后，判断新增或删除节点
  - 若 oldTail < oldHead，loop: newHead -> newTail 新增节点
  - 若 newTail < newTail，loop: oldHead -> oldTail 移除节点

```
[a, b, c, d] // 原列表
[b, a, d, c] // 现列表

b, [a, c, d] // 不满双端比较(5)，b 移动到 a 之前，oldHead 指向 a，newHead 指向 a
b, a, [c, d] // 满足双端比较(1)，oldHead 指向 c，newHead 指向 d
b, a, d, [c] // 满足双端比较(4)，d 移动到 c 之前，oldTail 指向 c，newTail 指向 c
b, a, d, c   // 满足双端比较(1)，遍历结束
```

## 路由原理

hash 模式

- 监听 `hashchange` 事件，对 url 中 `#`(包括) 后的哈希值变化进行响应

history 模式

- 监听 `popstate` 事件
- `router.push`、`router.replace`、`router.go` 对应 `history.pushState`、`history.replaceState`、`history.go`
<!-- - 其中 `history.pushState`、`history.replaceState` 不会触发 `onpopstate` 事件, 需要覆写 -->
- 服务端支持: 当页面刷新时，请求路径未匹配资源时，服务器返回 index.html 即可

<!-- ```js
// 复写 .pushState 和 .replaceState 并分发对应事件
// 之后监听 `pushState` `replaceState` 事件即可，后续流程同监听 `hashchange` 逻辑
let _wr = function (type) {
  let orig = history[type];
  return function () {
    let rv = orig.apply(this, arguments);
    let e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};

history.pushState = _wr("pushState");
history.replaceState = _wr("replaceState");
``` -->
