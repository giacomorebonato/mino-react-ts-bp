import * as React from 'react'

function Label (props) {
	return (
		<label
			className='pb1 pt1 inline-block fit bold'
			{...props}
		>{props.children}</label>
	)
}

export default Label
