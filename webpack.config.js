const path = require('path');
const bundlePath = path.resolve(__dirname, "dist/");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode : 'development',
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: bundlePath,
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 3000,
    hot: true,
    publicPath: "http://localhost:3000/dist"
  },
  module: {
    rules: [
        {
         test: /\.js$/,
         exclude: /node_modules/,
        loader: "babel-loader"
      }
      ,
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
