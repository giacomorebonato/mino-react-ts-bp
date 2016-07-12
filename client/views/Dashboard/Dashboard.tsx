import React = require('react')
import { observer } from 'mobx-react'
import context from '../../stores'
import { IRouterProps } from 'react-router'
import { Container, Title } from '../components'

const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

@observer
class Dashboard extends React.Component<IRouterProps, any> {
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
		const { stores } = this.context
		const { sampleStore } = stores
		const { title } = sampleStore

		return (
			<Container>
				<Title>{title}</Title>
				<div>
					<label>Change title</label>
					<input
						type='text'
						onChange={(e: Event) => {
							let input = e.target as HTMLInputElement
							sampleStore.changeTitle(input.value)
						}}
						value={title}
					/>
				</div>
			</Container>
		)
	}
}

export default CSS(Dashboard, styles)
