var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');

var mode = process.env.NODE_ENV || 'development';

const config = {
  mode: mode,
  output: {
    filename: 'app.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              modules: false,
              targets: {
                browsers: ['last 2 versions', 'ie >= 10']
              },
            }],
            'react'
          ],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  }
};

gulp.task('webpack', function() {
  return gulp.src('app/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js', 'app/**/*.jsx'], gulp.series('webpack'));
});

gulp.task('clean', function(cb) {
  del('dist');
  cb();
});

gulp.task('default', gulp.series('clean', 'webpack'));
