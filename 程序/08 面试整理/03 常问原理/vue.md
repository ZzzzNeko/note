# Vue(TODO:)

- 虚拟 DOM 是什么

## 基本使用

- 插件
- 指令：指令声明周期
- watch、computed
- nextTick

## 渲染机制

### 虚拟 DOM

虚拟 DOM 是真实 DOM 的映射，其使用对象进行表示，包含创建元素时需要的信息；操作对象比直接操作 DOM 更加灵活且开支更小。

### 渲染管线

组件挂载时会经历

1. 编译：vue 模板编译为 渲染函数
2. 挂载: 运行时，渲染器调用 渲染函数，返回 虚拟 DOM 树，并将其渲染为 DOM。这一步会作为 响应式副作用 执行，追踪响应式依赖
3. 更新：当响应式依赖变动时，执行副作用，创建一个更新后的 虚拟 DOM 树；渲染器遍历新树与就树比较，并更新为真实 DOM

### 带编译时信息的虚拟 DOM

#### 静态提升

模板中不带任何动态绑定的内容，会作为静态内容处理，更新时跳过差异对比；若有多个连续静态元素，则会被压缩为一个静态 vnode，静态节点会直接通过 innerHTML 挂载，挂载后将缓存对应 DOM 节点，若在被重用，则使用 cloneNode() 克隆 DOM 节点

#### 更新类型标记

对于单个有动态绑定的元素，可以在编译时对其进行推断，并添加 更新类型标记，一个元素可以有多个更新类型标记(位运算推断)

vnode 子节点也会被标记类型，如包含多个根节点的模板会标记为一个片段

#### 树结构打平

## 响应式

## Diff 算法

## router

### hash

- 监听 hashchange 事件
- 纯前端实现

### history

- onpopstate 事件
- router.push 、router.replace、router.go 对应 history.pushState、history.replaceState、history.go
- 其中 history.pushState、history.replaceState 不会触发 onpopstate 事件

```js
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
```

手动监听 pushState replaceState 事件

当页面刷新时，请求路径未匹配资源时，服务器返回 index.html 即可
