# 跨域通信 - postMessage

## 实现方式

`targetWindow.postMessage(message, targetOrigin)`

- 说明
  - 父级页面通过该方法将需要通知的信息传递给子页面
  - 子级也 main 通过 `message` 事件获取传递的信息
- 参数
  - `message`: 需要通信的数据
  - `targetOrigin <string>|<URI>`: 指定可以接受到该通信的窗口；如果指定值为 `'*'` 表示可以通知到任意窗口

`message` 事件

- 说明
  - 监听 `postMessage` 传递的信息
- 参数
  - `ev <object>`: 事件对象
    - `data`: 接受到的数据
    - `origin <URL>`: 调用 `postMessage` 发送的窗口的 URL 地址
    - `source`: 对发送消息的窗口对象的引用

## 实现示例

### 父级页面通知子页面(假设, mainIframe 为要通知的页面 id)

- 父级页面

  ```js
  document.getElementById("mainIframe").contentWindow.postMessage(
    {
      msg: "通知的信息",
    },
    "*"
  ); //这里第二个参数填域名地址，*表示全部域名都可以通知
  ```

- 子级页面

  ```js
  window.addEventListener("message", function (e) {
    console.log(e.data); //e.data为父页面通知的信息
  });
  ```

### 子级页面通知父级页面

- 子级页面

  ```js
  window.top.postMessage(
    {
      msg: "",
    },
    "*"
  );
  ```

- 父级页面

  ```js
  window.addEventListener("message", function (e) {
    console.log(e.data);
  });
  ```
