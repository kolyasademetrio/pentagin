const { src, dest, watch, task, series } = require('gulp');
const sass = require('gulp-sass'); //Подключаем Sass пакет,
const sourcemaps = require('gulp-sourcemaps'); //Что б в режиме разработчика показывало норм стили
const plumber = require('gulp-plumber'); // Чтоб при ошибке не падал сервер
const autoprefixer = require('gulp-autoprefixer'); // Подключаем библиотеку для автоматического добавления префиксов
const browserSync = require('browser-sync').create(); // Подключаем Browser Sync
const fileInclude = require('gulp-file-include');
const htmlbeautify = require('gulp-html-beautify');
const del = require('del');  // Подключаем библиотеку для удаления файлов и папок

//const concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
//const uglify       = require('gulp-uglifyjs'),*/ // Подключаем gulp-uglifyjs (для сжатия JS)
//const cssnano      = require('gulp-cssnano'),*/ // Подключаем пакет для минификации CSS
//const rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
//const imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
//const pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
//const cache        = require('gulp-cache'), // Подключаем библиотеку кеширования


function css() {
   return src('dist/scss/**/*.scss') // Берем источник
      .pipe(sourcemaps.init()) //Что б в режиме разработчика показывало норм стили
      .pipe(plumber()) // Чтоб при ошибке не падал сервер
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Преобразуем Sass в CSS посредством
      .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 9', 'ie 10'], { cascade: true })) // Создаем префиксы
      .pipe(sourcemaps.write('.'))
      .pipe(dest('app/css'));
}

function html() {
   return src('dist/**.html')
      .pipe(fileInclude({
         prefix: '@@',
         basepath: '@file',
      }))
      .pipe(htmlbeautify({
         "indent_with_tabs": true,//отступу табами
         "max_preserve_newlines": 0,//максимальное число новых строк
      }))
      .pipe(dest('app'));
}

function js() {
   return src(['dist/**/*.js'])
      .pipe(dest('app'));
}

function clear() {
   return del('app');
}

function serve() {
   browserSync.init({
      server: {
         baseDir: 'app', // Директория для сервера - app
      },
      browser: 'chrome',
      notify: false,
   });

   watch('dist/**/*.html', series(html)).on('change', browserSync.reload);
   watch('dist/scss/**/*.scss', series(css)).on('change', browserSync.reload);
   watch('dist/js/**/*.js', series(js)).on('change', browserSync.reload);
}


exports.build = series(clear, css, html, js);
exports.default = series(clear, css, html, js, serve);