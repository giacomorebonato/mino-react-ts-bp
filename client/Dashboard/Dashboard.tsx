import React = require('react')
import { observer } from 'mobx-react'
import { sampleStore } from '../stores'
const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

@observer
class Dashboard extends React.Component<{}, {}> {
	render () {
		let { title } = sampleStore

		return (
			<div>
				<h1 className='p2' styleName='title'>Dashboard</h1>
				<p>{title}</p>
			</div>
		)
	}
}

export default CSS(Dashboard, styles)
