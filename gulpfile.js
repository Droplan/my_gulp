// Подключение пакетов
const gulp = require('gulp');
const browserSync = require ('browser-sync').create();
const less = require ('gulp-less');
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const autoprefixer = require ('gulp-autoprefixer');
const scss = require ('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');


// Функции для gulp

function server() {
	browserSync.init ({
		server: {
			baseDir: './src/'
		}
	});

	gulp.watch('src/**/*.html').on('change', browserSync.reload);
	gulp.watch('src/less/**/*.less', lesscss);
	// gulp.watch('src/scss/**/*.scss', sasscss);
	gulp.watch('src/js/**/*.js').on('change', browserSync.reload);

}

function lesscss() {
	return gulp.src('./src/less/main.less')
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					meassage: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write( ))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
}

function sasscss() {
	return gulp.src('./src/scss/main.scss')
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
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream())
}


// Команды для консоли

gulp.task('default', gulp.series(lesscss, server));

gulp.task('less', lesscss); 