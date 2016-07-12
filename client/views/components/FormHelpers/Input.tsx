import * as React from 'react'
import cn = require('classnames')
const styles = require('./input.css')
const CSS = require('react-css-modules')

function Input (props) {
	return (
		<input
			className={
				cn('block p1 rounded border bg-white border-box', {
					error: props.error,
					valid: props.valid
				})
			}
			onChange={props.onChange}
			styleName='input'
			type={props.type}
		/>
	)
}

interface IInput {
	error?: boolean,
	valid?: boolean,
	onChange?(e: Event): void
}

export default CSS(Input, styles)
