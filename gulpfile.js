/*jslint node: true */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = 'src/js/**/*.js',
    jsDest = 'dist/js/',
    scssFiles = 'src/scss/main.scss',
    cssDest = 'dist/css/';

gulp.task('default', function () {
    return console.log('\n\nUse "gulp scripts" or "gulp css" to minify scripts or css\n\n');
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('scripts:watch', function () {
    gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('css', function () {
    return gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('main.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('css:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['css']);
});
