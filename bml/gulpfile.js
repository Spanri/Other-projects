var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');
var imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('haml', function () {
    return gulp.src(['*.haml'])
        .pipe(haml())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass', function(){
    return gulp.src('*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'haml', 'sass'], function () {
    gulp.watch('*.haml',['haml']);
    gulp.watch('*.sass',['sass']);
})