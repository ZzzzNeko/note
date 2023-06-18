# 常用配置

## 插件

- chinese
- gitlens
- markdown preview enhance
- markdownlint
- prettier
- sass
- todo highlight
- typescript vue plugin(volar)
- vue language features(volar)
- tailwind css IntelliSense

## 配置

```json
{
  // 编辑器配置
  "workbench.colorTheme": "Default Dark+",
  "editor.fontSize": 18,
  "editor.fontFamily": "仿宋, Consolas, 'Courier New', monospace",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "debug.console.fontSize": 16,
  "markdown.preview.fontFamily": "仿宋, Consolas, 'Courier New', monospace",
  "markdown.preview.breaks": true,

  // 语言格式化
  "javascript.preferences.quoteStyle": "double",
  "typescript.preferences.quoteStyle": "double",
  "prettier.arrowParens": "avoid",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "diffEditor.wordWrap": "off",
    "editor.wordWrap": "off"
  },
  "[typescript]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
    "editor.defaultFormatter": null
  },

  // markdown lint
  "markdownlint.config": {
    "MD033": false
  },

  // style lint
  "scss.lint.unknownAtRules": "ignore",
  "css.lint.unknownAtRules": "ignore",
  "less.lint.unknownAtRules": "ignore",
  "editor.codeLensFontFamily": "仿宋, Consolas, 'Courier New', monospace",
  "terminal.integrated.defaultProfile.windows": "Command Prompt",
  "volar.codeLens.references": false,
  "volar.codeLens.pugTools": true,
  "explorer.compactFolders": false,
  "git.confirmSync": false,
  "explorer.sortOrder": "type",
  "editor.inlayHints.fontFamily": "仿宋, Consolas, 'Courier New', monospace",
  "scm.inputFontFamily": "仿宋, Consolas, 'Courier New', monospace",
  "debug.console.fontFamily": "仿宋, Consolas, 'Courier New', monospace",

  // 插件配置 [TODO]
  "todohighlight.keywords": [
    {
      "text": "TODO:",
      "color": "Yellow",
      "backgroundColor": "none"
    },
    {
      "text": "NOTE:",
      "color": "red",
      "backgroundColor": "none"
    }
  ]
}
```
