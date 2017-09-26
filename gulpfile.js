"use strict";

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  server = require("browser-sync").create(),
  minifyCss = require("gulp-csso"),
  uglifyJs = require("gulp-uglify"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  svgmin = require("gulp-svgmin"),
  svgstore = require("gulp-svgstore"),
  run = require("run-sequence"),
  del = require("del"),
  concat = require("gulp-concat"),
  pump = require("pump");

gulp.task("style", function () {
  gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 10 versions"
        ]
      })
    ]))
    .pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("src/css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("serve", function () {
  server.init({
    server: "./build",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("src/*.html", ["html:update"]);
  gulp.watch("src/js/**/*.js", ["js:update"]);
});

gulp.task('scripts', function (cb) {
  pump([
      gulp.src("src/js/main.js"),
      uglifyJs(),
      rename("main.min.js"),
      gulp.dest("src/js/"),
      gulp.dest("build/js/")
    ],
    cb
  );
});

gulp.task("html:copy", function () {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function (done) {
  server.reload();
  done();
});

gulp.task("js:copy", function () {
  return gulp.src("src/js/main.min.js")
    .pipe(gulp.dest("build/js/"));
});

gulp.task("js:update", ["js:copy"], function (done) {
  server.reload();
  done();
});

gulp.task("images", function () {
  let img = gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
  let svg = gulp.src("build/img/**/**.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    "src/*.html",
  ], {
    base: "src"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("build", function (fn) {
  run("clean", "copy", "style", "scripts", "images", fn);
});
