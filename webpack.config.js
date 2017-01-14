'use strict';

var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{loader: "babel-loader",test: /\.js$/},
			{loaders: ["style-loader", "css-loader", "sass-loader"], test: /\.scss$/},
			{loader: "json-loader", test: /\.json$/}
			//{loaders: ["url", "img"], test: /\.png$/}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};

module.exports = webpackConfig;
