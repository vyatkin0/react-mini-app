const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
          }
        }
      ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    })
  ],
};