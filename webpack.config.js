const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode:'development',
  entry: './src/javascripts/index.js',
  output:{
    path:path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  module:{
    rules:[
      {
        test:/\.js/,
        exclude:/node_modules/,
        loader:'babel-loader',
      },
      {
        test:/\().scss|css)/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader,
          },
          {
            loader:'css-loader',
          },
          {
            loader:'sass-loader,'
          },
        ],
      },
      {
        test:/\.(png|jpg|jpeg)/,
        options: {
          esModule:false,
          name:'images/[name].[ext]'
        }
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/template/index.html',
      filename:'./template/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
  ],
}
