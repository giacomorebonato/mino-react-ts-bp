import React = require('react')
import { IStores } from '../../stores'
import { connect } from '../../lib/ContextProvider'
import { observer } from 'mobx-react'

const Container = require('muicss/lib/react/container')
const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

class Dashboard extends React.Component<{stores: IStores}, any> {
	render () {
		const { stores } = this.props
		const { siteStore } = stores
		const { title } = siteStore

		return (
			<Container fluid>
				<h3>{title}</h3>
				<div>
					<label>Change title</label>
					<input
						type='text'
						onChange={(e: { target: HTMLInputElement }) => {
							siteStore.setTitle(e.target.value)
						}}
						value={title}
					/>
				</div>
			</Container>
		)
	}
}

export default observer(connect(CSS(Dashboard, styles)))
