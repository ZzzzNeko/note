# DOM(文档对象模型)

## 操作元素

### 元素、节点、文档

- 元素：有 HTML 标签包裹的节点
- 节点：包括 文本节点、注释节点、元素节点 等
  - HTML 中，单独的文本即节点
  - 若元素有文本内容，其子节点就是文本节点
  - 可以通过 `node.nodeType` 查看具体[类型](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)
- 文档: `document` 对象，指代整个文档流，可以通过 `document.head`、`document.body` 快速访问文档的指定部分

### 覆写文档

`document.write(str)`: 该方法会复写整个文档

### 选择元素

- `document.getElementById(id)`: 根据 ID 选中匹配的元素
- `docuemnt.getElementsByClassName(class)`: 根据 class 选中匹配的全部元素
- `document.getElementsByTagName(tag)`: 根据 tag 选中匹配的全部元素
- `document.querySelector(selector)`: 根据选择器选中匹配的第一个元素
- `document.querySelectorAll(selector)`: 根据选择器选中匹配的全部元素
- `document.getElementsByName(name)`: 根据 name 属性值选中匹配的全部元素

### 访问元素

创建节点

- `document.createDocumentFragment()`: 创建文档片段，该方法一般用于批量增减元素节点，随后插入文档流中，避免触发多次回流
- `document.createElement(eleName)`: 创建元素节点
- `document.createTextNode(textContent)`: 创建文本节点
- `document.createComment(commentContent)`: 创建注释节点

元素增减

- `dom.replaceChild(newNode, oldNode)`: 替换节点
- `dom.insertBefore(newNode, refNode)`: 在参考节点之前插入子节点
- `dom.append(node1[, node2[... noden]])`: 在元素最末子节点后追加 1 或多个 子节点
- `dom.appendChild(node)`: 在元素最末子节点后追加 子节点
- `dom.remove()`: 移除当前节点
- `dom.removeChild(node)`: 移除元素中的指定 子节点

元素节点

- `Node.nodeValue`: 节点值(一般用不上)
  - 文本节点: 返回文本内容
  - 注释节点: 返回注释内容
  - 元素节点: 返回 `null`
- `dom.childNodes`: 子节点
- `dom.nextSibling`: 下一个相邻兄弟节点
- `dom.previousSibling`: 上一个相邻兄弟节点
- `dom.children`: 子元素
- `dom.nextElementSibling`: 下一个相邻兄弟元素
- `dom.previousElementSibling`: 上一个相邻兄弟元素
- `dom.firstChild`: 第一个子节点
- `dom.firstElementChild`: 第一个 子元素
- `dom.lastChild`: 最末位子节点
- `dom.lastElementChild`: 最末位子元素
- `dom.parentNode`: 父节点
- `dom.offsetParents`: 离当前元素最近的有定位的父节点，如果都没有定位默认为 body

元素内容

- `dom.innerHTML`: 元素内容(含内嵌元素)
- `dom.innerHTML = newHTML`: 覆写元素内容(内嵌元素视为 HTML)
- `dom.textContent`: 元素内容(不含内嵌元素，但包括内嵌元素文本)
- `dom.textContent = newContent`: 覆写元素内容(内嵌元素视为文本)(若含内嵌元素则会被替换)

