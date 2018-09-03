# 定制主题

✨✨mor-design 在设计上支持了一定程度的自定义主题样式，以满足业务个性化的视觉需求。

<img src="http://static.monajs.cn/mona-home/custom-theme.jpg"/>


## 样式变量

mor-mobile 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据业务需求进行相应调整。

- [默认样式变量](https://github.com/func-star/mor-mobile/blob/master/lib/style/theme.less)

如果这些样式不能满足你的个性化需求，你可以给我们提 issue。

## 修改样式

采用 `less` 文件进行变量覆盖

> 需要注意，这种方式默认载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。

建立一个单独的 `less` 文件，再引入该文件。

```
@import "~mona/lib/theme.less";   // 引入官方提供的 less 主题入口文件
@import "your-theme-file.less";   // 用于覆盖上面定义的变量
@import "~mona/lib/index.less";	  // 组件样式文件
```
