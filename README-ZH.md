## gulp-cdn插件

------

gulp-cdn：替换html中需要使用cdn域名的文件，自动替换对应域名的全部url，支持替换javascript，css，img等使用域名引入的html,js,css代码

### 说明文档
[中文](https://github.com/roninliu/gulp-cdn/blob/master/README-ZH.md "中文") | [English](https://github.com/roninliu/gulp-cdn/blob/master/README.md "英文")


------

### 1. 安装

```javascript
npm install gulp-cdn --save-dev
```

### 2. gulpfile配置

```javascript
var gulp = require('gulp');
var cdn = require('gulp-cdn');
gulp("default", function() {
return gulp.src("./src/*.html")
.pipe(cdn({
	domain: "http://localhost",
	cdn: "http://cdn"
}))
.pipe(gulp.dest("./dist/"))
})
```
或者数组配置
---
```javascript
var gulp = require('gulp');
var cdn = require('gulp-cdn');
gulp("default", function() {
return gulp.src("./src/*.html")
.pipe(cdn([{
	domain: "http://localhost",
	cdn: "http://cdn"
},{
	domain: "http://localhost2",
	cdn: "http://cdn2"
}]))
.pipe(gulp.dest("./dist/"))
})
```

### 3. 使用后效果 
- 替换前
```html
<script src="http://localhost/js/common.js"></script>
<link rel="stylesheet" type="text/css" href="http://localhost/index.css">
<img src="http://localhost/img/share.png" alt="">
```

- 替换后
```html
<script src="http://cdn/js/common.js"></script>
<link rel="stylesheet" type="text/css" href="http://cdn/index.css">
<img src="http://cdn/img/share.png" alt="">
```
	具体用法请参考[example](https://github.com/roninliu/gulp-cdn/tree/master/example "示例")

### change log
2016-01-04: 支持数组的配置方式


## 更多问题请直接联系Ronin(roninliu@foxmail.com)