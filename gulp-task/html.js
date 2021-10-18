const { src, dest } = require("gulp");

const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const { paths } = require("./paths");

function htmlHandler(input, output) {
  return src(input)
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: "HTML",
            message: err.message,
          };
        }),
      })
    )
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest(output))
    .pipe(browserSync.stream());
}

// Функции для тасков

module.exports.html = function () {
  return htmlHandler(paths.src.html.html, paths.build.html);
};

module.exports.htmlPug = function () {
  return htmlHandler(paths.src.html.pug, paths.build.html);
};
