import bodyParser = require('body-parser')
import express = require('express')
import nunjucks = require('nunjucks')
import { NODE_ENV, PORT } from './config'
import path = require('path')
import routes from './routes'
const app = express()

if (NODE_ENV === 'development') {
  let webpack = require('webpack')
  const webpackConfig = require('../webpack.config')
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, '../public')))
app.set('view engine', 'html')
nunjucks.configure(path.join(__dirname, '../views'), {
  autoescape: true,
  express: app
})
routes(app)

let server = app.listen(PORT, () => {
  console.log(`server listening on port ${server.address().port}`)
})
