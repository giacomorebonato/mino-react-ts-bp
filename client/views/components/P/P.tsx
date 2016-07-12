import * as React from 'react'

function P (props) {
	return (
		<p
			className='primary-text-color'
			style={props.style}
		>{props.children}</p>
	)
}

export default P
