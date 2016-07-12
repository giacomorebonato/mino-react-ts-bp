declare var NODE_ENV: string
import React = require('react')
import { Notifications, SideMenu, TopBar } from './components'
import stores from '../stores'
import { observer } from 'mobx-react'

interface IProps {
	children?: any
}

@observer
class Root extends React.Component<IProps, any> {
	context: {
		stores: typeof stores
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}
	render () {
		const { stores } = this.context
		const { isSideMenuVisible } = stores.uiStore

		return (
			<div>
				<TopBar
					onMenuClick={() => {
						stores.uiStore.toggleSideMenu()
					}}
				/>
				<Notifications />
				<SideMenu
					show={isSideMenuVisible}
					width={'14rem'}
					options={[
						{ url: '/login', text: 'Login', icon: 'toll'},
						{ url: '/signup', text: 'Signup', icon: 'toll'}
					]}
				/>
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
