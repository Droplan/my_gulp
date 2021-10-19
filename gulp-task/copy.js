const { src, dest } = require("gulp");
const { paths } = require("./paths");

function copy(input, output) {
  return src(input).pipe(dest(output));
}

// Функции для тасков

module.exports.copyFonts = function () {
  return copy(paths.src.fonts, paths.build.fonts);
};
