const gulp = require('gulp');
const del = require('del');

import path from '../paths.js';

function clean(path) {
	return del(path[path]);
}