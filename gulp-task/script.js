const { src, dest } = require("gulp");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");

const { paths } = require("./paths");

function scriptHandler(input, output) {
  return src(input)
    .pipe(plumber())
    .pipe(
      uglify({
        toplevel: true,
      })
    ) // Оптимизирует и минифицирует JS
    .pipe(dest(output));
}

// Функции для тасков

module.exports.js = function () {
  return scriptHandler(paths.src.js, paths.build.js);
};
