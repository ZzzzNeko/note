# 图的元素 - Combo

`Combo` 是一类 `Node` 的集合，用于描述 `Node` 的归类以及 `Combo` 之间的从属关系 <br/>
配置 `Node` 时指定其 `comboId` 属性可以进行归类 <br>
使用时需要配置 `graph` 的 `groupByTypes: false` 让 combo 的元素视觉层级合理

## Combo 属性

内置 `Combo` 为 'circle' 和 'rect', 属性基本相同(尺寸描述存在差异)

```ts
/**
 * NOTE: 此处字段结合了文档(缺失了 `collapseIcon`、`depth`、`children` 字段)和声明文件(缺失了 `fixSize`、`fixCollapseSize`)
 * @see https://g6.antv.antgroup.com/manual/middle/elements/combos/default-combo
 */
interface Combo {
  id: string;
  type?: "rect" | "circle" | string; // combo 类型, 支持 内置 combo 或自定义 combo, 默认 'circle'
  parentId?: string; // 父级 combo id
  padding?: number | number[]; // 内边距
  size?: number | number[]; // 最小尺寸, 'circle' 为直径, 'rect' 为 宽高
  fixSize?: number | number[]; // 固定尺寸, 'circle' 为直径, 'rect' 为 宽高
  fixCollapseSize?: number | number[]; // 收起时尺寸, 'circle' 为直径, 'rect' 为 宽高
  style?: Style; // 参见 Shape 通用属性
  label?: string;
  labelCfg?: {
    position?: "center" | "top" | "left" | "right" | "bottom"; // 文本相对 combo 位置, 默认 'top'
    refX?: number; // label 在x轴偏移量
    refY?: number; // label 在y轴偏移量
    style?: LabelStyle; // 参见 Shape 通用属性
  };
  collapsed?: boolean; // 是否收起，默认 false
  // 收起状态下展示 icon
  collapsedSubstituteIcon?: Partial<{
    show: boolean;
    img: string;
    width: number;
    height: number;
  }>;
}
```

## 配置 Combo

```js
// 配置默认 Combo, 其配置内容会被 data 中数据替换
const graph = new G6.Graph({
  container: 'demo', width: 800, height: 600
  defaultCombo: { type: 'rect', style: { strkoe: 'red' } } // 默认 Combo, 包含部分配置项
})

// 数据中进行配置, 优先级高于 `defaultCombo` 且配置项完整
const data = {
  nodes: [
    { id: 'a-1', comboId: 'comboA' },
    { id: 'a-2', comboId: 'comboA' },
    { id: 'b-1', comboId: 'comboB' },
    { id: 'b-2', comboId: 'comboB' },
    { id: 'o', comboId: 'comboP' },
  ],
  edges: [
    { source: 'a-1', target: 'a-2' },
    { source: 'b-1', target: 'b-2' },
  ],
  combos: [
    { id: 'comboA', label: 'A', parentId: 'comboP' },
    { id: 'comboB', label: 'B', parentId: 'comboP' },
    { id: 'comboP', label: 'P' }
  ]
}
graph.data(data)

// 通过方法包装，优先级最高，将覆盖已有的 combo 配置
// 该方法需要在 `.render()` 之前调用；该方法在增加元素、更新元素时会被调用
graph.combo(combo => ({
  style: { stroke: 'red' }
  // ...
}))
graph.render()
```

## 内置交互

| 交互                  | 用途                                                   |
| --------------------- | ------------------------------------------------------ |
| drag-combo            | 拖拽 `combo` 并改变其位置, 可以调整 `combo` 的从属关系 |
| drag-node             | 拖拽 `combo` 中的 `node`, 可以调整 `node` 的父级       |
| collapse-expand-combo | 双击 `combo` 控制其展开与收缩                          |

```js
const graph = new Graph({
  container: "demo",
  width: 500,
  height: 500,
  groupByTypes: false,
  modes: {
    default: ["drag-combo", "collapse-expand-combo", "drag-node"],
  },
});
```

<!-- TODO: ## 自定义 Combo -->
