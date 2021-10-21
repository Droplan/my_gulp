module.exports.paths = {
  build: {
    html: "./build",
    js: "./build/js",
    css: "./build/css",
    img: "./build/img",
    fonts: "./build/fonts",
    libs: "./build/libs",
  },
  src: {
    html: {
      html: "./src/html/pages/**/*.html",
      pug: "./src/html/pages/**/*.pug",
    },
    js: "./src/js/*.*",
    style: {
      less: "./src/styles/*.less",
      scss: "./src/styles/*.scss",
    },
    img: "./src/img/**/*.*",
    fonts: "./src/fonts/**/*.*",
  },
  watch: {
    build: "./build",
    html: {
      html: "./src/html/**/*.html",
      pug: "./src/html/**/*.pug",
    },
    style: {
      less: "./src/styles/**/*.less",
      scss: "./src/styles/**/*.scss",
      sass: "./src/styles/**/*.sass",
    },
    js: "./src/js/**/*.js",
    img: "./src/img/**/*.*",
    fonts: "./src/fonts/**/*.*",
  },
  clean: {
    build: "./build",
  },
};
