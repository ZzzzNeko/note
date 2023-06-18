# 常用操作

## 切换语言

vscode 在 mac 上更新后，由概率会重置系统语言，需要手动切换进行修复

### 操作

1. ctrl + shift + p
2. 选择 configuage display language
3. 选择 中文

## 代码片段

1. ctrl + shift + p
2. configuage user snippets
3. 新建代码片段 或 修改已保存的片段
   - `prefix`: 该字段为触发代码提示的前缀
   - `body`: 该字段为代码提示的正文

```json
// 示例，快速创建 vue3 模板
{
  "Print to console": {
    "prefix": "vue3",
    "body": [
      "<template lang=\"pug\">",
      "</template>",
      "",
      "<script lang='ts' setup>",
      "import { ref, reactive, computed, watch, onMounted } from 'vue'",
      "interface Props {",
      "",
      "}",
      "interface Emits {",
      "",
      "}",
      "const props = defineProps<Props>()",
      "const emits = defineEmits<Emits>()",
      "</script>",
      "",
      "<style lang=\"scss\" scoped>",
      "",
      "</style>"
    ]
  }
}
```
