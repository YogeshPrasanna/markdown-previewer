module.exports = {
	entry: "./app/components/Main.js",
	output: {
		filename: "./public/bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react','es2015']
				}
			}
		]
	}
}