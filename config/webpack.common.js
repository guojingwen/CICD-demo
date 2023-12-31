/* eslint-disable */
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const resolveApp = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const MiniCssExtrctPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

function getCommonConfig(isProduction) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'CICD学习',
      versionInfo: new Date().toLocaleString(),
    }),
    new DefinePlugin({
      BASE_URL: JSON.stringify('./'),
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),
    new ESLintPlugin(),
  ];
  if (isProduction) {
    plugins.push(
      new MiniCssExtrctPlugin({
        filename: 'css/[name].[hash:8].css',
        // chunkFilename: "css/[name].[hash:8].css",
      }),
    );
  }
  return {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: resolveApp('./dist'),
    },
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
      alias: {
        '@': resolveApp('./src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.s?css/,
          use: [
            isProduction ? MiniCssExtrctPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(js|ts|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(je?pg|png|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'img/[name].[hash:6][ext]',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 50 * 1024,
            },
          },
        },
      ],
    },
    plugins,
  };
}

module.exports = function (env) {
  console.log(env);
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? 'production' : 'development';
  const config = isProduction ? prodConfig : devConfig;

  return merge(getCommonConfig(isProduction), config);
};
/* eslint-enable */
