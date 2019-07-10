const path = require("path");
const HtmlWebpakPlugin = require("html-webpack-plugin");
const CopyWebpakPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    //后缀为.js/.jsx的使用
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      //排除node—modules文件夹
      exclude:[/node_modules/]
    }, {
        test: /\.css$/,
      use:['style-loader','css-loader']
    }
    ]
  },
  plugins: [
    new HtmlWebpakPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CopyWebpakPlugin([{ from: path.resolve(__dirname, "../public") }])
  ]
};
