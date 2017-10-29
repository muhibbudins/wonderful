'use strict';

/* Import Gulp and All Dependency */
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    notify       = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
  return gulp.src('./scss/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 4 version'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(notify({
      title: 'Gulp Notification',
      message: "Generating all SCSS file Finished at <%= options.date %>",
      templateOptions: {
        date: new Date()
      },
      onLast: true
    }));
});

gulp.task('watch', function() {
	gulp.watch(['./scss/*.scss', './scss/**/*.scss', './scss/**/**/*.scss'], ['default']);
});
