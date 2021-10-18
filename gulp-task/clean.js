const del = require("del");
const { paths } = require("./paths");

function clean(path) {
  return del(path);
}

// Функции для тасков

module.exports.cleanBuild = function () {
  return clean(paths.clean.build);
};
