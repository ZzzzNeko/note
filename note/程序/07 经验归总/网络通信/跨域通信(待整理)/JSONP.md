JSONP 利用 `<script>` 允许跨源请求的特点进行实现

**示例**

```js
function jsonp(url, cb) {
    const script = document.createElement("script");
    const cbName = cb.name;
    script.src = `${url}?cb=${cbName}`; // 这里 'cb' 字段由服务方指定，通常为 'cb' 或 'callback'
    window[cbName] = ret => {
        cb(ret);
        delete window[cbName];
        document.body.removeChild(script);
    };
    document.body.appendChild(script);
}
```

```js
const http = require("http");

http.createServer((req, res) => {
    const cb = "cb";
    const data = JSON.stringify({ val: "jsonp" });
    console.log("123");
    // res.end(`${cb}(${data})`);
    const attack = `
        (() => {
            alert(123)
        })()
    `;
    res.end(attack);
}).listen(80, () => {
    console.log("server running at 80 port");
});
```

实现流程

1. 浏览器通过 `script` 发送跨源请求，同时提供对应的回调函数
2. 服务器解析请求进行处理并获取指定的回调函数名称
3. 服务器返回 `${cbName}(${responseData})` 格式的字符串
    - `cbName` 为浏览器请求时指定的回调函数名称
    - `responseData` 为服务器处理请求后返回的数据
4. 浏览器创建的 `script` 中加载了 `${cbName}(${responseData})` 格式的字符串会进行解析操作
5. 浏览器会调用预设的回调函数对 `responseData` 进行解析
