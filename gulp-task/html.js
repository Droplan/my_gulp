const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const pugLinter = require("gulp-pug-linter");
const htmlValidator = require("gulp-w3c-html-validator");
const { paths } = require("./paths");

// Функции для тасков

module.exports.html = function () {
  return src(paths.src.html.html)
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(dest(paths.build.html));
};

module.exports.htmlPug = function () {
  return src(paths.src.html.pug)
    .pipe(plumber())
    .pipe(pugLinter({ reporter: "default" }))
    .pipe(pug())
    .pipe(htmlValidator())
    .pipe(dest(paths.build.html));
};
