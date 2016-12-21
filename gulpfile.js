/*Variables required*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

/*Compile scss*/
gulp.task('sass', function() {
  return gulp.src('scss/eria.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});
/*SASS Watcher*/
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

/**************/
/*DEFAULT TASK*/
gulp.task('default', ['sass', 'watch']);
