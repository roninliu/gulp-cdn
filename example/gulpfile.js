var gulp = require('gulp');
var cdn = require('../');

gulp.task("debug", function() {
	return gulp.src("./src/index.html")
		.pipe(cdn([{
			domain: "http://localhost.domain",
			cdn: "http://debug.domain"
		},{
			domain: "http://localhost.domain2",
			cdn: "http://debug.domain2"
		},{
			domain: "http://localhost.domain3",
			cdn: "http://debug.domain3"
		}]))
		.pipe(gulp.dest("./debug/"))
})

gulp.task("demo", function() {
	return gulp.src("./src/index2.html")
		.pipe(cdn({
			domain: "http://localhost.domain",
			cdn: "http://debug.domain"
		}))
		.pipe(gulp.dest("./debug/"))
})


gulp.task("default", function() {
	console.log("try gulp debug")
})