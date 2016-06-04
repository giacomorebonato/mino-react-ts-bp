import ReactDOM = require('react-dom')
import React = require('react')

export default class Root extends React.Component<{}, {}> {
	render () {
		return (
			<div>{this.props.children}</div>
		)
	}
}
