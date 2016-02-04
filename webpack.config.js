module.exports = {
	entry: {
		javascript: "./app/app.js",
		html: "./app/index.html",
	},

	output: {
		filename: "app.js",
		path: __dirname + "/dist",
	},

	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: "style!css!less"
			},
			{
				test: /.jsx?$/,
				loader: 'react-hot',
				exclude: /node_modules/,
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			}
		]
	},
};