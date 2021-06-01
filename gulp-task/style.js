// Подключение пакетов
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');


function style(input, output, preprocessor) {
	return gulp.src(input) // Берёт файлы из указанной директории
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					meassage: err.message
				}
			})
		}))
		.pipe(sourcemaps.init()) // Создаёт карту источников CSS
		.pipe(preprocessor()) // Выполняет преобразование less или scss/saas в CSS
		.pipe(autoprefixer({
			browsers: ['>0.1%'],
			cascade: false
		})) // Расставляет автопрефиксы для браузеров которые используются больше 0,01% людей
		.pipe(cleanCSS({
		level: 2
		})) // Оптимизирует и минифицирует CSS
		.pipe(sourcemaps.write( )) // Добавляет карту источников CSS
		.pipe(gulp.dest(output)) // Сохраняет файл в указанную директорию
		.pipe(browserSync.stream()); // Обновляет открытую страницу
}