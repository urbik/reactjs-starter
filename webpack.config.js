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

			// BOOTSTRAP FONTS
			{ test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf$/, loader: "file-loader" },
			{ test: /\.eot$/, loader: "file-loader" },
			{ test: /\.svg$/, loader: "file-loader" },

			// OTHER
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