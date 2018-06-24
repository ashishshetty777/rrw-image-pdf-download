var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader?url=false','sass-loader']
            })
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin({filename:'bundle.css'}),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

module.exports = config;
