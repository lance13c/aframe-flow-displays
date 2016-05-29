const webpack = require('webpack');
const path = require('path');

const PATHS = {
	root: path.join(__dirname, './'),
	app: path.join(__dirname, 'src/index.js'),
  build: path.join(__dirname, 'build/')
};

module.exports = {
  entry: {
    app: [PATHS.app]
  },
  output: {
    path: PATHS.build,
    publicPath: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      {test: '/\.js$/', exclude: /node_modules/, loader: 'babel'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
	  hot: true,
	  inline: true,
	  progress: true,
	  stats: 'errors-only',
    contentBase: PATHS.root
  },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
