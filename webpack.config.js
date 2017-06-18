const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const outputFilename = "styles.css";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: outputFilename,
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin(outputFilename),
    new OptimizeCssAssetsPlugin()
  ]
};
