const { src, dest } = require("gulp");
const browserSync = require("browser-sync").create();
const { paths } = require("./paths");

function copy(input, output) {
  return src(input).pipe(dest(output)).pipe(browserSync.stream());
}

// Функции для тасков

module.exports.copyFonts = function () {
  return copy(paths.src.fonts, paths.build.fonts);
};
