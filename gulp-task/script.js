const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');


function script(input, output) {
	return gulp.src(input)
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					meassage: err.message
				}
			})
		}))
		.pipe(uglify({
			toplevel: true
		})) // Оптимизирует и минифицирует JS
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
}