const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    common:'./src/js/common.js',
    index: './src/js/demo.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Ctg Page',
      hash:true
    }),
    // new HtmlWebpackPlugin({  // Also generate a test.html
    //     filename: 'page/demo.html',
    //     template: './src/page/demo.html',
    //     inject:true,
    //     hash:true
    // }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': "jquery",
        // bootstrap:'bootstrap'
    }),
    new ExtractTextPlugin({
        filename:'css/[name].css',
        ignoreOrder:true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js',
    })
  ],

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
              loader:"css-loader",
              // options:{
              //   modules:true
              // }
          }
        })
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
            loader:'file-loader',
            options: {
                name: 'images/[name].[ext]',
            }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader:'file-loader',
          options: {
              name: 'fonts/[name].[ext]',
          }
        }
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      // {
      //     test: require.resolve('jquery'),
      //     use: [{
      //         loader: 'expose-loader',
      //         options: 'jQuery'
      //     },{
      //         loader: 'expose-loader',
      //         options: '$'
      //     }]
      // }
    ]
  }
};