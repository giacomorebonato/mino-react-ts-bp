import * as React from 'react'
const CSS = require('react-css-modules')
const styles = require('./button.css')


function Button (props: IButtonProps) {
	return (
		<button
			className='center pl2 pr2 accent-color text-primary-color border-none'
			styleName='button'
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

interface IButtonProps {
	children?: any,
	onClick: () => {}
}

export default CSS(Button, styles)
