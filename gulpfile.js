
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const scssToLess = require('./utils/scss-to-less');
const zip = require('gulp-zip');
const uglify = require('gulp-uglifycss');
const runSequence = require('run-sequence');

gulp.task('toCSS', function () {
  return gulp.src('./lib/scss/*.scss')
    .pipe(autoprefixer('last 2 version'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'toCSS task complete' }));
});

gulp.task('toLESS', function () {
  return gulp.src('./lib/scss/*.scss')
    .pipe(autoprefixer('last 2 version'))
    .pipe(scssToLess())
    .pipe(gulp.dest('dist/less'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/less'))
    .pipe(notify({ message: 'toLESS task complete' }));
});

gulp.task('copy', function () {
  return gulp.src('lib/**')
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Copy task complete' }));
});

gulp.task('cleanSCSS', function () {
  return gulp.src('./dist/scss/*.scss')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/scss'))
    .pipe(notify({ message: 'Uglify scss file task complete' }));
});

gulp.task('zip', () => {
  return gulp.src('dist/*')
    .pipe(zip('multicon.zip'))
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Zip task complete' }));
});

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('default', () => {
  runSequence(
    'clean',
    ['toCSS', 'toLESS', 'copy'],
    'cleanSCSS',
    'zip'
  );
});