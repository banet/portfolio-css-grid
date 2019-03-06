
/*

var gulp = require('gulp');

var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('Hooreay you create gulp pack');
});
gulp.task('html', function() {
    console.log('Imagine something useful');
})

gulp.task('styles', function() {
    console.log('Imagine Sass or PostCSS task running here');
})

// Gulp watch - plugin

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    })
})
*/



// Task run watch destination
/*
var gulp = require('gulp'),

    sass = require('gulp-sass'),

    postcss = require('gulp-postcss'),

    autoprefixer = require('autoprefixer'),

    cssvars = require('postcss-simple-vars'),

    nested = require('postcss-nested'),

    browserSync = require('browser-sync').create();

// DO NOT add gulp-watch. It will result in an error.

*/

let gulp = require('gulp'),
     sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer');

      //compile scss into css

      function style() {
          //1. where is my scss file -task
          return gulp.src('./scss/**/*.scss')
          //2. pass that file throiougt sass compiler --pass sass
          .pipe(postcss([autoprefixer]))
          .pipe(sass().on('error', sass.logError))
          // 3. where do I save the compiled CSS -- destination
          .pipe(gulp.dest('./css'))
          // 4. stream changes to all browser
          .pipe(browserSync.stream());
      }

      function watch() {
          browserSync.init({
              server: {
                  baseDir: './'
              }
          })
          gulp.watch('./scss/**/*.scss', style);
          gulp.watch('./*.html').on('change', browserSync.reload);
          gulp.watch('./js/**/*.js').on('change', browserSync.reload);
      }


      exports.style = style;
      exports.watch = watch;