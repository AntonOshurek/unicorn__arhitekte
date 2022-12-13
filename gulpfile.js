const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      sourcemap = require('gulp-sourcemaps'),
      less = require('gulp-less'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      sync = require('browser-sync').create(),
      htmlmin = require('gulp-htmlmin'),
      csso = require('postcss-csso'),
      rename = require('gulp-rename'),
      // squoosh = require('gulp-libsquoosh'),
      // webp = require("gulp-webp"),
      del = require('del'),
      webpack = require("webpack-stream")
      // UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Styles
const styles = () => {
  return gulp.src('source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}
exports.styles = styles;

//HTML
const html = () => {
  return gulp.src('source/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
};
exports.html = html;

//js webpack
const script = () => {
  return gulp.src('source/scripts/index.js')
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'bundle.js'
    },
    // 'plugins': [
    //   new UglifyJsPlugin({
    //     'sourceMap': true,
    //     'parallel': true
    //   })
    // ],
    watch: false,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(sync.stream());
}
exports.script = script;

//js project slider
const scriptProjectSlider = () => {
  return gulp.src('source/scripts/project-slider.js')
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'project-slider.js',
    },
    // 'plugins': [
    //   new UglifyJsPlugin({
    //     'sourceMap': true,
    //     'parallel': true
    //   })
    // ],
    watch: false,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(sync.stream());
}
exports.scriptProjectSlider = scriptProjectSlider;

//js pmain slider
const scriptMainSlider = () => {
  return gulp.src('source/scripts/slider-full.js')
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'slider-full.js',
    },
    // 'plugins': [
    //   new UglifyJsPlugin({
    //     'sourceMap': true,
    //     'parallel': true
    //   })
    // ],
    watch: false,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(sync.stream());
}
exports.scriptMainSlider = scriptMainSlider;

//copyimg
const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg,svg,webp}')
  .pipe(gulp.dest('build/img'))
}
exports.copyImages = copyImages;

// Copy
const copy = (done) => {
  gulp.src([
    "source/*.ico",
    "source/img/**/*.svg",
    "source/img/**/*.webp",
    "source/img/**/*.png",
    "source/img/**/*.jpg",
    "!source/img/icons/*.svg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}
exports.copy = copy;

//Clean
const clean = () => {
  return del("build");
};
exports.clean = clean;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

//RELOAD
const reload = (done) => {
  sync.reload();
  done();
}

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/scripts/**/*.js", gulp.series(script));
  gulp.watch("source/scripts/project-slider.js", gulp.series(scriptProjectSlider));
  gulp.watch("source/scripts/slider-full.js", gulp.series(scriptMainSlider));
  gulp.watch("source/**/*.html", gulp.series(html, reload));
}

// Build
const build = gulp.series(
  clean,
  copy,
  // optimizeImages,
  gulp.parallel(
    styles,
    html,
    // createWebp,
    script,
    scriptProjectSlider,
    scriptMainSlider,
  ),
);
exports.build = build;

// Default
exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    // createWebp,
    script,
    scriptProjectSlider,
    scriptMainSlider,
  ),
  gulp.series(
    server,
    watcher
  ));
