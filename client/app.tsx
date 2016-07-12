import ReactDOM = require('react-dom')
import * as React from 'react'
import { browserHistory, Router, RouterContext } from 'react-router'
import routes from './routes'
import './styles/global.css'
import stores from  './stores'
import ContextProvider from './lib/ContextProvider'
import firebase = require('firebase')

let config = {
	apiKey: "AIzaSyC7df3s4ixJwraA11baGRwBTbgdqFgEoco",
	authDomain: "to-do-list-3210f.firebaseapp.com",
	databaseURL: "https://to-do-list-3210f.firebaseio.com",
	storageBucket: ""
};
firebase.initializeApp(config)

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
