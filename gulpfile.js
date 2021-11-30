const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const sync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const terser = require("gulp-terser");

// HTML

const html = () => {
  return gulp.src("source/*.html", {"allowEmpty": true})
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html = html;

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss", {"allowEmpty": true})
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(gulp.dest("build/css"))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Scripts

const scripts = () => {
  return gulp.src("source/js/script.js", {"allowEmpty": true})
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

// Images

const optimizeImages  = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}", {"allowEmpty": true})
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
}

exports.images = optimizeImages;

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}", {"allowEmpty": true})
    .pipe(gulp.dest("build/img"))
}

exports.images = copyImages;

// WebP

const createWebP = () => {
  return gulp.src("source/img/**/*.{jpg,png}", {"allowEmpty": true})
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
}

exports.createWebP = createWebP;

// Sprite

const sprite = () => {
  return gulp.src("source/img/**/*.svg", {"allowEmpty": true})
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
}

exports.sprite = sprite;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

const reload = (done) => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/js/*.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
}

exports.default = gulp.series(
  styles, server, watcher
);

// Copy scripts for build

const copyScripts = (done) => {
  gulp.src([
    "source/js/script.js",
    ],
    {"allowEmpty": true}
  )
  .pipe(gulp.dest("build/js"))
  done();
}

exports.copyScripts = copyScripts;

// Copy fonts for Build

const copyFonts = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}"
  ],
    {"allowEmpty": true}
  )
  .pipe(gulp.dest("build/fonts"))
  done();
}

exports.copyFonts = copyFonts;

// Clean for build

const clean = () => {
  return del("build");
}

exports.clean = clean;

// Build

const build = gulp.series(
  clean,
  copyFonts,
  copyScripts,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebP
  ),
);

exports.build = build;

// Default


exports.default = gulp.series(
  clean,
  copyFonts,
  copyScripts,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebP
  ),
  gulp.series(
    server,
    watcher
  ));
