
const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");

const through2 = require('through2');
var Path = require('path');

function optize(cb) {
  //压缩js
  src('docs/kchis/**/*.js')
    .pipe(uglify())
    .pipe(dest('docs/kchis/'));


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

function t1(cb) {
  src('docs/pdf/*.pdf')
    .pipe(through2.obj(function (originalFile, _, cb) {
      var file = originalFile.clone({ contents: false });
      const fp = file.relative;

      //处理路径
      // console.log(Path.parse(fp));
      // console.log(Path.basename(fp, '.pdf'));
      console.log( originalFile.relative+' => '+ Path.join(Path.dirname(fp), Path.basename(fp, '.pdf') + '.html'));
      file.path = Path.join(file.base, Path.join(Path.dirname(fp), Path.basename(fp, '.pdf') + '.html'));

      //生成内容
      file.contents = Buffer.from('ddd1');

      //回调
      cb(null, file);
    }))
    .pipe(dest('pdfT/'));

  cb();
}

exports.t1 = t1;
