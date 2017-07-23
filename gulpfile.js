var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: "./",
          directory: true
        },
    });

    gulp.watch("sass/**/*.sass", ['sass']);
    gulp.watch("./**/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/**/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['Last 2 versions'],
            browsers:['> 2%'],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('comprimir', function() {
  return gulp.src("sass/**/*.sass")
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['Last 2 versions'],
          browsers:['> 2%'],
          cascade: false
      }))
      .pipe(gulp.dest("./css"))
});

gulp.task('default', ['serve']);
