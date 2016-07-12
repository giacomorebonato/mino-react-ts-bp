import * as React from 'react'
import cn = require('classnames')
const styles = require('./formGroup.css')
const CSS = require('react-css-modules')

function FormGroup (props) {
	return (
		<div
			className={
				cn('mt1 mb1 form-group', {
					valid: props.valid,
					error: props.error
				})
			}
		>{props.children}</div>
	)
}

export default CSS(FormGroup, styles)
