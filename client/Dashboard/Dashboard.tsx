import React = require('react')
const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

export class Dashboard extends React.Component<{}, {}> {
	render () {
		return (
			<div>
				<h1 styleName='title'>Dashboard</h1>
			</div>
		)
	}
}

export default CSS(Dashboard, styles)
