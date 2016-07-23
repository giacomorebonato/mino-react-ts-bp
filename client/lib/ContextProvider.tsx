import React = require('react')
import { observer } from 'mobx-react'
import { IStores } from '../stores'

class ContextProvider extends React.Component<IContextProviderProps, any> {
	static childContextTypes = {
		stores: React.PropTypes.object.isRequired
	}
	getChildContext () {
		return this.props.context
	}
	render () {
		return this.props.children
	}
}

interface IContextProviderProps {
	children?: JSX.Element
	context: {
		stores: IStores
	}
}

export function connect<P> (Component: any): any {
	if (!Component) {
		throw new Error('Not valid component passed to connect')
	}

	Component = observer(Component)

	class Enhanced extends React.Component<any, any> {
		context: {
			location: Location
			router: History
			stores: IStores
		}
		static contextTypes = {
			location: React.PropTypes.object,
			router: React.PropTypes.object,
			stores: React.PropTypes.object
		}
		render () {
			const { stores, router, location } = this.context

			return (
				<Component
					{...this.props}
					location={location}
					stores={stores}
					router={router}
				/>
			)
		}
	}

	return Enhanced
}

export default ContextProvider
