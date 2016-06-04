var path = require('path')
var webpack = require('webpack')
var NODE_ENV = process.env.NODE_ENV || 'development'

var conf = {
  entry: {
		'front-end': [path.join(__dirname, '/client/app.tsx')]
	},
  output: {
		path: path.join(__dirname, '/public'),
		publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts' },
      {
        test: /\.css$/,
        loaders: [
            'style?sourceMap',
            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },
	plugins: []
}

if (NODE_ENV === 'development') {
  var onlyServer = 'webpack/hot/only-dev-server'
  var mwClient = 'webpack-hot-middleware/client'

  conf.entry['front-end'].splice(1, 0, onlyServer, mwClient)

  conf.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
  conf.plugins.push(new webpack.HotModuleReplacementPlugin())
  conf.plugins.push(new webpack.NoErrorsPlugin())
  conf.module.loaders.push({ test: /\.(js|jsx)$/, exclude: /(node_modules|server)/, loaders: ['react-hot', 'ts'] })
}

module.exports = conf
