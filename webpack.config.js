const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: {
    main: [
      './app/scripts/index.js',
      './app/styles/index.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg|woff2?|fnt|webp|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: '[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

module.exports = config
