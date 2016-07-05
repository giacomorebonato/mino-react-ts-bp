import ReactDOM = require('react-dom')
import * as React from 'react'
import { browserHistory, Router } from 'react-router'
import routes from './routes'
import './styles/global.css'
import stores from  './stores'

function createElement (Component, props) {
	return (
		<Component {...props} stores={stores} />
	)
}

ReactDOM.render(
	<Router
		history={browserHistory}
		routes={routes}
		createElement={createElement}
	/>,
	document.getElementById('app')
)
