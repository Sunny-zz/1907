## npm

node package manager 的缩写，npm 可以帮你管理你的项目依赖(第三方的模块)，但是你的项目依赖必须从我这里下载才能帮你管理。把你的项目变成一个 npm 项目。

### npm 的安装

安装了 node 之后自带 npm 工具.

### npm 的使用

- 将项目变成 npm 项目 `npm init`
- 项目中要使用 jquery 依赖的话，需要使用 npm install 下载 `npm i jquery` 名字后面 @版本号，可以使用 `npm uninstall jquery` 卸载
- npm 还有一种全局安装方式 `npm i -g serve` 卸载的话 `npm uninstall -g serve`,全局安装之后这个包的命令在任何地方都可以使用
- npm 安装包的时候可以加参数 `--save-dev` `-D` 安装非项目必须依赖的包，安装项目的必须依赖可以参数 `-S` `--save` 或者不加参数
- npm 项目相互传递时，是不需要传递 node_modules (因为文件太多，太大),但是当别想把项目跑起来就需要 node_modules ，所以需要执行 `npm i` 把所有的项目依赖全部下载下来。
  非项目必须依赖的意思，项目没有这个包也能跑起来

#### npm 使用的优化

- npm 下载时展示下载进度 `npm config set loglevel=http`
- npm 更换淘宝镜像源 `npm config set registry https://registry.npm.taobao.org`
