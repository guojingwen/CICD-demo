module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9081,
    hot: 'only',
    host: '127.0.0.1',
    compress: false,
  },
};
