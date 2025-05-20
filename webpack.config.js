const path = require('path'); //node js
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //mode
  mode: 'development', //production
  //entry
  entry: {
    app:path.resolve(__dirname, './src/app.js'),
    about: path.resolve(__dirname, './src/about.js')
  },
  //output
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  //plugins
  plugins: [
    new htmlWebpackPlugin({
      //title,
      title: 'webpack 5😀',
      //filename,
      filename: 'index.html',
      //template
      template: './src/temp.html',
      //chunks
      chunks:['app'],
    }),
    new htmlWebpackPlugin({
      //title,
      title: 'About page',
      //filename,
      filename: 'about.html',
      //template
      template: './src/tempAbout.html',
      //chunks
      chunks:['about'],
    }),
  ],
  //loaders
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
