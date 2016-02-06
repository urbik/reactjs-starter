var autoprefixer = require('autoprefixer');

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

			// STYLESHEETS & IMGS
			{ test: /\.less$/, loader: "style!css!less" },
			{ test: /\.png$/, loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/, loader: "file-loader" },

			// JS
			{ test: /.jsx?$/, loader: 'react-hot', exclude: /node_modules/ },
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: { presets: ['es2015', 'react'] }
			},

			// OTHER
			{ test: /\.html$/, loader: "file?name=[name].[ext]" }
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};