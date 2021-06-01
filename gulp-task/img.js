const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


function img(input, output) {
	return gulp.src(input)
		.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
		})) //Сжимаем картинки

		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
}