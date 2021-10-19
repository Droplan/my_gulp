const { watch } = require("gulp");
const browserSync = require("browser-sync").create();

// Импорт функций
const { html, htmlPug } = require("./html.js");
const { styleLess, styleSass } = require("./style.js");
const { js } = require("./script.js");
// const { img } = require("./img.js");
const { copyFonts } = require("./copy.js");
const { paths } = require("./paths");

module.exports.server = function () {
  browserSync.init({
    server: {
      baseDir: paths.watch.build,
    },
  });

  watch(paths.watch.html.pug, htmlPug).on("change", browserSync.reload);
  watch(paths.watch.html.html, html).on("change", browserSync.reload);
  watch(paths.watch.style.less, styleLess).on("change", browserSync.reload);
  watch(paths.watch.style.sass, styleSass).on("change", browserSync.reload);
  watch(paths.watch.style.scss, styleSass).on("change", browserSync.reload);
  watch(paths.watch.js, js).on("change", browserSync.reload);
  watch(paths.watch.fonts, copyFonts).on("change", browserSync.reload);
  // watch(paths.watch.img, img);
};
