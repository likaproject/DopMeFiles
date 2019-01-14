const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        nunjucks = require('gulp-nunjucks-render'),
        watch = require('gulp-watch'),
	  	autoprefixer = require('gulp-autoprefixer'),
	  	minCss = require('gulp-clean-css'),
	  	rename = require('gulp-rename'),
	  	minJs = require('gulp-uglify'),
	  	clean = require('gulp-clean'),
	  	gulpif = require('gulp-if');


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
    gulp.watch('dist/css/main.min.css', ['autoprefixer']);
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
		.pipe(gulpif('*.css', minCss({compatibility: 'ie8'})))
		.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
	
});

//--------------------------------------
gulp.task('minJs', () => {
	return gulp.src('./src/js/*.js')
			.pipe(gulpif('*.js', (minJs())))
			.pipe(gulp.dest('./dist/js'));
});
//-----------------------------------------
gulp.task('fonts', function() {
    return gulp.src([
                    './src/fonts/**/*'])
            .pipe(gulp.dest('./dist/fonts'));
});
//-----------------------------------------
gulp.task('images', function() {
    return gulp.src([
                    './src/images/**/*'])
            .pipe(gulp.dest('./dist/images'));
});
//----------------------------------------
gulp.task('downloads', function() {
    return gulp.src([
                    './src/downloads/*'])
            .pipe(gulp.dest('./dist/downloads'));
});
//-----------------------------------------
gulp.task('build', [ 
	'html', 
	'sass', 
	'minJs', 
	'fonts', 
	'images', 
	'downloads'
]);
//------------------------------------
































