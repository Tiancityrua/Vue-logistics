const webpack = require('webpack');
const path = require('path');
const AutoPrefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: path.resolve(__dirname, './index.js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', 'css-loader'],
            less: ['vue-style-loader', 'css-loader', 'less-loader']
          },
          postcss: [
            AutoPrefixer({
                browsers: ['last 20 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, './node_modules/')]
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  devServer: {
    publicPath: '/',
    hot: true
  },
  devtool: '#eval-source-map',
}

if(process.env.NODE_ENV === 'production') {
  config.plugins = (config.plugins || []).concat([
    new CleanWebpackPlugin(['build']),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new ExtractTextPlugin('[name].[hash].css')
  ]);
  config.output = {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './build/assets'),
  };
}

module.exports = config

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}