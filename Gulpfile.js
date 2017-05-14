var gulp = require('gulp'),
	sass = require('gulp-sass'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	del = require('del'),
	runSequence = require('run-sequence'),
	browserSync = require('browser-sync').create();

/*
//EXAMPLE
gulp.task('task-example', function() {
	
	return gulp.src('source-files')	 // Get source files with gulp.src
		.pipe(pluginName()) // Sends it through a gulp plugin
		.pipe(gulp.dest('destination')) // Outputs the file in the destination folder
});

// Gulp watch syntax
gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 


*/
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback)
});
gulp.task('sass', function() {
	
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass()) 
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
      		stream: true
	    }))
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: ['app', './']
		}		
	})
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});


gulp.task('useref', function(){
  return gulp.src('app/**/*.html')
	 // Minifies only if it's a JS file
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

gulp.task('watch',['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']); 	
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});