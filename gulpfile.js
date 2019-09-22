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

// Функции для gulp

function server() {
	browserSync.init ({
		server: {
			baseDir: './build/'
		}
	});

	gulp.watch('./src/pug/**/*.*', htmlpug);
	gulp.watch('./src/less/**/*.less', stylesless);
	gulp.watch('./src/scss/**/*.scss', stylessass);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./src/libs/**/*.*', copy_libs);
	gulp.watch('./src/img/**/*.*', copy_img);
}

function cleanbuild() {
	return del('./build');
}

function stylesless() {
	return gulp.src('./src/style/*.less')
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					meassage: err.message
				}
			})
		}))
		.pipe(sourcemaps.init()) // Создаёт карту источников CSS
		.pipe(less()) // Выполняет преобразование less в CSS
		.pipe(autoprefixer({
			browsers: ['>0.1%'],
			cascade: false
		})) // Расставляет автопрефиксы для браузеров которые используются больше 0,01% людей
		.pipe(cleanCSS({
		level: 2
		})) // Оптимизирует и минифицирует CSS
		.pipe(sourcemaps.write( )) // Добавляет карту источников CSS
		.pipe(gulp.dest('./build/css')) // Сохраняет файл в указанную директорию
		.pipe(browserSync.stream());
}

function stylessass() {
	return gulp.src('./src/style/*.scss')
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					meassage: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(scss())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write( ))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream())
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
	return gulp.src('./src/js/**/*.*')
		.pipe(uglify({
			toplevel: true
		})) // Оптимизирует и минифицирует CSS
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}

function copy_libs() {
	return gulp.src('./src/libs/**/*.*')
		.pipe(gulp.dest('./build/libs'))
		.pipe(browserSync.stream());
}

function copy_img() {
	return gulp.src('./src/img/**/*.*')
		.pipe(gulp.dest('./build/img'))
		.pipe(browserSync.stream());
}

// Команды для консоли

gulp.task('default', gulp.series(cleanbuild, stylesless, stylessass, htmlpug, scripts, copy_libs, copy_img, server));