尺寸定位(详见 [元素尺寸与定位](https://note.youdao.com/s/PAquIXuQ))

- `dom.clientWidth/dom.clientHeight`
- `dom.offsetWidth/dom.offsetHeight`
- `dom.scrollWidth/dom.scrollHeight`
- `dom.scrollTop/dom.scrollLeft`
- `dom.offsetTop/dom/offsetLeft`

元素属性

- `dom.attributes`: 元素属性
- `dom.hasAttribute(attrName)`: 判断是否存在指定属性
- `dom.getAttribute(attrName)`: 获取元素属性
- `dom.setAttribute(attrName, attrValue)`: 设置元素属性
- `dom.removeAttribute(attrName)`: 移除指定属性

类与样式(元素属性的一部分)

- `dom.style[style] = newVal`: 给元素样式赋值(注意，`dom.style` 获取的样式不一定是真实表现的样式)
- `getComputedStyle(dom)`: 获取元素样式
- `dom.classList`: 元素 class
- `dom.classList.add(token1[, token2[, ...tokenN]])`: 添加 class
- `dom.classList.remove(token1[, token2[, ...]])`: 移除 class
- `dom.classList.replace(oldClass, newClass)`: 替换 class
- `dom.classList.toggle(className[, force: boolean])`: 切换 class(若存在则移除，若不存在则添加)(与元素是否含有对于类名无关), 传递 `force` 可强制指定方向

## 监听元素

可以通过 `MutationObserver` 监听元素变动 (兼容性 ie11+ (2013+))

```ts
type MutationRecordType = "attributes" | "characterData" | "childList";
/**
 * 注意
 * - attributes" | "characterData" | "childList" 中至少一个为 true
 * - characterData 仅作用于 `Text`(document.createTextNode)、`Comment`(document.createComment) 元素
 */
interface MutationObserverInit {
  attributes?: boolean; // 是否监控属性变更
  attributeFilter?: string[]; // 指定要监控的属性名称，不指定则监控所有属性
  attributeOldValue?: boolean; // 是否记录属性变更的前值
  characterData?: boolean; // 是否监控指定目标节点或子节点树中节点包含的字符数据变化
  characterDataOldValue?: boolean; // 是否记录字符数据前值
  childList?: boolean; // 是否监控目标节点添加或删除子节点
  subtree?: boolean; // 是否扩大监控范围至目标节点整个节点树的所有节点
}
interface MutationRecord {
  readonly addedNodes: NodeList;
  readonly attributeName: string | null;
  readonly attributeNamespace: string | null;
  readonly nextSibling: Node | null;
  readonly oldValue: string | null;
  readonly previousSibling: Node | null;
  readonly removedNodes: NodeList;
  readonly target: Node;
  readonly type: MutationRecordType;
}
interface MutationCallback {
  (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface MutationObserver {
  new (callback: MutationCallback): MutationObserver;
  prototype: MutationObserver;
  disconnect(): void;
  observe(target: Node, options?: MutationObserverInit): void;
  takeRecords(): MutationRecord[];
}
```

说明

- 相关事件
  - DOMAttributeNameChanged
  - DOMAttrModified
  - DOMCharacterDataModified
  - DOMContentLoaded
  - DOMElementNameChanged
  - DOMNodeInserted
  - DOMNodeInsertedIntoDocument
  - DOMNodeRemoved
  - DOMNodeRemovedFromDocument
  - DOMSubtreeModified
- `.innerText` 与 `TextNode` 在表现上相似，但 `TextNode` 可以创建多个，`.innerText` 为一次性修改；因而 `.innerText` 触发 'childList'

**示例**

```html
<div id="target"></div>
<button id="btn1">change node</button>
<button id="btn2">change text</button>
<button id="btn3">change attr</button>
<button id="btn4">intercept records</button>
<button id="btn5">stop observe</button>
<script>
  const observer = new MutationObserver(function (mutations, observe) {
    // observe === observer  true
    console.log(mutations);
    for (const mutation of mutations) {
      if (mutation.type === "attributes") { }
      if (mutation.type === "childList") { }
      if (mutation.type === "characterData") { }
    }
  });
  const target = document.getElementById("target");
  const textNode = document.createTextNode("init text");
  observer.observe(target, { attributes: true, childList: true, characterData: true, subtree: true });
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  btn1.addEventListener("click", () => target.appendChild(textNode););
  btn2.addEventListener("click", () => textNode.textContent = "text changed" );
  btn3.addEventListener("click", () => target.className = "red" );
  btn4.addEventListener("click", () => {
    target.appendChild(document.createTextNode("some text"));
    console.log(
      ".takeRecords() 可以获取回调 mutations，调用后不触发回调，且不受 .disconnect() 影响",
      observer.takeRecords()
    );
  });
  btn5.addEventListener("click", () => observer.disconnect(););
</script>
```
