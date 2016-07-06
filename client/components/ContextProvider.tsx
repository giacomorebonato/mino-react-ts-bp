import React = require('react')

class ContextProvider extends React.Component<any, any> {
	static childContextTypes = {
		stores: React.PropTypes.object.isRequired
	}

	getChildContext () {
		return { stores: this.props.stores }
	}

	render () {
		return this.props.children
	}
}

export default ContextProvider
