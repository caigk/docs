
const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function test(cb) {
  console.log('test');
  cb();
}

function task1(cb) {
  console.log('task1');
  cb();
}

function test1(cb) {
  //压缩js
  src('kchis/**/*.js')
    .pipe(uglify())
    .pipe(dest('kchis/'));


  //压缩html
  src('kchis/**/*.html')
    .pipe(htmlmin({ "removeComments": true, "collapseWhitespace": true }))
    .pipe(dest('kchis/'));

  cb();
}

exports.build = test1;
exports.default = series(test);
