var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'}),
  exclude: ['node_modules']
});

module.exports = {
  entry: [
    './src/app.jsx',
    './styles/app.scss'
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      utils: path.resolve(__dirname, 'src/modules/utils.js'),
      Styles: path.resolve(__dirname, 'styles/'),
      Images: path.resolve(__dirname, 'public/images/')
    }
  },
  module: {
    loaders
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};
