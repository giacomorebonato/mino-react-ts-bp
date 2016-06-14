var path = require('path')
var webpack = require('webpack')
var NODE_ENV = process.env.NODE_ENV || 'development'
var globalCSS = path.join(__dirname, '/client/styles/global.css')

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
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
      { test: globalCSS, loader: "style-loader!css-loader" },
      {
        test: /\.css$/,
        exclude: globalCSS,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      },
      'NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ]
}

if (NODE_ENV === 'development') {
  var onlyServer = 'webpack/hot/only-dev-server'
  var mwClient = 'webpack-hot-middleware/client'

  conf.entry['front-end'].splice(1, 0, onlyServer, mwClient)
  conf.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
  conf.plugins.push(new webpack.HotModuleReplacementPlugin())
  conf.plugins.push(new webpack.NoErrorsPlugin())
  conf.module.loaders.push(
    { test: /\.tsx?$/, loaders: ['react-hot', 'awesome-typescript'] }
  )
} else {
  conf.module.loaders.push(
    { test: /\.tsx?$/, loaders: ['awesome-typescript'] }
  )
}

module.exports = conf
