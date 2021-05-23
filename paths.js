export default {
	build: {
		html: './build',
		htmlpug: './build',
		js: './build/js',
		css: './build/css',
		img: './build/img',
		fonts: './build/fonts',
		libs: './build/libs'
	},
	src: {
		templates: './src',
		htmlpug: './src/html/pages/**/*.pug',
		html: './src/html/pages/**/*.html',
		js: './src/js/*.*',
		styleless: './src/style/*.less',
    stylescss: './src/style/*.scss',
		img: './src/img/**/*.*',
		fonts: './src/fonts/**/*.*',
		libs: './src/libs/**/*.*',
	},
	watch: {
		htmlpug: './src/html/**/*.pug',
    html: './src/html/**/*.html',
    style: {
			less: './src/style/**/*.less',
			scss: './src/style/**/*.scss',
			sass: './src/style/**/*.sass',
		}
		js: './src/js/**/*.js',
		img: './src/img/**/*.*',
		fonts: './src/fonts/**/*.*',
		libs: './src/libs/**/*.*'
	},
	clean: './build'
};