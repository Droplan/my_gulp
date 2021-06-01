const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const rigger = require('gulp-rigger');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


function html(input, output) {
	return gulp.src(input)
    .pipe(plumber({
			errorHandler:notify.onError(function(err){
				return {
					title: 'HTML',
					message: err.message
				}
			})
		}))
		.pipe(rigger()) // Вставляет в файл содержимое других файлов
    .pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
}
