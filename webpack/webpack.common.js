const path = require('path');

// clean-webpack-plugin - cleans dist folder every time we re-build our application
const CleanWebpackPlugin = require('clean-webpack-plugin');

// html-webpack-plugin - generate (or use our own) html templates and injects final bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

// mini-css-extract-plugin - extract styles into separate css file
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    index: './src/index',
    admin: './src/admin/admin',
    visitor: './src/visitor/visitor'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['common', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: './src/admin/admin.html',
      chunks: ['common', 'admin']
    }),
    new HtmlWebpackPlugin({
      filename: 'visitor.html',
      template: './src/visitor/visitor.html',
      chunks: ['common', 'visitor']
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
      minSize: 0
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss']
  }
};