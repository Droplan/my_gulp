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

  watch(paths.watch.html.pug, htmlPug);
  watch(paths.watch.html.html, html);
  watch(paths.watch.style.less, styleLess);
  watch(paths.watch.style.sass, styleSass);
  watch(paths.watch.style.scss, styleSass);
  watch(paths.watch.js, js);
  watch(paths.watch.fonts, copyFonts);
  // watch(paths.watch.img, img);
};
