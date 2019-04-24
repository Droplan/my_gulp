// Подключение пакетов
const gulp = require('gulp');
const browserSync = require ('browser-sync').create();


// Функции для gulp

function server() {
	browserSync.init ({
		server: {
			baseDir: './src/'
		}
	});

	gulp.watch('src/**/*.html').on('change', browserSync.reload);
	gulp.watch('src/css/**/*.css').on('change', browserSync.reload);
	gulp.watch('src/js/**/*.js').on('change', browserSync.reload);

}




// Команды для консоли

gulp.task('default', server);