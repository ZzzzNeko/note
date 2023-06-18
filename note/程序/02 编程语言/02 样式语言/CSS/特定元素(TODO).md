# 特定元素

## 表格

- 表格布局: `table-layout`
  - `auto`: 默认，按照表格的内容进行布局
  - `fixed`: 按照表格的列宽度进行布局
    - 没有设置则按照列数均分宽度
    - 在表格没有设置具体宽度的时候无效（设置 min-width 没有效果）
- 边框表现: `border-collapse`
  - `separate`: 默认，每个单元格边框独立
  - `collapse`: 单元格边框合并

注意：若给 `tr` 设置 `border`，需要指定其 `table` 为 `border-collapse : collapse;`，否则不生效

若需要表格内容不换行完整展示，需要给 table 设置

- `overflow-x: auto`
- `white-space: nowrap`

## 列表
