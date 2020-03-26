const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/main.js",
  target: "node",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  }
};
