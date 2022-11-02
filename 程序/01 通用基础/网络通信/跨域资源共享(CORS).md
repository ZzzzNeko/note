# 跨源资源共享(CORS)

CORS(Cross-Origin Resource Sharing)，是一种跨源访问处理机制，通过使用额外的 HTTP 首部信息告知从浏览器应用中发起的跨源请求是否被允许。

## 使用场景

CORS 允许在以下场景中使用跨源 HTTP 请求，这里仅以 Ajax 作为示例

- Ajax (XMLHttpRequest/Fetch)
- Web 字体(@font-face)
- WebGL 贴图
- 使用 drawImage 将 images/video 画面绘制到 canvas
- cssom

## 请求流程

1. 浏览器根据请求方式和首部信息决定发送简单请求或预检请求
2. 浏览器在发送请求时将自动添加特定的首部字段
3. 服务器会对请求进行处理或确认(预检请求是否通过，是否需要携带身份凭证)
4. 服务器将设置特定的首部字段对跨源请求进行响应
5. 浏览器接受响应后判断拦截或解析

注：CORS 请求失败时，处于安全考虑，浏览器将不会展示具体错误信息

### 对 CORS 安全的首部字段

以下字段为对 CORS 安全的首部字段

- Accept
- Accept-Language
- Content-Language
- Content-Type(仅限于于以下取值)
  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded

### 简单请求

简单请求将跳过预检阶段直接发起请求，需要满足以下要求

- 使用指定的请求方式之一
  - get
  - post
  - head
- http 请求首部字段属于【对 CORS 安全的首部字段】

### 预检请求

对于可能对服务器数据产生副作用的请求，浏览器会先通过 OPTIONS 方法发起一次预检请求，以确定服务器是否允许该实际请求。

当满足任一以下请求条件时，将发送预检请求

- 使用指定的请求方式之一
  - put
  - delete
  - connect
  - options
  - trace
  - patch
- 设置了【对 CORS 安全的首部字段】之外的 http 请求头字段, 或 content-type 值
- 请求中的 XMLHttpRequestUpload 对象注册任意多个事件监听器
- 请求中使用了 ReadableStream 对象

预检请求会自动设置 `Access-Control-Request-Method` 和 `Access-Control-Request-Headers` 字段通知服务器正式请求使用的方法和额外字段

### 身份凭证

Ajax 请求可以基于 HTTP cookies 和 HTTP 认证信息发送身份凭证，若需要发送身份凭证信息需要以下处理。

浏览器

- 对于跨源 Ajax 请求，默认不会发送身份凭证信息
- 设置 `xhr.withCredentials = true` 会在发送请求时附带身份凭证信息

服务器

- 需要设置 `Access-Control-Allow-Credentials: true` 首部字段否则浏览器将不处理响应结果
- 不得设置 `Access-Control-Allow-Origin: *`，需要指定具体的源而非通配符

## 首部字段

这里列举 CORS 中可能用到的首部字段

### HTTP 请求首部字段(浏览器自动设置)

- `Origin: <origin>`
  - 用于预检请求和正式请求
  - 表明发送请求的源
  - 该请求无论是否跨源，总是被发送
- `Access-Control-Request-Method: <method>`
  - 用于预检请求
  - 表明正式请求时使用的 HTTP 方法
- `Access-Control-Request-Headers: <field-name>[, <field-name>]*`
  - 用于预检请求
  - 表明正式请求时所携带的首部字段

### HTTP 响应首部字段

- `Access-Control-Allow-Methods: <method>[, <method>]*`
  - 用于预检请求的响应
  - 指定正式请求允许的 HTTP 方法
- `Access-Control-Allow-Headers: <field-name>[, <field-name>]*`
  - 用于预检请求的响应
  - 指定正式请求中允许携带的首部字段
- `Access-Control-Allow-Origin: <origin> | *`
  - 表示允许指定源的请求
  - 对于未携带身份凭证的请求可配置通配符 '\*'
- `Access-Control-Expose-Headers: <some-header>[, <other-header>]`
  - 浏览器可通过 `xhr.getResponseHeader()` 方法获取基本的响应头信息
  - 该字段用于配置浏览器可额外访问的首部字段白名单
- `Access-Control-Max-Age: <delta-seconds>`
  - 指定预检请求结果可被缓存时间(单位秒)
  - 对于已缓存的未过期预检请求可跳过预检阶段直接发送
- `Access-Control-Allow-Credentials: true`
  - 浏览器设置 `credentials` 为 `true` 时需要设置该首部字段
  - 设置为 `true` 时，浏览器才会处理响应中的内容，否则将忽略该响应

## 浏览器兼容性

- IE10+ 已提供完整的支持
- IE8、9 中使用 `XDomainRequest` 对象实现

## 参考整理自

- [HTTP 访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS)
- [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
