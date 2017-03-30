'use strict';

const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const gulp = require('gulp');
const inject = require('gulp-inject');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');

// everything you need for development
gulp.task('default', (callback) => {
    runSequence(
        'clean.dist',
        'build.sass',
        'fonts',
        'inject',
        callback
    );
});

// ready for publish
gulp.task('release', (callback) => {
    runSequence(
        'clean.dist',
        'build.sass:release',
        'fonts',
        'inject',
        callback
    );
});

// Watch
// --------------------

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', ['build.sass']);
});

// Clean
// --------------------

gulp.task('clean.dist', (callback) => {
    return del('dist', callback);
});

// HTML
// --------------------

gulp.task('inject', () => {
    const sources = gulp.src([
        'dist/**/*.css',
        'js/**/*.js',

        '!js/analytics.js'
    ]);

    return gulp.src('*.html')
        .pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest(''));
});

// Fonts
// --------------------

gulp.task('fonts', function () {
    return gulp.src([
        '../node_modules/font-awesome/fonts/fontawesome-webfont.*'
    ])
        .pipe(gulp.dest('fonts'));
});

// Sass
// --------------------

gulp.task('build.sass', () => {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('build.sass:release', () => {
    return gulp.src('sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});
