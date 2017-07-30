var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
          baseDir: "./",
          directory: true
        },
    });

    gulp.watch("sass/**/*.sass", ['sass']);
    gulp.watch("./js/main.js", ['concatjs']);
    gulp.watch("./**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/**/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['Last 2 versions'],
            browsers:['> 2%'],
            browsers:[
                      "Android 2.3",
                      "Android >= 4",
                      "Chrome >= 20",
                      "Firefox >= 24",
                      "Explorer >= 8",
                      "iOS >= 6",
                      "Opera >= 12",
                      "Safari >= 6"
                    ],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});


//Comprimir CSS
gulp.task('comprimir', function() {
  return gulp.src("sass/**/*.sass")
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['Last 2 versions'],
          browsers:['> 2%'],
          browsers:[
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                  ],
          cascade: false
      }))
      .pipe(gulp.dest("./css"))
});


//Concatenar Javascript
gulp.task('concatjs', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.js', './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', './js/main.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js/'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});


gulp.task('default', ['serve']);
