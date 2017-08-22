/*!!!Later "new_edition" must be replaced to "production" whis proper renaming of the needed folder*/
var gulp = require("gulp");
var sass = require("gulp-sass");
var scss_files_in = [];
var css_files_out = [];


/**********PRODUCTION TASKS**********/
scss_files_in[0] = "website/new_edition/modules/shelves/scss/**/*.+(scss|sass)";
css_files_out[0] = "website/new_edition/modules/shelves/css";

scss_files_in[1] = "website/new_edition/modules/nav_menu/scss/**/*.+(scss|sass)";
css_files_out[1] = "website/new_edition/modules/nav_menu/css";


// Convert scss to css
var sass_funct = function(scss_in, css_out) {
  return gulp.src(scss_in)
  .pipe(sass())
  .pipe(gulp.dest(css_out));
  //.pipe(browserSync.stream());
};

gulp.task("sass", function() {
for (i = 0; i < scss_files_in.length; i++) {
  sass_funct(scss_files_in[i], css_files_out[i]);
  };
});

// In particular for automatically renew css thru scss
gulp.task("watch", function() {
  for (i = 0; i < scss_files_in.length; i++) {
  gulp.watch(scss_files_in[i], ["sass"]);};
  //gulp.watch(html_files, browserSync.reload);
  //gulp.watch(js_files, browserSync.reload);



  //gulp.watch(css_files, browserSync.reload);
});