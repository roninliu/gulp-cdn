var gulp = require('gulp');
var cdn = require('../');

gulp.task("debug", function() {
	return gulp.src("./src/*.html")
		.pipe(cdn({
			domain: "http://localhost.domain",
			cdn: "http://debug.domain"
		}))
		.pipe(gulp.dest("./debug/"))
})

gulp.task("release", ["debug"], function() {
	return gulp.src("./debug/*.html")
		.pipe(cdn({
			domain: "http://debug.domain",
			cdn: "http://release.domain"
		}))
		.pipe(gulp.dest("./dist/"))
})



gulp.task("default", function() {
	console.log("try gulp debug")
})