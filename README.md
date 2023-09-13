# CICD-demo

最初后为了学习Github Actions， 后来想了下加一下内容打通前端工程化整个流程

主要功能点如下

- [x] 使用`webpack`构建，区分开环境和生产环境，打包纯原生项目（无框架）
- [x] 支持 `ts` 采用 babel编译ts， 缺点是类型检查使用心得命令 `npx tsc --noEmit --watch`
- [x] 支持 `babel` 根据`browserslist`打补丁， 默认支持的是`android 7` 和 `ios 12`， 你可以调整`browserslist` 写一下es6句法或API试试看
- [x] 支持 `sass`
- [x] 支持 `postcss`，只用了`postcss-preset-env`一个插件，它也是根据`browserslist`打补丁的
- [x] 代码规范采用的是 `eslint` + `prettier` + `editorconfig`
- [x] 单元测试采用`jest`
- [x] 提交代码前会格式化代码 + 执行单元测试
- [x] push到main分支 会触发workflow，连接服务器、拉代码、打包、部署。
