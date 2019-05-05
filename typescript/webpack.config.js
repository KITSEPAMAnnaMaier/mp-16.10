const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'TypeScript Homework'
    })
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].bundle.js'
  }
};