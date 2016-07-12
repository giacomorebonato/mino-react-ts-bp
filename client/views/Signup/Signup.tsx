import React = require('react')
import context from '../../stores'
import { observer } from 'mobx-react'
import { Container, Title } from '../components'
import { IRouterProps } from 'react-router'
import SignupForm from './SignupForm'


@observer
class Signup extends React.Component<IRouterProps, any> {
	context: {
		stores: typeof context
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}

	constructor (props, ctx) {
		super(props, ctx)

		const { uiStore } = ctx.stores

		if (uiStore.isSideMenuVisible) {
			uiStore.toggleSideMenu()
		}
	}

	render () {
		return (
			<Container>
				<Title>Signup</Title>
				<SignupForm />
			</Container>
		)
	}
}

export default Signup
