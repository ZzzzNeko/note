# node 版本管理

由于 node 版本迭代较快，一段时间未维护的项目可能在某个版本之后便无法正常运行； <br/>
借助 node 版本工具可以方便在不同项目之间进行切换，以及新版本的体验等。

## [nvm-windows](https://github.com/coreybutler/nvm-windows)

由于 nvm 本身记于 linux 开发，windows 平台可以使用 nvm-windows

### 安装

1. 若本地存在 node, 需要先删除 node
2. [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases), 下载并安装

### 使用

```bash
# 安装
nvm install lts
nvm install <version>

# 删除
nvm uninstall <version>

# 切换版本
nvm use <version>

# 查看已安装版本
nvm list

# 查看使用方法
nvm -h
```

```bash
# 配置代理
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror  https://npm.taobao.org/mirrors/npm/
```

## n

Linux 中的 node 版本管理工具, 不支持 Windows 系统

### Install

```bash
npm i -g n
```

### Use

```bash
# 安装
## 安装指定版本
n <version>
## 安装标记版本，latest-最新 stable-稳定 lts-长期支持
n latest
n stable
n lts

# 删除(可以简写为减号)
n rm <version>
n - <version>
# 删除非当前版本
n prune
# 切换指定版本
n use <version>

# 查看帮助
n --help
```
