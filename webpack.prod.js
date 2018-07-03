const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        mangle: true,
        ecma: 5,
        ie8: false, // React doesn't support IE8
        compress: {
          arrows: true,
          booleans: true,
          collapse_vars: true,
          comparisons: false,
          computed_props: false,
          conditionals: false,
          dead_code: true,
          drop_console: false,
          drop_debugger: false,
          ecma: false,
          evaluate: false,
          expression: false,
          global_defs: {},
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_classnames: false,
          keep_fargs: false,
          keep_fnames: false,
          keep_infinity: false,
          loops: false,
          negate_iife: false,
          passes: false,
          properties: false,
          pure_funcs: false,
          pure_getters: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          toplevel: false,
          top_retain: false,
          typeofs: false,
          unsafe: true,
          unsafe_arrows: false,
          unsafe_comps: false,
          unsafe_math: false,
          unsafe_methods: false,
          unsafe_proto: false,
          unsafe_regexp: false,
          unused: true,
          warnings: false
        },
        output: {
          beautify: false,
          comments: false
        }
      }
    })
  ]
});
