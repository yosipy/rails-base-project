const path = require('path');
const webpack = require('webpack');

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
        test: /\.m?js$/,
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
};
