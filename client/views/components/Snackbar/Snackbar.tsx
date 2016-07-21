import React = require('react')
import { IStores } from '../../../stores'
import cn = require('classnames')
import { connect } from '../../../lib/ContextProvider'
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const CSS = require('react-css-modules')
const styles = require('./snackbar.css')

class Snackbar extends React.Component<{stores: IStores}, any> {
	context: {
		stores: IStores
	}
	render () {
		const { notificationsStore } = this.props.stores
		const { notification, isSnackbarVisible } = notificationsStore
		const { text, type } = notification

		return (
			<ReactCSSTransitionGroup
				transitionName='snackbar'
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
			>
				{
					isSnackbarVisible ?
					<div
						className='fixed border-box bottom-0 bg-dark p2 mx-auto left-0 right-0 rounded-top max-width-3'
					>
						<p
							className={
								cn('m0 p0', {
									'text-primary-color': type === 'DEFAULT',
									'text-warning': type === 'WARNING',
									'text-success': type === 'SUCCESS',
									'text-alert': type === 'ALERT'
								})
							}
						>{text}</p>
					</div> : null
				}
			</ReactCSSTransitionGroup>
		)
	}
}

export default connect(CSS(Snackbar, styles))
