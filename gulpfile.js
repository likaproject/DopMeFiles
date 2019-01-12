const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        nunjucks = require('gulp-nunjucks-render'),
        watch = require('gulp-watch'),
	  	autoprefixer = require('gulp-autoprefixer'),
	  	minCss = require('gulp-clean-css'),
	  	rename = require('gulp-rename'),
	  	minJs = require('gulp-uglify'),
	  	clean = require('gulp-clean');


//--------------------------------
gulp.task('clean', () => {
	return gulp.src('dist', {read: false})
			.pipe(clean());
});
//---------------------------------
gulp.task('default', function() {
	gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('dist/*.css', ['min']);
    gulp.watch('dist/main.min.css', ['autoprefixer']);
});
//--------------------------------
const html = gulp.task('html', () =>
    gulp.src("./src/index.html")
        .pipe(nunjucks())
        .pipe(gulp.dest("./dist"))
);
//--------------------------------
gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
		.pipe(minCss({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
	
});
//------------------------------------
// useref!!!
//-------------------------------------
gulp.task('minJs', () => {
	return gulp.src('src/js/*.js')
			.pipe(minJs())
			.pipe(gulp.dest('dist/js'));
});
//-----------------------------------------
gulp.task('build', ['clean', 'html', 'sass', 'minJs']);
//------------------------------------
































