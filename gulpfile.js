/*!!!Later "new_edition" must be replaced to "production" whis proper renaming of the needed folder*/
var gulp = require("gulp");
var sass = require("gulp-sass");
var scss_files_in = [];
var css_files_out = [];


/**********PRODUCTION TASKS**********/
scss_files_in[0] = "website/new_edition/modules/shelves/scss/**/*.+(scss|sass)";
css_files_out[0] = "website/new_edition/modules/shelves/css";

scss_files_in[1] = "website/new_edition/modules/logo/scss/**/*.+(scss|sass)";
css_files_out[1] = "website/new_edition/modules/logo/css";

scss_files_in[2] = "website/new_edition/modules/search_bar/scss/**/*.+(scss|sass)";
css_files_out[2] = "website/new_edition/modules/search_bar/css";

scss_files_in[3] = "website/new_edition/modules/nav_menu/scss/**/*.+(scss|sass)";
css_files_out[3] = "website/new_edition/modules/nav_menu/css";

scss_files_in[4] = "website/new_edition/modules/list_1/scss/**/*.+(scss|sass)";
css_files_out[4] = "website/new_edition/modules/list_1/css";

scss_files_in[5] = "website/new_edition/modules/m_article_1/scss/**/*.+(scss|sass)";
css_files_out[5] = "website/new_edition/modules/m_article_1/css";

scss_files_in[6] = "website/new_edition/modules/columns_1/scss/**/*.+(scss|sass)";
css_files_out[6] = "website/new_edition/modules/columns_1/css";


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
gulp.task("watch", ["sass"], function() {
  for (i = 0; i < scss_files_in.length; i++) {
  gulp.watch(scss_files_in[i], ["sass"]);};
  //gulp.watch(html_files, browserSync.reload);
  //gulp.watch(js_files, browserSync.reload);



  //gulp.watch(css_files, browserSync.reload);
});
