import ReactDOM = require('react-dom')
import * as React from 'react'
import { browserHistory, Router } from 'react-router'
import routes from './routes'
import './styles/global.css'
import './stores'

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app'),
	() => {}
)
