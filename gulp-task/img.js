// const gulp = require("gulp");
// const browserSync = require("browser-sync").create();
// const { imagemin } = require("gulp-imagemin");

// const { paths } = require("./paths");

// function imgHandler(input, output) {
//   return gulp
//     .src(input)
//     .pipe(
//       imagemin([
//         imagemin.gifsicle({ interlaced: true }),
//         imagemin.mozjpeg({ quality: 75, progressive: true }),
//         imagemin.optipng({ optimizationLevel: 5 }),
//         imagemin.svgo({
//           plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
//         }),
//       ])
//     ) //Сжимаем картинки

//     .pipe(gulp.dest(output))
//     .pipe(browserSync.stream());
// }

// // Функции для тасков

// module.exports = function img() {
//   return imgHandler(paths.src.img, paths.build.img);
// };
