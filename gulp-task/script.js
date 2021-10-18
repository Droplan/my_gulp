const { src, dest } = require("gulp");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify");

const { paths } = require("./paths");

function scriptHandler(input, output) {
  return src(input)
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: "Styles",
            meassage: err.message,
          };
        }),
      })
    )
    .pipe(
      uglify({
        toplevel: true,
      })
    ) // Оптимизирует и минифицирует JS
    .pipe(dest(output))
    .pipe(browserSync.stream());
}

// Функции для тасков

module.exports.js = function () {
  return scriptHandler(paths.src.js, paths.build.js);
};
