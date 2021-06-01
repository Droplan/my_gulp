// Подключение пакетов
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less'); //оставить, нет в стилях
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const scss = require('gulp-sass'); //оставить, нет в стилях
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const del = require('del');

const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


// Функции для gulp

function server() {
	browserSync.init ({
		server: {
			baseDir: './build/'
		}
	});

	gulp.watch('./src/html/**/*.pug', htmlpug);
	gulp.watch('./src/html/**/*.html', html);
	gulp.watch('./src/style/**/*.less', stylesless);
	gulp.watch('./src/style/**/*.scss', stylessass);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/libs/**/*.*', copy_libs);
	gulp.watch('./src/fonts/**/*.*', copy_fonts);
	gulp.watch('./src/img/**/*.*', img);
}



// Команды для консоли

gulp.task('default', gulp.series(cleanbuild, stylesless, stylessass, htmlpug, html, scripts, copy_libs, copy_fonts, img, server));
gulp.task('del', gulp.series(cleanbuild));