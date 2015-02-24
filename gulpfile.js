// Include gulp
var gulp = require('gulp');

// Include plugins
// Sass / CSS
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// Rename files
var rename = require('gulp-rename');

// notify when task is complete
var notify = require('gulp-notify');



// Tasks
// Compile sass
gulp.task('css', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())

      // auto prefix css
      .pipe(prefix('last 2 versions'))

    .pipe(sourcemaps.write())

    // move expanded css file to folder
    .pipe(gulp.dest('css/'))

    // rename css file with .min
    .pipe(rename({
      suffix: '.min'
    }))

    // minify the css file
    .pipe(minifycss())

    // move minified css file to folder
    .pipe(gulp.dest('css/'))

    // notify to say the task has complete
    .pipe(notify({
      message: 'CSS task complete'
    }))
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['css']);
});

// Default Task
gulp.task('default', ['css', 'watch']);