# BOM(浏览器对象模型)

## Window

在浏览器端, `window` 对象为全局对象, 所有在全局声明的变量、函数 都可以通过 `window` 查找, <br />
从语义上看, `window` 指当前浏览器窗口, 故列举与浏览器相关的操作

### 浏览器尺寸

- `window.innerHeight` : 浏览器窗口的内部高度
- `window.innerWidth`： 浏览器窗口的内部宽度
- `window.pageXOffset`:文档滚动的水平距离
- `window.pageYOffset`：文档滚动的垂直距离
- `window.screenLeft`：浏览器 X 轴相对于屏幕左上角坐标（有的浏览器也可用 screenX）
- `window.screenTop`：浏览器 Y 轴相对于屏幕左上角坐标（有的浏览器也可用 screenY）

### 浏览器窗口

- `window.open()`: 打开新窗口, 如 `window.open("xxx.html","windowname","height=123,width=321,top=222,left=333")`
- `window.close()`: 关闭当前窗口（火狐默认无法关，IE 会弹对话框，chrome 直接关）
- `window.print()`: 弹出打印
- `window.alert()`: 弹出警告
- `window.prompt()`: 对话框
- `window.confirm()`: 确认框
- `window.focus()`: 当前窗口给予焦点
- `window.blur()`: 当前窗口失去焦点
- `window.scrollBy(x, y)`: 调整窗口滚动(相对)
  - `window.scrollBy({ top: x, left: y, behavior: 'smooth' | 'instant' | 'auto' })`: `behavior` 默认 `auto`
- `window.scrollTo(x, y)`: 调整窗口滚动(绝对)
  - `window.scrollTo({ top: x, left: y, behavior: 'smooth' | 'instant' | 'auto' })`: `behavior` 默认 `auto`
- `window.resizeBy(deltaW, deltaH)`: 调整窗口大小(相对) (需要 `open()` 创建的单标签页)
- `window.resizeTo(w, h)`: 调整窗口大小(绝对) (需要 `open()` 创建的单标签页)
- `window.moveBy(deltaX, deltaY)`: 调整窗口位置(相对) (需要 `open()` 创建的单标签页)
- `window.moveTo(x, y)`: 调整窗口位置(绝对) (需要 `open()` 创建的单标签页)

### 常用子对象

- `window.document`：指向 `document`
- `window.location`: 当前 URL, 也可通过 `location.href = 'xx'` 重定向
- `window.history`: 指向 `history`
- `window.navigator`: 浏览器信息
- `window.screen`: 显示设备信息

## Location

`window.location` 与资源地址相关

- `location.protocol`: 协议(如 `http:`、`https:`)
- `location.port`: 端口(一般为空)(http 默认 80，https 默认 443)
- `location.origin`: 来源 (`protocol` + `host`)
- `location.hostname`: 域名
- `location.host`: 域名 (`hostname` + `port`)(浏览器端一般与 `hostname` 表现一致)
- `location.pathname`: 资源路径(域名之后 `/` 到 `?` 之前(如果有)的部分)
- `lolcation.search`: 查询内容(`?` 及之后的部分)
- `lolcation.hash`: 哈希值(`#` 及之后的部分)
- `lolcation.href`: 完整的 URL
- `lolcation.reload(bool)`: 重新加载资源，可选参数为 `true` 时强刷新，默认 `false`
- `location.replace(url)`: 替换当前页面资源，页面被替换后不会保存在 `History` 中
- `location.assign(url)`: 加载新的页面资源，相当于 `location.href = url`

赋值操作

- `location = url`: 相当于 `location.assign(url)`
- `location.href = url`: 相当于 `location = url`
- `location.search = query`: 相当于修改了 url 的 query 并重新请求

## History

`window.history` 与浏览器跳转历史记录相关

- `history.state`: 只读属性, 历史堆栈顶部的 `state` 值
- `history.back()`: 后退, 等价于 `history.go(-1)`
- `history.forward()`: 前进, 等价于 `history.go(1)`
- `history.go(n)`: 相对当前位置跳转到指定历史记录, `.go()` 或 `.go(0)` 表示重载
- `history.pushState(state, title[, url])`: 添加 `state` 于历史堆栈, 并修改 `url`(可选)
- `history.replaceState(state, title[, url])`: 替换 `state` 于历史堆栈, 并修改 `url`(可选)

`popstate` 事件

- 当激活文档中不同的历史条目时触发该事件
- 如 用户手动导航, 调用 `history.go()`、`history.back()`、`history.forward()` 方法、修改 `#hash`
- **`history.pushState()` 和 `history.replaceState()`** 不会触发该事件

`hashchange` 事件

- `url` 中 `#hash` 部分修改时触发

## Navigator

`window.navigator` 表示用户代理的状态和标识

- 浏览器相关
  - appCodeName: 浏览器的内部“开发代号”名称
  - appName: 浏览器官方名称
  - appVersione: 浏览器版本
  - platforme: 返回运行浏览器的操作系统平台。
  - userAgent: 用户代理信息
- 设备相关
  - hardwareConcurrency: 处理器核心
  - maxTouchPoints：支持的触点数目
  - oscpu: 操作系统
- 站点相关
  - cookieEnabled: 是否允许 cookie
  - language: 使用语言
- 外部信息
  - battery: 返回 [`BatteryManager`](https://developer.mozilla.org/zh-CN/docs/Web/API/BatteryManager) 对象，可以获取电池相关信息
  - connection: 返回 [`NetworkInformation`](https://developer.mozilla.org/zh-CN/docs/Web/API/NetworkInformation) 对象，可以获取网络链接信息
  - geolocation: 返回 [`Geolocation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 对象，可以获取地理位置信息
  - onLine: 是否联网
- 功能支持
  - serviceWorker: 返回 [`ServiceWorkerContainer`](https://developer.mozilla.org/zh-CN/docs/Web/API/ServiceWorkerContainer) 对象
  - storage: 返回 [`StorageManager`](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager) 对象

## Screen

`window.screen` 对象包含有关用户屏幕的信息

- `screen.availWidth`: 可用的屏幕宽度
- `screen.availHeight`: 可用的屏幕高度
- `screen.height`: 屏幕高度
- `screen.width`: 屏幕宽度
