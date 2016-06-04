import React = require('react')
var CSSModules = require('react-css-modules')
var styles = require('./dashboard.css')

export class Dashboard extends React.Component<{}, {}> {
	render () {
		return (
			<div>
				<h1 styleName='title'>Dashboard</h1>
			</div>
		)
	}
}

export default CSSModules(Dashboard, styles)
