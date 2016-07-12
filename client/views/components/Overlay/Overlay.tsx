import React = require('react')
const CSS = require('react-css-modules')
const styles = require('./overlay.css')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')

class Overlay extends React.Component<{show: boolean, onClick: () => {}}, any> {
	render () {
		return (
			<ReactCSSTransitionGroup
					transitionName='overlay'
					transitionAppear
					transitionAppearTimeout={5000}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
				{
					this.props.show ?
						<div
							key='overlay'
							styleName='overlay'
							onClick={this.props.onClick}
						/>
						: null
				}
			</ReactCSSTransitionGroup>
		)
	}
}

export default CSS(Overlay, styles)
