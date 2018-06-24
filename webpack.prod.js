var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry:  ['babel-polyfill','./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
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
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({filename:'[name].[hash].css'}),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{from:'public', to:'public'}])
  ]
};

module.exports = config;
