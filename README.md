#### gulp-cdn
gulp-cdn: replace html file name used cdn

Documentation

[中文](https://github.com/roninliu/gulp-cdn/blob/master/README-ZH.md "中文") | [English](https://github.com/roninliu/gulp-cdn/blob/master/README.md "英文")

- installation
`` `javascript
npm install gulp-cdn --save-dev
`` `
- use
`` `javascript
var gulp = require ('gulp');
var cdn = require ('gulp-cdn');
gulp ("default", function () {
return gulp.src ("./ src / *. html")
.pipe (cdn ({
	domain: "http://localhost",
	cdn: "http://cdn"
}))
.pipe (gulp.dest ("./ dist /"))
})
`` `
- result
`` `html
Replace before:
<script src = "http: //localhost/js/common.js"> </ script>
<link rel = "stylesheet" type = "text / css" href = "http: //localhost/index.css">
<img src = "http: //localhost/img/share.png" alt = "">
`` `

`` `html
Replace after:
<script src = "http: //cdn/js/common.js"> </ script>
<link rel = "stylesheet" type = "text / css" href = "http: //cdn/index.css">
<img src = "http: //cdn/img/share.png" alt = "">