# PC 兼容移动手势

## 大体思路

| PC 事件   | 移动事件   |
| --------- | ---------- |
| mousedown | touchstart |
| mousemove | touchmove  |
| mouseup   | touchend   |

在触发 PC 上对应的鼠标事件时，手动创建对应的 touch 事件即可

其中，mousemove 事件缺少状态管理，需要设置 flag 在 mousedown 之后开启

## 代码逻辑

```js
const touchState = {
  init: false,
  target: null,
};

function setTouchEventAttributes(touchEvent, event) {
  // 需要参考 touch 事件文档，将 event 属性转换为对应的 touch 事件属性
}

function createTouchEvent(eventName, event) {
  const touchEvent = document.createEvent("Event");
  touchEvent.initEvent(eventName, true, true);

  setTouchEventAttributes(touchEvent, event);
  return touchEvent;
}

function emit(eventName, event) {
  if (eventName == "touchstart") touchState.init = true;
  if (eventName == "touchend") touchState.init = false;
  if (eventName == "touchmove" && !touchState.init) return;

  if (event.type == "mousedown") touchState.target = event.target;

  const touchEvent = createTouchEvent(eventName, event);
  event.target.dispatchEvent(touchEvent);
}

function mockTouch() {
  if ("ontouchstart" in window) return;

  window.addEventListener("mousedown", ev => emit("touchstart", ev), true);
  window.addEventListener("mousemove", ev => emit("touchmove", ev), true);
  window.addEventListener("mouseup", ev => emit("touchend", ev), true);
}
```

## 第三方库

[hammer-touchemulator](https://github.com/hammerjs/touchemulator)

```shell
npm install hammer-touchemulator
```

针对 @vant 可以引用 `@vant/touch-emulator` (其核心逻辑来自于 hammer-touchemulator 但做了简化)

```shell
npm i @vant/touch-emulator
```

直接引用即可

```js
import "@vant/touch-emulator";
```
