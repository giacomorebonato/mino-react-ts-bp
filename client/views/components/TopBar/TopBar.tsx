import React = require('react')
const CSS = require('react-css-modules')
const styles = require('./topBar.css')

class TopBar extends React.Component<any, any> {
	render () {
		return (
			<div
				className='fixed flex items-center pl2 border-box dark-primary-color secondary-text-color'
				styleName='top-bar'
			>
				<i
					onClick={this.props.onMenuClick}
					styleName='menu'
					className='material-icons'>menu</i>
			</div>
		)
	}
}

export default CSS(TopBar, styles)
