var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './js/app'
  ],
  devtool: 'eval',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
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
      test: /\.css?$/,
      loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader?{browsers:["last 3 version"]}'
    }]
  }
};