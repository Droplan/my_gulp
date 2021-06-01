export default {
	build: {
		html: './build',
		js: './build/js',
		css: './build/css',
		img: './build/img',
		fonts: './build/fonts',
		libs: './build/libs'
	},
	src: {
		templates: './src',
		html: {
			html: './src/html/pages/**/*.html',
			pug: './src/html/pages/**/*.pug',
		},
		js: './src/js/*.*',
		style: {
			less: './src/style/*.less',
      scss: './src/style/*.scss',
		},
		img: './src/img/**/*.*',
		fonts: './src/fonts/**/*.*',
		libs: './src/libs/**/*.*',
	},
	watch: {
    html: {
			html: './src/html/**/*.html',
			pug: './src/html/**/*.pug',
		},
    style: {
			less: './src/style/**/*.less',
			scss: './src/style/**/*.scss',
			sass: './src/style/**/*.sass',
		},
		js: './src/js/**/*.js',
		img: './src/img/**/*.*',
		fonts: './src/fonts/**/*.*',
		libs: './src/libs/**/*.*'
	},
	clean: './build'
};