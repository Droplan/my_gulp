const gulp = require('gulp');


function copy(input, output) {
	return gulp.src(input)
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
}