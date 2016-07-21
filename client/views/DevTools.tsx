declare var NODE_ENV: string
import * as React from 'react'

function DevTools (props) {
	if (typeof process.env.NODE_ENV !== 'undefined' &&
			process.env.NODE_ENV === 'development') {
		let DevTools = require('mobx-react-devtools').default

		return <DevTools position={{ bottom: 0, right: 20 }} />
	}

	return null
}

export default DevTools
