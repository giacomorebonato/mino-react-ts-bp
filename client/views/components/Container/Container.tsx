import * as React from 'react'
const styles = require('./container.css')
const CSS = require('react-css-modules')

function Container (props) {
	return (
		<div
			className='p1 pt4 mt3 max-width-4 mx-auto justify-center'
			styleName='container'
		>
			{props.children}
		</div>
	)
}

export default CSS(Container, styles)
