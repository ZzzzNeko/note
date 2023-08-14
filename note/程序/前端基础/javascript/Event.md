# 事件

## 自定义事件

```js
/**
 * 通过 EventTarget 创建事件目标
 * - .addEventListener 监听事件
 * - .dispatchEvent    派发事件
 * - .removeEventListener 移除监听
 * 通过 Event 或 CustomEvent 创建事件
 * - 第一个参数为事件名称, 第二个为可选参数 { bubbles: boolean, cancelable: boolean } 默认都是 false
 * - CustomEvent 继承自 Event (可通过 CustomEvent.__proto__ === Event 判断)
 * - CustomEvent 第二个参数额外支持 `detail` 字段传递数据
 */
const event = new CustomEvent("demo-event", { detail: "some data" });
const target = new EventTarget();
const handler = ev => console.log("demo-event cb: ", ev.detail);
target.addEventListener("demo-event", handler);
target.dispatchEvent(event);
target.removeEventListener("demo-event", handler);
```

## DOM 事件

`window`、`document`、`element` 都是 `EventTarget` 的实例 <br/>
`target.addEventListener(type, listener[, options | useCapture])`

- `useCapture` 默认为 `false`, 表示事件通过冒泡传递, 设置为 `true` 表示事件通过捕获传递
- `options`
  - `capture: boolean`
  - `once: boolean`
  - `passive: boolean`: 表示 `listener` 永远不会调用 `preventDefault()`
- 事件捕获: 父元素先触发, 子元素后触发
- 事件冒泡: 子元素先触发, 父元素后触发
- 事件委托: 也称事件代理, 利用事件冒泡, 通过父元素统一处理子元素同类事件, 父元素可通过 `ev.target` 获取触发事件的子元素
- 阻止冒泡：`event.stopPropagation()` 或 `event.cancelBubble = true`
- 阻止默认：`event.preventDefault()`
- 对于 `obj['on' + ev] = handle` 的事件，可以通过 `return false` 同时阻止冒泡和默认

### 执行顺序

```html
<!DOCTYPE html>
<style>
  .rect-outer {
    position: relative;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 5px #ccc;
  }
  .rect-wrap {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50px;
    left: 50px;
    box-shadow: 0 0 5px #ccc;
  }
  .rect-inner {
    position: absolute;
    left: 50px;
    top: 50px;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 5px #ccc;
  }
</style>
<div class="rect-outer">
  <div class="rect-wrap">
    <div class="rect-inner"></div>
  </div>
</div>
<script>
  const outer = document.getElementsByClassName("rect-outer")[0];
  const inner = document.getElementsByClassName("rect-inner")[0];
  const wrap = document.getElementsByClassName("rect-wrap")[0];
  outer.addEventListener("click", () => console.log("outer"););
  inner.addEventListener("click", () => console.log("inner"););
  wrap.addEventListener(
    "click",
    () => console.log("wrap");,
    true
  );
</script>
```

执行结果: "wrap" -> "inner" -> "outer"

- 事件流顺序: 捕获阶段 -> 目标阶段 -> 冒泡阶段
- 对于触发了冒泡和捕获的事件, 捕获的优先级高于冒泡
