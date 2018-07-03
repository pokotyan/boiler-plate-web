const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: ['react-hot-loader/patch'],
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: 'build',
    open: true,
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  }
});
