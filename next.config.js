/* eslint-disable strict */

module.exports = (phase, nextConfig) => ({
	future: { webpack5: true },
	webpack(config, options) {
		const { dev, isServer } = options;
		const { assetPrefix = '' } = nextConfig;

		config.module.rules.push({
			test: /\.(png|jpg|jpeg|gif|webp|ico)$/,
			loader: require.resolve('url-loader'),
			options: {
				limit: 0,
				name: dev ? '[path][name].[ext]' : 'images/[name].[contenthash:20].[ext]',
				publicPath: `${assetPrefix}/_next/static/chunks/media`,
				outputPath: 'static/chunks/media',
				emitFile: !isServer,
			},
		});

		if (typeof nextConfig.webpack === 'function') {
			return nextConfig.webpack(config, options);
		}

		return config;
	},
});