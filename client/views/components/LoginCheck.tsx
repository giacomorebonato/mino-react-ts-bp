import React = require('react')
import { IStores } from '../../stores'

const browserHistory = require('react-router/lib/browserHistory')

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
