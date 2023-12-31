const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    products: './src/js/products.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true, // removes files that aren't in use
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(s[ac]ss)$/i,
            use: [
              // Creates 'style' nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
            // executes from bottom to top
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cloud 8 Café',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
      hash: false, // add hash to the file so filename is different on every build
      minify: {
        collapseWhitespace: true,
        removeComments: false,
      },
      template: './src/index.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'src'), // static files
    port: 3000,
    open: true, // open browser on server start
  },
  devtool: 'inline-source-map',
};