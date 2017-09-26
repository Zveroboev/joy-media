'use strict';
const path = require('path');

const PATH = {
  source: path.join(__dirname, 'src/js'),
  build: path.join(__dirname, 'src/js')
};

module.exports = {
  entry: PATH.source + '/index.js',
  output: {
    path: PATH.build,
    filename: 'main.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
};
