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
			{loaders: ["style-loader", "css-loader", "sass-loader"], test: /\.scss$/},
			{loader: "json-loader", test: /\.json$/},
			{
			            test: /\.(jpe?g|png|gif|svg|eot|ttf|woff)$/i,
			            loader: 'file?name=[path][name].[ext]'
			        }
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
