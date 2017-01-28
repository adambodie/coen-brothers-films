'use strict';

var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJsPlugin = require("uglify-js-plugin");
var webpack = require('webpack');
var jquery = require('jquery');
var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{loader: "babel-loader",test: /\.js$/},
			{loaders: ["style-loader", "css-loader", "sass-loader"], test: /\.s?css$/},
			{loader: "json-loader", test: /\.json$/},
			{loader: 'file?name=[path][name].[ext]',test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new webpack.ProvidePlugin({
    'jQuery': 'jquery',
    '$': 'jquery',
}),
		new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
	]
};

module.exports = webpackConfig;
