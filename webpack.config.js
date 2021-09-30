const path = require('path');
const webpack = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'frontend/application.js'),

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public/packs'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /(\.m?js|\.tsx?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'frontend')],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  },

  plugins: [
    new WebpackManifestPlugin({
      publicPath: '/packs/',
    }),
  ],
};
