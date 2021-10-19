// Подключение пакетов
const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const sass = require("gulp-sass")(require("sass"));
const { paths } = require("./paths");

function styleHandler(input, output, preprocessor) {
  return src(input) // Берёт файлы из указанной директории
    .pipe(plumber())
    .pipe(sourcemaps.init()) // Создаёт карту источников CSS
    .pipe(preprocessor) // Выполняет преобразование less или scss/saas в CSS
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 8 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    ) // Расставляет автопрефиксы для браузеров
    .pipe(
      cleanCSS({
        level: 2,
      })
    ) // Оптимизирует и минифицирует CSS
    .pipe(sourcemaps.write()) // Добавляет карту источников CSS
    .pipe(dest(output)); // Сохраняет файл в указанную директорию
}

// Функции для тасков

module.exports.styleLess = function () {
  return styleHandler(paths.src.style.less, paths.build.css, less());
};

module.exports.styleSass = function () {
  return styleHandler(
    paths.src.style.scss,
    paths.build.css,
    sass({ outputStyle: "compressed" }).on("error", sass.logError)
  );
};
