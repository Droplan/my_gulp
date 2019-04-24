// Подключение пакетов
const gulp = require('gulp');



// Функции для Gulp
function task_before() {
    return console.log('This will be the very first task');
};


function hello() {
    return console.log('Hello from Gulp!');
};

// Команды для консоли

gulp.task('hello', gulp.series(task_before, hello));