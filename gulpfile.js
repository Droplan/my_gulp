// Подключение пакетов
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const scss = require('gulp-sass');
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

function cleanbuild() {
	return del('./build');
}

function html() {
	return gulp.src('./src/html/pages/**/*.html')
		.pipe(rigger()) // Вставляет в файл содержимое других файлов
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}

function htmlpug() {
	return gulp.src('./src/html/pages/**/*.pug')
		.pipe(plumber({
			errorHandler:notify.onError(function(err){
				return {
					title: 'Pug',
					message: err.message
				}
			})
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}

function scripts() {
	return gulp.src('./src/js/*.*')
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
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

function copy_libs() {
	return gulp.src('./src/libs/**/*.*')
		.pipe(gulp.dest('./build/libs'))
		.pipe(browserSync.stream());
}

function img() {
	return gulp.src('./src/img/**/*.*')
		.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
		})) //Сжимаем картинки

		.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
}

function copy_fonts() {
	return gulp.src('./src/fonts/**/*.*')
		.pipe(gulp.dest('./build/fonts'))
		.pipe(browserSync.stream());
}


// Команды для консоли

gulp.task('default', gulp.series(cleanbuild, stylesless, stylessass, htmlpug, html, scripts, copy_libs, copy_fonts, img, server));
gulp.task('del', gulp.series(cleanbuild));