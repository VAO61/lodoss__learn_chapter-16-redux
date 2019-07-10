const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, ...argv) => {
  const isProduction = argv[0].mode === 'production';

  return {
    entry: {
      index: './src/js/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js?[hash]'
    },
    devtool: isProduction ? 'none' : 'inline-source-map',
    devServer: {
      hot: true,
      inline: true,
      open: true
      // contentBase: './src'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css?[hash]'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/html/index.html',
        chunks: ['index']
      })
    ]
  };
};
