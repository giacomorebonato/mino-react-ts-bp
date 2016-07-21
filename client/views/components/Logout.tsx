import React = require('react')
import { IStores } from '../../stores'
import { connect } from '../../lib/ContextProvider'
const browserHistory = require('react-router/lib/browserHistory')

class Logout extends React.Component<{stores: IStores}, any> {
	componentDidMount () {
		this.props.stores.authStore.logout()
		browserHistory.replace('/login')
	}
	render () {
		return null
	}
}

export default connect(Logout)
