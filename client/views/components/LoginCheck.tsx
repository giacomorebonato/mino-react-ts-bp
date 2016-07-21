import React = require('react')
import { browserHistory } from 'react-router'
import { IStores } from '../../stores'

function LoginCheck<P> (Component): React.ComponentClass<any> {
	class ComposedComponent extends React.Component<{stores: IStores}, any> {
		constructor (props) {
			super(props)

			this.state = {
				user: this.props.stores.authStore.user
			}
		}
		componentDidMount () {
			if (!this.state.user) {
				browserHistory.replace('/login')
			}
		}
		render() {
			if (!this.state.user) { return null }

			return <Component {...this.props}  />
		}
	}

	return ComposedComponent
}

export default LoginCheck
