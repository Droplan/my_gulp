const gulp = require('gulp');
const del = require('del');


function clean(path) {
	return del(path[path]);
}