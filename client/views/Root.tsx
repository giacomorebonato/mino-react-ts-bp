import React = require('react')
import DevTools from './DevTools'
import { connect } from '../lib/ContextProvider'
import { IStores } from '../stores'
import LinkContainer from './components/LinkContainer'
const CSS = require('react-css-modules')
const theme = require('./root.scss')
const { 
	AppBar, Layout, Navigation, NavDrawer, Panel, Snackbar, IconButton 
} = require('react-toolbox')

class Root extends React.Component<{stores: IStores}, any> {
	render () {
		const { uiStore, authStore, notificationsStore } = this.props.stores
		const { user } = authStore
		const { isMenuOpen } = uiStore

		return (
			<Layout>
				<NavDrawer
					active={isMenuOpen}
					permanentAt='xxxl'
					onOverlayClick={() => { uiStore.closeMenu() }}
					theme={theme}
				>
					<Navigation type='vertical'>
						<LinkContainer icon='home' to='/'>Home</LinkContainer>
						{ !user ?
							<LinkContainer icon='person' to='/login'>Login</LinkContainer> : null }
						{ user ?
							<LinkContainer icon='person' to='/profile'>Profile</LinkContainer> : null }
						{ user ?
							<LinkContainer icon='clear' to='/logout'>Logout</LinkContainer> : null }
					</Navigation>
				</NavDrawer>
				<Panel>
					<AppBar fixed flat>
						<IconButton icon='menu' inverse onClick={() => { uiStore.toggleMenuOpen() }} />
					</AppBar>
					<div styleName='content'>{this.props.children}</div>
					<Snackbar
						label={notificationsStore.notification.text}
						active={notificationsStore.isSnackbarVisible}
					/>
					<DevTools />
				</Panel>
			</Layout>
		)
	}
}

export default connect(CSS(Root, theme))
