## git

一个特殊的仓库 `github用户名.github.io` 该仓库会被部署到同名的服务器下，所以网上直接访问 `github用户名.github.io` 地址就能直接访问该仓库下的项目,一般我们程序员不直接在 github 网站上操作仓库，而是下载 git 到本地使用 git 命令操作 github。

### 使用命令行操作 Git

首先需要安装 git

- windows 直接安装 gitbash 命令行即可。因为 gitbash 自带 git 命令。
- linux 使用命令 `sudo apt-get install git`
- mac 安装 homebrew 使用 `brew install git`
- 使用 git --version 查看 git 版本

#### 网上已经创建好了仓库并且有内容

- 克隆仓库到本地
  ```
    git clone 仓库地址
  ```
- 修改本地克隆好的项目

- 本地更新好了需要更新到 github 远端

  - 将修改提交到 git 让 git 做记录 `git add .`
  - 将远端记录的修改做成版本并提交版本留言 `git commit -m'更新了idnex.html'`
  - 将做好的版本提交到远端 `git push`

  当你第一次做版本的时候会失败，github 会提示你 `please tell me who you are？`，需要使用一下命令告诉 Git 你是谁，每写完一句回车。

  ```shell
    git config --global user.name "Sunny-zz"
    git config --global user.email "695340402@qq.com"
  ```

  执行完之后，重新执行 `git commit -m'留言'`

- 由于用的是 http 克隆 ，所以当向网上提交时，需要提供与户名和密码

#### 本地做好的项目，托管到 github

- 网上新建一个空的仓库（仓库名最好和本地的项目名一致）
- 进入到本地项目内 执行 `git init`，将本地的项目初始化成一个 git 仓库
- 执行 `git add .`
- 执行 `git commit -m'第一次提交'`
- 第一次要是直接 `git push` 的话会失败,原因是不知道往远端的那个仓库 push，需要提供远端地址 `git remote add origin https://github.com/Sunny-zz/yiya.git`
- 然后执行 `git push --set-upstream origin master` 就可以提交了
- 之后在修改的话执行 git 三步即可

#### 如何让其他仓库内的页面可以访问

- 进入到你的仓库打开命令行
- 执行 `git branch gh-pages` ,创建一个新的分支,分支名叫 gh-pages ,创建新的分支时(分之内的内容和 master 一样)
- 执行 `git checkout gh-pages` 切换到分支 gh-pages
- 直接 `git push`,提示远端不存在此分支，需要创建之后再提交执行 `git push --set-upstream origin gh-pages`

#### git 版本回退

- 查看仓库存在哪些版本 `git log --oneline`
- 可以使用 `git reset --hard 版本号(前四位)` 实现本地版本回退
- 就要使用 `git push` 更新到远端，但是会失败，提示远端有优先于本地的版本。我们想要回退就需要强制提交 `git push -f`
- 还可以使用 `git reflog` 查看历史版本，实现撤销回退。

#### 每次提交都需要用户名密码，使用 ssh 秘钥避免

- 打开命令行执行 `ssh-keygen` 生成了秘钥
- 找到你的秘钥 `cd ~/.ssh`
- 查看公钥 `cat id_rsa.pub` 复制里面内容
- 打开 github 网站找到用户设置里面的 SSH,添加一个新的秘钥

#### git 分支操作

- `git branch 分支名` 创建分支
- `git branch` 查看本地分支 加参数 -r 查看远端分支
- 将其他分支的更新合并到主分支(合并的前提是所有分支和网上一致) 切换到主分支, 执行 `git merge 其他分支名`
- `git merge`的时候会弹出一个额外的窗口需要提供留言，使用 shift + z + z 保留关闭.
- 当有多个分支合并时同时修改了同一个文件合并会失败，需要手动处理合并，并且做版本再提交

#### 多人在一个分支上合作

- 同事 a 向项目提交了一个版本
- 你在不清楚的情况下在自己的本地添加修改并做成版本提交，此时会提交失败(因为远端存在本地不存在的更新)，需要 `git pull` 拉取远端更新之后，在提交
- 上述过程如果两次更新(同事的更新和自己的更新)不是同一个文件，git 会自动合并版本并提示你提交版本留言(弹出一个其他界面),直接按 shift + z + z 即可
- 上述过程如果两次更新了相同的文件，`git pull` 的时候就会失败提示手动处理冲突之后在 `git push`

#### 常用 git 命令

- git status 查看当前仓库的状态
