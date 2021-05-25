
const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");

function optize(cb) {
  //压缩js
  src('docs/kchis/**/*.js')
    .pipe(uglify())
    .pipe(dest('kchis/'));


  //压缩html
  src('docs/kchis/**/*.html')
    .pipe(htmlmin({ "removeComments": true, "collapseWhitespace": true }))
    .pipe(dest('docs/kchis/'));

  //压缩png,作用不大
  // src('kchis/**/*.png')
  //   .pipe(imagemin())
  //   .pipe(rename({extname: ".1.png"}))
  //   .pipe(dest('kchis/'));

  cb();
}

exports.build = optize;
//exports.default = series(test1,111);
