/**
 * Webpack Babel Config
 */

/**
 * Path
 *
 * NodeJs path package
 * @npm https://www.npmjs.com/package/path
 */
import path from 'path';

/**
 * Webpack
 *
 * @npm https://www.npmjs.com/package/webpack
 */
import webpack from 'webpack';

/**
 * Extract Text Webpack Plugin
 *
 * @npm https://www.npmjs.com/package/extract-text-webpack-plugin
 */
import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 * HTML Webpack Plugin
 *
 * @npmhttps://www.npmjs.com/package/html-webpack-plugin
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * Autoprefixer
 *
 * @npm https://www.npmjs.com/package/autoprefixer
 */
import autoprefixer from 'autoprefixer';

/**
 * ENV
 * @type {string | * | string}
 */
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
	/**
	 * Entry for Webpack
	 * Module get start loading from here
	 */
	entry: './src/index.js',

	/**
	 * Output path for build including public path and build filename
	 */
	output: {
		path: './build',
		publicPath: '/',
		filename: 'bundle.js'
	},

	/**
	 * Directories to resoilve modules from including extensions to parse
	 */
	resolve: {
		modulesDirectories: [
			path.resolve(__dirname, 'node_modules'),
			'node_modules'
		],
		extensions: ['', '.jsx', '.js', '.json', '.scss']
	},

	module: {
		/**
		 * Webpack Preloaders
		 */
		preLoaders: [
			{
				test: /\.jsx?$/,
				exclude: /src\//,
				loader: 'source-map'
			}
		],
		/**
		 * Webpack Loaders
		 * Plugins to parse and load files for webpack
		 */
		loaders: [
			{
				/**
				 * Babel Loader for jsx files
				 */
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				/**
				 * SCSS loader for scss and css files
				 */
				test: /\.(scss|css)$/,
				loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
			},
			{
				/**
				 * JSON loader for json files
				 */
				test: /\.json$/,
				loader: 'json'
			},
			{
				/**
				 * Raw loader for xml, html and txt files
				 */
				test: /\.(xml|html|txt)$/,
				loader: 'raw'
			},
			{
				/**
				 * File Loader for svg, woff, ttf and eot (Font) files
				 */
				test: /\.(svg|woff|ttf|eot)(\?.*)?$/i,
				loader: 'file-loader?name=assets/fonts/[name]_[hash:base64:5].[ext]'
			},
			{
				/**
				 * URL loader for favicon
				 */
				test: /favicon\.ico$/,
				loader: 'url',
				query: {
					limit: 1,
					name: '[name].[ext]'
				}
			}
		]
	},

	/**
	 * Post CSS method to generate browser based CSS
	 * @return {*[]}
	 */
	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],

	/**
	 * Plugins method for their configuration
	 */
	plugins: ([
		/**
		 * Initiating the NoErrorsPlugin to suppress any errors
		 */
		new webpack.NoErrorsPlugin(),

		/**
		 * Initiating ExtractTextPlugin for style.css
		 */
		new ExtractTextPlugin('style.css', { allChunks: true }),

		/**
		 * Webpack Define Plugin for ENV variables
		 */
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),

		/**
		 * HTMLWebpackPlgin to set application title in the generated index.html
		 * See https://www.npmjs.com/package/html-webpack-plugin for more options
		 */
		new HtmlWebpackPlugin({
			title: 'Preact Boilerplate'
		})
	]).concat(ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	] : []),

	stats: { colors: true },

	/**
	 * Dev Tools flag for source-map generation in a map file on inline
	 */
	devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',

	/**
	 * Dev Server Config
	 */
	devServer: {
		/**
		 * Port on which development server will run
		 */
		port: process.env.PORT || 3000,

		/**
		 * Host on which development server will run
		 */
		host: '0.0.0.0',

		/**
		 * Colors for console output
		 */
		colors: true,

		/**
		 * Public path for development server
		 */
		publicPath: '/',

		/**
		 * Content base for development server
		 */
		contentBase: './src',

		/**
		 * Using history API
		 */
		historyApiFallback: true,

		/**
		 * Disabled Static redirect for static files
		 */
		staticOptions: {
			redirect: false
		},

		/**
		 * Development Server proxy configuration
		 */
		proxy: [
			// {
			// 	path: '/optional-prefix/**',
			// 	target: 'http://target-host.com',
			// 	rewrite: req => { req.url = req.url.replace(/^\/[^\/]+\//, ''); }   // strip first path segment
			// }
		]
	}
};
