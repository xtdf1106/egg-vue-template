'use strict';
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyResource = require('./build/copy-resource');

function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = 'Egg Vue Template';

module.exports = {
	publicPath: '/',
	outputDir: 'app/public',
	assetsDir: 'static',
	lintOnSave: false,
	productionSourceMap: false,
	runtimeCompiler: true,
	devServer: {
		open: false,
		host: '0.0.0.0',
		port: 8080,
		https: false,
		proxy: 'http://localhost:7001/'
	},
	configureWebpack: config => {
		let plugins = [];
		if (process.env.NODE_ENV === 'production') {
			plugins.push(new BundleAnalyzerPlugin());
			plugins.push(new CopyResource());
		}
		return {
			name: name,
			resolve: {
				alias: {
					'@': resolve('client')
				}
			},
			entry: {
				app: resolve('client/main.js')
			},
			devtool: 'source-map',
			plugins
		};
	},
	chainWebpack(config) {
		config.plugins.delete('preload'); // TODO: need test
		config.plugins.delete('prefetch'); // TODO: need test

		config.module
				.rule('svg')
				.exclude
				.add(resolve('client/icons'))
				.end();
		config.module
				.rule('icons')
				.test(/\.svg$/)
				.include
				.add(resolve('client/icons'))
				.end()
				.use('svg-sprite-loader')
				.loader('svg-sprite-loader')
				.options({
					symbolId: 'icon-[name]'
				})
				.end();

		config.module
				.rule('vue')
				.use('vue-loader')
				.loader('vue-loader')
				.tap(options => {
					options.compilerOptions.preserveWhitespace = true;
					return options;
				})
				.end();

		config
				.when(process.env.NODE_ENV === 'development',
						config => config.devtool('cheap-source-map')
				);

		config
				.when(process.env.NODE_ENV === 'production',
						config => {
							config
									.plugin('ScriptExtHtmlWebpackPlugin')
									.after('html')
									.use('script-ext-html-webpack-plugin', [{
										inline: /runtime\..*\.js$/
									}])
									.end();
							config
									.plugin('HtmlWebpackExternalsPlugin')
									.after('html')
									.use('html-webpack-externals-plugin', [
										{
											externals: [
												{
													module: 'vue',
													entry: 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
													global: 'Vue',
												},
												// {
												// 	module: 'element-ui',
												// 	entry: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.7.0/index.js',
												// 	global: 'ELEMENT',
												// },
											]
										}
									])
									.end();
							config
									.optimization.splitChunks({
								chunks: 'all',
								cacheGroups: {
									libs: {
										name: 'chunk-libs',
										test: /[\\/]node_modules[\\/]/,
										priority: 10,
										chunks: 'initial' // only package third parties that are initially dependent
									},
									elementUI: {
										name: 'chunk-elementUI', // split elementUI into a single package
										priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
										test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
									},
									commons: {
										name: 'chunk-commons',
										test: resolve('client/components'), // can customize your rules
										minChunks: 3, //  minimum common number
										priority: 5,
										reuseExistingChunk: true
									}
								}
							});
							config.optimization.runtimeChunk('single');
						}
				);
	}
};
