const { src, dest } = require("gulp");
const { paths } = require("./paths");

function copy(input, output) {
  return src(input).pipe(dest(output));
}

// Функции для тасков

const fonts = ["./src/fonts/**/*.*"];

module.exports.copyFonts = function () {
  return copy(fonts, paths.build.fonts);
};

const libs = [
  "./node_modules/normalize.css/normalize.css",
  // "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  // "./node_modules/bootstrap/dist/js/bootstrap.min.js",
];

module.exports.copyLibs = function () {
  return copy(libs, paths.build.libs);
};
