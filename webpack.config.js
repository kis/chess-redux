var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './js/index'
  ],
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: "http://localhost:8080/static/"
    // publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader?stage=0&optional=runtime'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'js')
    }, {
      test: /(\.scss|\.css)$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};