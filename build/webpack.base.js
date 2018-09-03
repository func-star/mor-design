const path = require('path')
const webpack = require('webpack')

module.exports = {
	cache: true,
	entry: {
		app: ['./src/app.jsx']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			path.resolve(__dirname, '../node_modules'),
			path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../src/components'),
			path.resolve(__dirname, '../src/views'),
			path.resolve(__dirname, '../src/style')
		],
		alias: {
			'mona': path.resolve(__dirname, '../'),
			'src': path.resolve(__dirname, '../src'),
			'react': path.resolve('./node_modules/react'),
			'classnames': path.resolve('./node_modules/classnames'),
			'autoprefixer': path.resolve('./node_modules/autoprefixer'),
			'react-dom': path.resolve('./node_modules/react-dom')
		}
	},
	resolveLoader: {
		modules: ['node_modules']
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
	],
	module: {
		rules: [{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader'],
			exclude: /node_modules/
		}, {
			test: /\.md$/,
			use: ['html-loader', 'markdown-loader'],
			exclude: /node_modules/
		}]
	}
}
