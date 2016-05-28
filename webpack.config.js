module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: __dirname,
    publicPath: '/',
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
    contentBase: './'
  }
};
