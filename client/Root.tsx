declare var NODE_ENV: string
import React = require('react')
import DevTools from 'mobx-react-devtools'

interface IProps {
	children?: any
}

export default class Root extends React.Component<IProps, any> {
	render () {
		return (
			<div>
				{this.props.children}
				{
					(() => {
						if (typeof NODE_ENV !== 'undefined' && NODE_ENV === 'development') {
							return <DevTools />
						}
					})()
				}
			</div>
		)
	}
}
