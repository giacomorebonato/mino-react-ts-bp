import React = require('react')
import { IStores } from '../../stores'
import { connect } from '../../lib/ContextProvider'
import { browserHistory } from 'react-router'

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
