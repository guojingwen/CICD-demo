# CICD-demo

最初后为了学习Github Actions， 后来想了下加一下内容打通前端工程化整个流程

主要功能点如下

- [x] 使用`webpack`构建，区分开环境和生产环境，打包纯原生项目，不是用框架或脚手架是为了再熟悉一下webpack配置
- [x] 支持 `ts` 采用 `babel`编译`ts`， 缺点是类型检查使用新得命令 `npx tsc --noEmit --watch`
- [x] 支持 `babel` 根据`browserslist`打补丁， 默认支持的是`android 7` 和 `ios 12`， 你可以调整`browserslist` 写一下es6句法或API试试看
- [x] 支持 `sass` （今天发现`dart-sass`变更为`sass`，相对于`node-sass`，它不受`node`版本影响）
- [x] 支持 `postcss`，只用了`postcss-preset-env`一个插件，它也会根据`browserslist`给样式打补丁的
- [x] 代码规范采用的是 `eslint` + `prettier` + `editorconfig`，建议安装`VSCode`的对应的插件并配置`VSCode`保存自动格式
- [x] 单元测试采用 `jest`
- [x] 通过`lint-staged`工具配置了`pre-commit`检查，提交代码前会格式化代码然后执行单元测试，只有执行通过才能`commit`
- [x] 配置`push`到`main`分支才触发`workflow`，连接服务器、拉代码、打包、部署。

[使用GithubActions实现CICD流程](https://blog.warmplace.cn/post/github-actions)

[前端代码规范梳理](https://blog.warmplace.cn/post/specification)
