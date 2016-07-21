import React = require('react')
import { IStores } from '../../stores'
import { connect } from '../../lib/ContextProvider'
import { observer } from 'mobx-react'

const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

class Dashboard extends React.Component<{stores: IStores}, any> {
	render () {
		const { stores } = this.props
		const { siteStore } = stores
		const { title } = siteStore

		return (
			<div>
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
			</div>
		)
	}
}

export default observer(connect(CSS(Dashboard, styles)))
