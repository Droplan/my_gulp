const { src, dest } = require("gulp");
const { paths } = require("./paths");

const libs = [];

function copy(input, output) {
  return src(input).pipe(dest(output));
}

// Функции для тасков

module.exports.copyLibs = function () {
  return copy(paths.src.fonts, paths.build.libs);
};
