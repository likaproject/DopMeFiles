const gulp = require('gulp'),
    sass = require('gulp-sass'),
    nunjucks = require('gulp-nunjucks-render'),
    watch = require('gulp-watch');
	
gulp.task('default', ['sass', 'html']);
//--------------------------------
const html = gulp.task('html', () =>
    gulp.src("./src/index.html")
        .pipe(nunjucks())
        .pipe(gulp.dest("./dist"))
);
//--------------------------------
gulp.task('sass', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});
//--------------------------------
gulp.task('watch:css', function() {
    gulp.watch('src/scss/*.scss', ['sass']);
});
