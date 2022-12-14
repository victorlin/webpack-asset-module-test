const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.png$/, type: 'asset/resource' },
    ],
  },
  resolve: {
    alias: {
      "@extensions": path.resolve(__dirname, 'extensionDir')
    },
    fallback: {
      fs: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "EXTENSION_DATA": JSON.stringify(JSON.parse(fs.readFileSync('extensionDir/config.json', { encoding: 'utf8' })))
    }),
  ]
};
