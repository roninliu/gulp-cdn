####gulp-cdn
gulp-cdn：替换html中使用cdn域名的文件

说明文档
[中文](https://github.com/roninliu/gulp-cdn/blob/master/README-ZH.md "中文") | [English](https://github.com/roninliu/gulp-cdn/blob/master/README.md "英文")

- 安装
```javascript
npm install gulp-cdn --save-dev
```
- 使用
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
- 结果
```html
替换前：
<script src="http://localhost/js/common.js"></script>
<link rel="stylesheet" type="text/css" href="http://localhost/index.css">
<img src="http://localhost/img/share.png" alt="">
```

```html
替换后：
<script src="http://cdn/js/common.js"></script>
<link rel="stylesheet" type="text/css" href="http://cdn/index.css">
<img src="http://cdn/img/share.png" alt="">
```
