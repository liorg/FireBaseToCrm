const webpack = require('webpack');
const path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './Container');
const staticsPath = path.join(__dirname, './');

module.exports = function (env) {
    const nodeEnv = env && env.prod ? 'production' : 'development';
    const isProd = nodeEnv === 'production';
    console.log(isProd);
    const plugins = [
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity,
          filename: 'vendor.bundle.js'
      }),
      new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
      }),
      new webpack.NamedModulesPlugin(),
    ];

    if (isProd) {
        plugins.push(
          new webpack.LoaderOptionsPlugin({
              minimize: true,
              debug: false
          }),
          new webpack.optimize.UglifyJsPlugin({
              compress: {
                  warnings: false,
                  screw_ie8: true,
                  conditionals: true,
                  unused: true,
                  comparisons: true,
                  sequences: true,
                  dead_code: true,
                  evaluate: true,
                  if_return: true,
                  join_vars: true,
              },
              output: {
                  comments: false,
              },
          })
        );
    } else {
        plugins.push(
          new webpack.HotModuleReplacementPlugin()
        );
    }

    return {
        devtool:  'source-map',
      // devtool: isProd ? 'source-map' : 'eval',
        context: sourcePath,
        entry: {
            js: './index.js',
            jssimple: './simple.js',
            vendor: ['react']
        },
        output: {
            path: staticsPath,
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
              {
                  test: /\.html$/,
                  exclude: /node_modules/,
                  use: {
                      loader: 'file-loader',
                      query: {
                          name: '[name].[ext]'
                      },
                  },
              },
              {
                  // test: /\.css$/,
                  test: /(\.scss|\.css)$/,
                //  exclude: /node_modules/,
                  //use: [
                  //      'style-loader',
                  //      'css-loader?modules&importLoaders=1',
                  //           'postcss-loader',
                  //           {
                  //               loader: 'postcss-loader',
                  //               options: {
                  //                   plugins: function () {
                  //                       return [
                  //                         require('postcss-cssnext'),
                  //                       ];
                  //                   }
                  //               }
                  //           }
                  //            ]
                    //loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass','sass')
                  use: [
                    'style-loader',
                    'css-loader'
                  ]
              },
              //{
              //    test: /\.scss$/,
              //    include: path.join(__dirname, 'src'),
              //    loader: 'style!css!sass'
              //},
              {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: [
                    'babel-loader'
                  ],
              },
            ],
        },
        resolve: {
            extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css', '.scss', '.json'],
            modules: [
              path.resolve(__dirname, 'node_modules'),
              sourcePath
            ]
        },

        plugins,

        performance: isProd && {
            maxAssetSize: 100,
            maxEntrypointSize: 300,
            hints: 'warning',
        },

        stats: {
            colors: {
                green: '\u001b[32m',
            }
        },

        devServer: {
            contentBase: './ShovarDist',
            historyApiFallback: true,
            port: 3030,
            compress: isProd,
            inline: !isProd,
            hot: !isProd,
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m',
                }
            },
        }
    };
};