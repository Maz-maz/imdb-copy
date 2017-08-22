/**/var gulp = require("gulp");
/**/var sass = require("gulp-sass");
/**/var scss_files = "website/production/scss_files/**/*.+(scss|sass)";
var html_files = "website/production/**/*.html";
var js_files = "website/production/javascript_files/**/*.js";
var css_files = "website/production/css_files/**/*.css";
var browserSync = require("browser-sync");

var seq = require("run-sequence");

var useref = require("gulp-useref");
var gulpIf = require("gulp-if");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var del = require("del");

/**********PRODUCTION TASKS**********/
/*b*/gulp.task("sass", function() {
  return gulp.src(scss_files)
    .pipe(sass())
    .pipe(gulp.dest("website/production/css_files"))
    .pipe(browserSync.stream())
/*e*/});

// In particular for automatically renew css thru scss
/*b*/gulp.task("watch", function() {
  gulp.watch(scss_files, ["sass"]);
  gulp.watch(html_files, browserSync.reload);
  gulp.watch(js_files, browserSync.reload);
  //gulp.watch(css_files, browserSync.reload);
/*e*/});

// Start a server
gulp.task("start-server", function() {
  browserSync.init({
    server: {
      baseDir: "website/production"
    },
    browser: "firefox"
  });
});

// Start a server and watch for the changes in assets to reload server (also renews css)
gulp.task("serv-watch", function(callback) {
  seq("sass", "start-server", "watch", callback);
});

/**********DISTRIBUTION TASKS**********/
// Concatenation of css and js files
gulp.task("useref", function() {
  return gulp.src("website/production/index.html")
    .pipe(useref())
    .pipe(gulp.dest("website/distribution"))
});

// Optimization of css, js
gulp.task("opt-assets", function() {
  return gulp.src("website/production/**/*.+(js|css)")
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("website/distribution"))
});

// Optimization of images
//!!! (later can be done better and not by using two tasks)
gulp.task("opt-images-1", function() {
  return gulp.src("website/production/pics/**/*.+(png|jpg|gif|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("website/distribution/pics"))
});

gulp.task("opt-images-2", function() {
  return gulp.src("website/production/articles/**/*.+(png|jpg|gif|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("website/distribution/articles"))
});

// Cleaning cache
gulp.task("cache-clean", function(done) {
  return cache.clearAll(done);
});

// Move what left to dist folder (mus be changed if added file mainly to the production folder, but not to sub folders)
// !!! (later can be done better and not by using two tasks)
gulp.task("move-else-1", function() {
  return gulp.src(["website/production/favicon.ico",
   "website/production/index.html"])
    .pipe(gulp.dest("website/distribution"));
});

gulp.task("move-else-2", function() {
  return gulp.src("website/production/articles/**/*")
    .pipe(gulp.dest("website/distribution/articles"));
});

// Delete distribution folder
gulp.task("dist-clean", function() {
  return del.sync("website/distribution");
});

// One task for building project to distribution
gulp.task("build", function(callback) {
  seq("dist-clean", "sass", "opt-assets", 
  "move-else-1", "move-else-2", /*! This must be before opt-images-2*/
  "opt-images-1", "opt-images-2", callback);
});

// One task for cleaning after job
gulp.task("clean", function(callback) {
  seq("dist-clean", "cache-clean", callback);
});
