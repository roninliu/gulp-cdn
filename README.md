## Gulp-cdn plug

------

gulp-cdn: replace the html files require cdn domain automatically replace all the corresponding domain url, support the replacement javascript, css, img, etc. html, css , javascript code introduced using the domain name

### Documentation
[Chinese] (https://github.com/roninliu/gulp-cdn/blob/master/README-ZH.md "Chinese") | [English] (https://github.com/roninliu/gulp-cdn/ blob / master / README.md "English")


------

### 1. Installation

```Javascript
npm install gulp-cdn --save-dev
```

### 2. gulpfile Configuration

```Javascript
var gulp = require('gulp');
var cdn = require('gulp-cdn');
gulp("default", function(){
return gulp.src ("./src/*.html")
.pipe(cdn({
domain:"http://localhost",
cdn:"http://cdn"
}))
.pipe (gulp.dest("./dist/"))
})
```
or array config
---
```Javascript
var gulp = require('gulp');
var cdn = require('gulp-cdn');
gulp("default", function(){
return gulp.src ("./src/*.html")
.pipe(cdn([{
domain:"http://localhost",
cdn:"http://cdn"
},{
domain:"http://localhost2",
cdn:"http://cdn2"
}]))
.pipe (gulp.dest("./dist/"))
})
```

### 3. Using After Effects
- Replace ago
```Html
<Script src = "http: //localhost/js/common.js"> </ script>
<Link rel = "stylesheet" type = "text / css" href = "http: //localhost/index.css">
<Img src = "http: //localhost/img/share.png" alt = "">
```

- Replace after
```Html
<Script src = "http: //cdn/js/common.js"> </ script>
<Link rel = "stylesheet" type = "text / css" href = "http: //cdn/index.css">
<Img src = "http: //cdn/img/share.png" alt = "">
```

see example[example](https://github.com/roninliu/gulp-cdn/tree/master/example "example")

### change log
2016-01-04: support array config 

## More questions, please contact Ronin (roninliu@foxmail.com)