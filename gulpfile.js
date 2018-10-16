const gulp = require('gulp'),
    sass = require('gulp-sass'),
    nunjucks = require('gulp-nunjucks-render'),
    watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer');
	
gulp.task('default', ['sass', 'html', 'pref']);
//--------------------------------
const html = gulp.task('html', () =>
    gulp.src("./src/index.html")
        .pipe(nunjucks())
        .pipe(gulp.dest("./dist"))
);
//--------------------------------
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});
//--------------------------------
gulp.task('watch:css', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
});
//--------------------------------
gulp.task('pref',  function() {
    gulp.src('dist/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});
//--------------------------------