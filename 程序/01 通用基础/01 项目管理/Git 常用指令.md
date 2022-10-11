[toc]

# 常用指令

## 初始化

`git init`: 将指定目录初始化为一个 git 仓库，该目录作为工作目录

- 工作目录: 存放仓库的实际文件
- 缓存区: 存放临时改动
- HEAD: 指向当前版本，默认指向最近一次提交后的结果

## 将文件添加到缓存区

- `git add <fileName>` : 将指定文件添加到缓存区
- `git add .` / `git add *` : 将所有文件添加到缓存区

## 将文件提交到 git 仓库

`git commit -m "discribe"` : 将缓存区内发生的变动提交到当前分支，这里 'discribe' 为本次提交内容的描述信息

## 远端推送

- `git remote`: 查看远端仓库
- `git remote -v`: 查看远端仓库详细信息
- `git remote add origin <server>` : 将本地仓库与远端仓库进行绑定，如果已经绑定则无需执行该操作
- `git push origin master` : 将本地仓库推送至远端仓库

## 克隆远端仓库

`git clone <server>`

## 查看仓库状态

- `git status`: 查看仓库状态
- `git diff`: 查看改动内容(工作区与缓存区比较)
- `git diff --cached`: 查看改动内容(缓存区与分支比较)
- `git log`: 查看操作日志，无法查看已经删除的 commit 记录(退回时会删除退回版本之后的日志信息)
- `git log --pretty=oneline` : 查看日志，格式化后显示
- `git reflog`: 查看所有分支的所有操作记录(包括被删除的记录)

## 版本切换

- `git reset --hard HEAD`: 退回到上一个版本
- `git reset --hard <commit id>`: 切换到指定版本(版本 id 可以通过`git reflog`查看)

## 撤销修改

`git checkout -- <filename>`

- 如果该文件添加到缓存区后又进行了修改，则撤销修改退回至缓存区状态
- 如果该文件修改后未添加到缓存区，则撤销修改退回至版本库状态

`git reset HEAD <filename>`: 撤销缓存区的修改至版本库状态，这里`HEAD`表示最新版本

## 删除文件

`git rm <filename>`: 删除指定文件并提交到缓存区

## 分支

默认的分支为主分支，即`master`分支

- `git checkout -b <branch>`
  - 创建并切换到一个自定义分支
  - 该指令相当于 `git branch <branch>`(创建一个分支) 、 `git checkout <branch>`(切换到指定分支)
- `git branch`: 查看分支(当前分支会用 '\*' 号标记)
- `git merge <branch>`: 合并指定分支到当前分支
- `git branch -d <branch>`: 删除指定分支(未合并的分支无法删除)
- `git branch -D <branch>`: 强制删除指定分支(用于删除未合并的分支，通常用于开发内容被取消而无需合并的分支)
