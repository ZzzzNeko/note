# CSS

## 语法相关

### 选择器

基础选择器

- 通配选择器: `*`
- 标签选择器: `tag`
- ID 选择器: `#id`
- 类选择器: `.class`
- 属性选择器: `[attr]` `[attr operator value flag]`
  - 关系符号(operator)如下
    - `=`: `attr` 的值为 `value`
    - `~=`: `attr` 为以空格为分隔的值列表，其中包含 `value`
    - `|=`: `attr` 的值为 `value` 或以 `value-` 作为前缀
    - `^=`: `attr` 的值以 `value` 作为开头
    - `$=`: `attr` 的值以 `value` 作为结尾
    - `*=`: `attr` 的值包含 `value`
  - 修饰符(flag)如下(可选)
    - `i` 或 `I`: 匹配属性值时忽略大小写

关系选择器

- 相邻兄弟选择器: `A + B`，B 为**紧邻** A **之后**同层级且符合条件的**单一元素**
- 通用兄弟选择器: `A ~ B`，B 为位于 A **之后**同层级且符合条件的**全部元素**
- 子选择器: `>`
- 后代选择器: `␣` (空格)

伪类选择器(这里仅列举部分)

- `:active`
- `:hover`
- `:last-child`
- `:last-of-type`

伪元素选择器(这里仅列举部分)

- `::before`
- `::after`
- `::first-line`
- `::first-letter`

### 选择器优先级

!important > 内联 > ID 选择器 > 类选择器 > 标签选择器

注意：获取元素实际的样式需要使用 `getComputedStyle`

```html
<style>
  #black {
    color: black;
  }
</style>
<div id="black" style="color: red;">black</div>
<script>
  const black = document.getElementById("black");
  console.log(black.style.color); // red
  console.log(getComputedStyle(black).color); // rgb(0, 0, 0)
</script>
```

### 选择器匹配顺序

选择器按照从右向左的顺序进行匹配 <br>
选择器的层级不宜过深，会降低效率

### link 与 @import

- link 引入的样式权重高于 @import
- 页面加载时，link 会同步加载，@import 会在页面加载完再加载

## 元素类型

根据元素是否具有可替换内容分为

- 可替换元素
- 非替换元素

可替换元素可以通过修改其某个属性改变其呈现内容

可替换元素的特性

- 样式表现在 CSS 作用域之外
- 有自身尺寸
- 对特定属性有自身规范
- 都是行内元素

可替换元素的尺寸通常受以下三类尺寸影响

- 固有尺寸: 元素的默认尺寸，隐含了宽高比例，该尺寸无法被修改
- HTML 尺寸: 通过 HTML 元素属性修改元素尺寸(非 style 属性)
- CSS 尺寸: 通过 CSS 指定元素尺寸

优先级： CSS 尺寸 > HTML 尺寸 > 固有尺寸(宽高比例) > 固有尺寸(尺寸数值)

## 盒子模型

### 盒子尺寸

内联非替换元素的垂直方向 margin padding border 不加入高度计算，但会发送渲染

margin 和 padding 百分比值基于父级**宽度**计算

滚动内容底部留白使用 margin 代替 padding 可以兼容 IE 和火狐

### 外边距合并

块级元素，垂直方向(默认 writing-mode 下)上会出现外边距合并现象(正值合并取大值，负值合并取小值，正副合并取和值)

- 兄弟元素：元素的下边距与相邻兄弟的上边距进行合并
- 父子元素：父元素与首个或末尾子元素上下边距进行合并，满足以下任一条件即可消除该现象
  - 父元素设置为块状格式化上下文元素
  - 父元素设置 border-top/bottom
  - 父元素设置 padding-top/bottom
  - 父元素与首个或末尾子元素之间添加内联元素
  - 对于**底部**外边距合并，设置父元素高度(height, min-height, max-height) 也可消除
- 空块级元素：元素自身上下边距进行合并，满足以下任一条件即可消除该现象
  - 设置 border-top/bottom
  - 设置 padding-top/bottom
  - 添加内联元素
  - 设置高度(height, min-height)

### 幽灵空白节点

HTML5 声明中，内联元素前会创建一个同行高的 0 宽内联盒子；可以使用 `font-size: 0`修正

```pug
div
  span
```

### BFC | IFC | FFC | GFC

BFC: 块级格式化上下文，内部元素与外部元素相互隔离，满足以下条件之一即可

- 如何创建
  - 根元素
  - 浮动元素
  - 脱离文档流: position: fixed|absolute
  - 行内块级元素: inline-block、table-cell、table-caption
  - overflow 非 visible 的块级元素
  - 弹性元素
  - 网格元素
  - 多列容器
- 解决问题
  - 浮动元素带来的高度塌陷(通常设置 `overflow: auto|hidden`)
  - 外边距合并

IFC: 行内格式化上下文

- 如何创建
  - 内联元素
  - 文本元素
- 表现特点
  - 忽略垂直方向 padding、margin
  - 尺寸根据内容决定
  - 块方向上对齐：`vertical-align`
  - 行内方向上对齐：`text-align`

## 属性相关

### 隐藏元素的方式

- 视觉上隐藏
  - `opacity: 0`
  - `visibility: hidden`
  - `transform: scale(0, 0)`
- 文档中隐藏
  - `display: none`

### 定位

- static
- relative
- absolute
- fixed
- stick: 粘性定位(类似于滚动吸顶的效果)

### 浮动

浮动的特点

- 包裹性/自适应：未设置宽度的浮动元素宽度为内容宽度，且不超过父元素宽度
- 块状化并格式化上下文：浮动元素 display 转换为 block 或 table
- 破坏文档流
- 无 margin 合并

清除浮动

- 在浮动元素后添加空元素并设置 `clear: both` (left/right 本质上只有一种情况生效)
  - 作用于块级元素，让当前元素不受前一个 float 元素影响(不会改变 float 元素本身)
  - left/right 对应前一个 float 元素的浮动方向，使用 both 可以免去判断
- 创建 BFC，给浮动元素容器添加 `overflow: hidden|auto`
- 利用伪元素，给浮动元素后添加 `::after { content: ""; display: block; clear: both; }`

## 布局相关(TODO:)
