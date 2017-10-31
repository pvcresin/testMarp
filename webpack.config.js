module.exports = {
	entry: __dirname + '/src/js/index.js',
	output: {
		path: __dirname + '/dist/js/',
		filename: 'index.js'
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
	}
}