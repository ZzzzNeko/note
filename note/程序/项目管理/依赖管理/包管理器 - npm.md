# 包管理器 - npm

## 配置代理

```bash
npm config set registry https://registry.npm.taobao.org
```

## 常用指令

```shell
# 初始化项目，会根据问答创建一个 package.json 文件
npm init
# 全局安装, windows下与node.exe同目录，UNIX下通常是/usr/local/lib/node_modules目录
npm install -g module_name
# 安装到当前项目
## --save(简写 -S) 表示生产环境依赖, 写入 dependencies 字段
## --save-dev(简写 -D) 表示开发环境依赖, 写入 devDependencies 字段
npm install --save [moudle_name]
# 卸载(简写 npm un [moudle_name])
npm uninstall [moudle_name]
# 搜索-远程: 列出搜索匹配的包信息(版本、日期、作者 等)
npm search [module_name]
# 搜索-本地: 列出项目安装的包信息(版本、路径、依赖 等)
npm list [module_name]
```

## npm scripts

通过配置 `scripts` 字段可以通过 `npm run [script]` 在命令行执行

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

## 本地 link

`npm link` 通常用于本地包之间的相互引用

- `npm link`: 从当前包路径中创建一个符号链接到全局
- `npm link [<@scope>/]<pkg>[@<version>]`: 链接已经存在的全局包
- `npm unlink`: 从全局中删除当前包的符号链接
- `npm unlink [<@scope>/]<pkg>[@<version>]`: 删除当前引用的全局包链接

```js
// linked-package
module.exports = function () {
  console.log("linked");
};
// npm link
```

```js
// npm link linked-package
const linked = require("linked-package");
linked();
```

说明

- `npm link` 根据 `package.json` 中的 `name` 属性创建链接包名
- `npm link <pkg>` 会在本地创建包的软链接，其内容随源包内容变化

## 项目发布

```bash
# 通过 npm 创建一个账号
# 登录 npm
npm login
# 查看当前用户
npm whoami
```

```bash
# 发布(发布前需要确保 name 和 version 合规)
npm publish
# 删除
npm --force unpublish
```

说明: 版本管理依赖于 `package.json`, 需要关注以下字段

- 主要信息: `name`、`version`、`author`、`description`、`repository`、`license`
- 次要信息: `keywords`、`homepage`、`contributors`、`maintainers`
- 项目内容:
  - 模块类型: `type`(取值 'commonjs'(默认) 和 'module')
  - 入口文件: `main`(对应 commonjs 引入)、`module`(对应 esm 引入)
  - 依赖文件: `files`(支持目录)
  - 声明文件: `types`
  - 其他信息: `exports`、`bin`、`dependencies`、`devDependencies`、`engines` 等

发布内容

- 默认包含: `package.json` 和 `readme.md` 文件
- 规则排除: `.gitignore` 和 `.npmignore` 指定的内容将忽略
- 指定包含: `package.json` 配置的 `files`

## npx

若包支持二进制脚本(通常为 `bin` 中配置的脚本)，使用时通常需要在 `scripts` 进行对应的配置，再通过 `npm run` 去间接运行 <br/>
`npx` 则可以跳过上述的流程，直接执行, 如 `npx create-next-app` <br/>
若本地没有安装依赖包 `npx` 会搜索并安装并在脚本执行后进行删除 (减少一次性命令的污染)
