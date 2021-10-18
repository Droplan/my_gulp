// Подключение пакетов
const { parallel, series } = require("gulp");

const { html, htmlPug } = require("./gulp-task/html.js");
const { styleLess, styleSass } = require("./gulp-task/style.js");
const { js } = require("./gulp-task/script.js");
const { copyFonts } = require("./gulp-task/copy.js");
const { cleanBuild } = require("./gulp-task/clean.js");
const { server } = require("./gulp-task/watch.js");

// Команды для консоли

module.exports.default = series(
  cleanBuild,
  parallel(htmlPug, html, styleLess, styleSass, js, copyFonts),
  server
);

module.exports.del = cleanBuild;
