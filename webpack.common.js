const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
  target: 'web',
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              context: path.join(process.cwd(), './src'),
              importLoaders: 2,
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.AUTH0_DOMAIN': JSON.stringify(process.env.AUTH0_DOMAIN),
      'process.env.AUTH0_CLIENT_ID': JSON.stringify(
        process.env.AUTH0_CLIENT_ID
      ),
      'process.env.AUTH0_REDIRECT_URI': JSON.stringify(
        process.env.AUTH0_REDIRECT_URI
      ),
      'process.env.AUTH0_AUDIENCE': JSON.stringify(process.env.AUTH0_AUDIENCE)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/template/index.html.ejs',
      inject: 'body'
    })
  ]
};
