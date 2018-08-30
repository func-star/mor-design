# 快速使用

✨✨这是 Mona 系列的 React 实现，服务与移动端 H5 产品。

## 安装

### NPM

```bash
npm i mor-mobile --save
```

### 按需加载

- 使用 babel-plugin-import（推荐用法）

`babel-plugin-import` 是一款 `babel` 插件，它会在编译过程中将 `import` 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -dev
```

```
.babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "mor-mobile",
      "libraryDirectory": "lib",
      "style": true // 加载 less 文件
    }]
  ]
}
```

- 手动引入

```js
import DatePicker from 'mor-mobile/lib/modal';  // 加载 JS
import 'mor-mobile/lib/modal/style';         // 加载 LESS
```

✨✨你也可以为`mor-mobile` 起一个别名，让代码变的更好看一点

```
// webpack 添加解析配置
...
resolve: {
	extensions: ['.js', '.jsx'],
	alias: {
		'mona': path.resolve('./node_modules/mor-mobile')
	}
}
...
```
```
.babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "mona",
      "libraryDirectory": "lib",
      "style": true // 加载 less 文件
    }]
  ]
}
```

### 开始使用
接着你可以在代码中直接引入 Mor-mobile 组件

```js
import { Row, Col } from 'mona';
```

