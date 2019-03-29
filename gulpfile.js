const gulp = require('gulp');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');
const cleanCSS = require('gulp-clean-css');



//Gulp Run Message
gulp.task('hello', function() {
  return new Promise(function(resolve, reject) {
    console.log("Gulp is working in this Project");
    resolve();
  });
})

//Watch Files from local Server and refresh on filechange
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "http://127.0.0.1:8000"
  });

  gulp.watch(['src/css/**.*', 'src/*.html']).on('change', browserSync.reload);
})

//Clean UP CSS
//Purge Unused
//Autoprefixer
gulp.task('cleancss', function() {
  return new Promise(function(resolve, reject) {
    console.log("Running Task 'cleancss' purge and prefix CSS");
    //Default *.css location
    gulp.src('src/css/**.*')
    //Purge Unused CSS Content
    .pipe(purgecss({
      content: ['src/*html']
    }))
    //Replace cleaned file
    .pipe(gulp.dest('src/css'))
    //Reslolve
    resolve();
  });
});

//Minifiy(Integrateinto buiild)
gulp.task('minify-css', function() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
})

//Create Distribution
gulp.task('dist', function() {
  return new Promise(function(resolve, reject) {
    gulp.src(['src/*.html',
              'src/css/*.css',
              'src/media/**/**.*',
              'src/js/*.js'
            ],
            //Base for Copy, added to gulp.src
            {
              base: 'src'
            })
            .pipe(gulp.dest('public'));
            //Resolve
            resolve();
  })
})
