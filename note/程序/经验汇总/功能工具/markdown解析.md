# markdown-it

说明

- markdown-it 仅对文本进行解析, 需要自行引入样式
- `github-markdown-css` 样式库
- `markdown-it-toc` / `markdown-it-toc-and-anchor` 可以用来添加导航

配置

```js
new MarkdownIt([presetName][, options])
```

- `presetName`: 解析模式
  - `default`: 默认的, 支持扩展功能, 但不支持 html, typographer & autolinker
  - `commonmark`: 支持标准的解析模式
  - `auto`: 不进行解析
- `options`: 配置选项

```js
const MarkdownIt = require("markdown-it");

// 配置选项(默认的)
const md = new MarkdownIt({
  html: false, // 允许 html 标签
  xhtmlOut: false, // 单标签使用 '/' 闭合, 如 `<br/>`, 仅在 'commonmark' 模式下
  breaks: false, // 将 '\n' 转换为 '<br>'
  langPrefix: "language-",
  linkify: false,
  typographer: false, // 印刷格式 ?
  quotes: "“”‘’",
  highlight: function (/*str, lang*/) {
    return "";
  },
});
```

插件加载

```js
md.use(plugin1)
    .use(plugin2, opts, ...)
    .use(plugin3)
```

语法高亮

```js
const hljs = require("highlight.js");

const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lane)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (e) {}
    }
    return "";
  },
});
```

手动复写(需要使用 `<pre>` 标签包裹)

```js
var hljs = require("highlight.js"); // https://highlightjs.org/

// Actual default values
var md = require("markdown-it")({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});
```

linkify: 开启后将使用 `linkify-it` 插件，将自动辨识 URL, Ip 等文本, 将其转换为可点击的连接

可以通过 `md.linkify` 进行配置

# 语法扩展

插件

- `subscript`: 下标
- `superscript`: 上标
- `footnote`: 脚注
- `definition list`: 定义列表
- `abbreviation`: 缩写
- `emoji`
- `custom container`
- `insert`
- `mark`

# 管理规则

```js
md.disable(["link", "image"]).enable("link").enable("link");
```

# 简单示例

```js
import MD from "markdown-it";

const md = new MD("default");

function init() {
  const input = document.createElement("textarea");
  const render = document.createElement("div");

  input.addEventListener("blur", () => {
    const text = input.value;
    console.log("text: ", text);
    const result = md.render(text);
    console.log("result: ", result);
    render.innerHTML = result;
  });

  document.body.appendChild(input);
  document.body.appendChild(render);
}

init();
```
