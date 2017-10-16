const webpack = require('webpack')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, './src/js'),
	entry: {
		index: './index.js'
	},
	output: {
		path: path.join(__dirname, 'dist/js/'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	resolve: {
		extensions: ['.js']
	}
}