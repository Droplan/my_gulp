const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const { paths } = require("./paths");

function imgHandler(input, output) {
  return src(input)
    .pipe(plumber())
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    ) //Сжимаем картинки
    .pipe(dest(output));
}

// Функции для тасков

module.exports.img = function () {
  return imgHandler(paths.src.img, paths.build.img);
};
