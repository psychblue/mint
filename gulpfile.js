var gulp = require("gulp");
var webpackStream = require("webpack-stream");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
var uglify = require("gulp-uglify");

var files = {
  js: "scripts/**/*.js",
  css: "css/**/*.css"
};


var webpackOptions = {
  target: "web",

  entry: {
    javascript: "./scripts/index.js"
  },

  output: {
    filename: "mint.min.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          cacheDirectory: true
        }
      }
    ]
  }

};

gulp.task("default", ["watch", "build-js", "build-css"]);

gulp.task("build-js", function(){

  return gulp.src(files.js)
    .pipe(webpackStream(webpackOptions, webpack))
    //.pipe(uglify())
    .pipe(gulp.dest("../scripts"));
});

gulp.task("build-css", function(){

  return gulp.src(files.css)
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(concat("mint.min.css"))
    .pipe(gulp.dest("../css"));
});

gulp.task('watch', function(){
	gulp.watch(files.js, ['build-js']);
	gulp.watch(files.css, ['build-css']);
});
