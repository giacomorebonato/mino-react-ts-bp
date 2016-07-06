declare var NODE_ENV: string
import React = require('react')

interface IProps {
	children?: any
}

class Root extends React.Component<IProps, any> {
	render () {
		return (
			<div>
				{this.props.children}
				{
					(() => {
						let DevTools = require('mobx-react-devtools').default
						if (typeof NODE_ENV !== 'undefined' && NODE_ENV === 'development') {
							return <DevTools />
						}
					})()
				}
			</div>
		)
	}
}

export default Root
