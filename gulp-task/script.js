const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");

const { paths } = require("./paths");

function scriptHandler(input, output) {
  return src(input)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    ) // Переводит код в старую версию
    .pipe(terser()) // Оптимизирует и минифицирует JS
    .pipe(sourcemaps.write())
    .pipe(dest(output));
}

// Функции для тасков

module.exports.js = function () {
  return scriptHandler(paths.src.js, paths.build.js);
};
