# 图的元素 - Shape

`Shape` 用于组成 `Node`, `Edge`, `Combo`; <br />
`Shape` 可以是 `keyShape`(唯一) 及其附加内容的组合(如: 文本、交互用的锚点) <br/>

`keyShape` 的特点

- 响应样式: `Node`、`Edge`、`Combo` 中 `style` 配置只作用在 `keyShape` 中
- 包围盒确定：确定 `Node`、`Combo` 的包围盒(可以理解为边界)，影响相关边的接入点

`Shaape` 生命周期包括以下部分

1. 绘制: `.draw(cfg, group)`
2. 更新: `.update(cfg, n)`
3. 操作: `.setState(name, value, item)`
4. 销毁: 可交给 `Graph` 处理

## 通用属性

```ts
/**
  - `fill`、`stroke`: 对应 `canvas` 的`fillStyle`、`strokeStyle`
  - `lineWidth`、`lineDash`: 边 宽度、虚线
  - `shadowColor`、`shadowBlur`: 阴影 颜色、模糊
  - `shadowOffsetX`、`shadowOffsetY`: 阴影 水平偏移、垂直偏移
  - `opacity`、`fillOpacity`: 绘图透明度、填充透明度
  - `cursor`: 鼠标样式
 */
interface Style {
  fill?: string
  stroke?: string
  lineWidth?: number
  lineDash?: number[] // [实线长度, 虚线长度]
  shadowColor?: string
  shadowBlur?: number // 阴影范围
  shadowOffsetX?: number
  shadowOffsetY?: number
  opacity?: number
  fillOpacity?: number
  cursor? string  // 同 css cursor
}
```

```ts
// 文本样式
interface LabelStyle {
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  opacity?: number;
  fontFamily?: string;
  fontSize?: number;
}
```

```js
// 示例
group.addShape("rect", {
  attrs: {
    fill: "red",
    opacity: 0.8,
  },
  name: "demo-rect",
});
```

## 内置 Shape

| 类型     | 图形   | 属性                                                                                                           |
| -------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| circle   | 圆     | x: 圆心坐标 x, y: 圆心坐标 y, r: 圆的半径                                                                      |
| rect     | 矩形   | x: 左上角坐标 x, y: 左上角坐标 y, width: 宽, height: 高, radius: 圆角                                          |
| ellipse  | 椭圆   | x: 圆心坐标 x, y: 圆心坐标 y, rx: 水平半径, ry: 垂直半径                                                       |
| polygon  | 多边形 | points: 端点坐标(`[x, y][]`)                                                                                   |
| image    | 图片   | x: 左上角坐标 x, y: 左上角坐标 y, width: 宽, height: 高, img: 图片源                                           |
| marker   | 标记   | x: 中心坐标 x, y: 中心坐标 y, r: 形状半径, symbol: 指定形状                                                    |
| path     | 路径   | [文档](https://g6.antv.antgroup.com/manual/middle/elements/shape/shape-and-properties#%E8%B7%AF%E5%BE%84-path) |
| text     | 文本   | [文档](https://g6.antv.antgroup.com/manual/middle/elements/shape/shape-and-properties#%E6%96%87%E6%9C%AC-text) |
| dom(svg) | DOM    | html: [文档](https://g6.antv.antgroup.com/manual/middle/elements/shape/shape-and-properties#dom-svg)           |

## 图形分组(Group)

`Group` 类似于 `<g>` 标签，是组合图形的容器，一般用于自定义节点或边，`Group` 上的变换会应用到所有子元素上 <br/>
`Graph` 实例中所有节点属于名为 `nodeGroup` 的 `group`，所有边属于名为 `edgeGroup` 的 `group` <br/>
`nodeGroup` 的层级高于 `edgeGroup`，即所有节点会会绘制在边的上层。

**常用方法**

```js
// graph 中的 group
const graphGroup = graph.get("group");
const nodeGroup = graph.get("nodeGroup");
const edgeGroup = graph.get("edgeGroup");
const graphContainer = graph.getContainer(); // 注：这里的 `container` 指向 `Graph` 的挂载 DOM

// node|edge|combo 中的 group
const containerGroup = item.getContainer();
const containerGroup = item.get("group"); // 这里 `group` 指向自身，即 `container`

// 添加子元素
const subShape = group.addShape(type, cfg); // 添加子 `Shape`
const subGroup = group.addGroup(cfg); // 添加子 `Group`
```

**分组变换**

```js
group.translate(x, y) // 移动元素(相对)
group.move(x, y)      // 移动元素(绝对)
group.rotate(radian)  // 旋转
group.scale(sx, sy)   // 按 x，y 轴比例缩放
group.scale(s)    // 缩放
group.getMatrix() // 获取矩阵变换
group.setMatrix(m: number[])   // 设置矩阵变换
group.resetMatrix() // 清楚所有变换

// 原提供了 group.transform(cfg) 及对应的缩写以实现常用的转换，4.x 版本貌似移除了
// 可以通过 `@antv/matrix-util` 获取转换工具
/**
  | 方法             | 简写          |
  | ---------------- | ------------- |
  | translate(x, y)  | ['t', x, y]   |
  | move(x, y)       | ['m', x, y]   |
  | rotate(radian)   | ['r', r]      |
  | scale(sx, sy)    | ['s', sx, sy] |
  | scale(s)         | ['s', s]      |
 */
```

## 自定义 Shape

```js
// 示例 - 同心圆
G6.registerNode("c-c", {
  draw(cfg, group) {
    const x = cfg.x || cfg.size;
    const y = cfg.y || cfg.size;
    const keyShape = group.addShape("circle", {
      attrs: { x, y, r: cfg.size, stroke: "black" },
    });
    group.addShape("circle", {
      attrs: { x, y, r: cfg.size / 2, stroke: "black" },
    });
    return keyShape;
  },
});
const node = { type: "c-c", size: 50 };
```
