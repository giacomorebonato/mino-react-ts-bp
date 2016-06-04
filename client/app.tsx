import ReactDOM = require('react-dom')
import React = require('react')
import Root from './Root'
import ReactRouter = require('react-router')
import routes from './routes'

let Router = ReactRouter.Router

ReactDOM.render(<Router history={ReactRouter.browserHistory} routes={routes} />, document.getElementById('app'))
