import ReactDOM = require('react-dom')
import * as React from 'react'
import { browserHistory, Router, RouterContext } from 'react-router'
import routes from './routes'
import './styles/global.css'
import stores from  './stores'
import ContextProvider from './components/ContextProvider'

function createElement (props) {
	return (
		<ContextProvider stores={stores}>
			<RouterContext {...props} />
		</ContextProvider>
	)
}

ReactDOM.render(
	<Router
		history={browserHistory}
		routes={routes}
		render={createElement}
	/>,
	document.getElementById('app')
)
