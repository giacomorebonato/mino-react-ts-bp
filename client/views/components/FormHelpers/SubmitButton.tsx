import * as React from 'react'
const CSS = require('react-css-modules')
const styles = require('./submitButton.css')


function Button (props) {
	return (
		<div className='flex justify-end'>
			<button
				styleName='btn-submit'
				className='inline-block pt1 pb1 pl3 pr3 mt1 rounded border'
			>{props.children}</button>
		</div>
	)
}

export default CSS(Button, styles)
