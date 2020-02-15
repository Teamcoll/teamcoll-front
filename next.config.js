const path = require('path');
const withSass = require('@zeit/next-sass');
module.exports = withSass({
	cssModules: true,
	webpack: function(config) {
		config.resolve.alias['Image'] = path.resolve(__dirname, 'public/images/');
		config.resolve.alias['Font'] = path.resolve(__dirname, 'public/fonts/');
		config.resolve.alias['~'] = path.resolve(__dirname, '/src/');
		config.module.rules.push({
			test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
					name: '[name].[ext]',
				},
			},
		});
		return config;
	},
});
