import { render } from 'react-dom'
import * as React from 'react'
import { browserHistory, Router, RouterContext } from 'react-router'
import routes from './routes'
import './styles/global.scss'
import ContextProvider from './lib/ContextProvider'
import { getStores } from  './stores'

const stores = getStores(window['data'] || {})

function createElement (props) {
	return (
		<ContextProvider context={{stores}}>
			<RouterContext {...props}  />
		</ContextProvider>
	)
}

browserHistory.listen((location) => {
	stores.uiStore.closeMenu()
})

render(
	<Router
		render={createElement}
		history={browserHistory}
		routes={routes}
	/>,
	document.getElementById('app')
)
