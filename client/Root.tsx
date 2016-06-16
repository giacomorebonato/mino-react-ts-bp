import React = require('react')

interface IProps {
	children: any
}

export default class Root extends React.Component<IProps, any> {
	render () {
		return (
			<div>{this.props.children}</div>
		)
	}
}
