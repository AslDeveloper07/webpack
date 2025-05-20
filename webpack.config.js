const path = require("path"); //node js
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //mode
  mode: "development", //production
  //entry
  entry: path.resolve(__dirname, "./src/app.js"),
  //output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({  
      //title,
      title: 'webpack 5😀',
      //filename,
      filename: 'index.html',
      //template
      template: './src/temp.html',
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
