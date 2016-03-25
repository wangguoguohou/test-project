var gulp = require('gulp'),
    uglify = require('gulp-uglify');
gulp.task('jsmin',function(){
    console.log("Hello");
    gulp.src('js/demo1.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest'));
});
gulp.task('default',['jsmin']);
