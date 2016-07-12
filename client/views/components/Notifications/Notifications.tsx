import React = require('react')
import { observer } from 'mobx-react'
import context from '../../../stores'
import cn = require('classnames')
import { NotificationType } from  '../../../stores/NotificationsStore'
const CSS = require('react-css-modules')
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const styles = require('./notifications.css')

@observer
class Notifications extends React.Component<any, any> {
	context: {
		stores: typeof context
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}
	render () {
		const { notifications } = this.context.stores.notificationsStore
		return (
			<ReactCSSTransitionGroup
				component='div'
				className='flex flex-column flex-end mr1 fixed bottom-0 right-0'
				style={{
					width: '20rem'
				}}
				transitionName='notification'
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
			>
				{
					notifications.map((notification, i) => {
						return (
							<div
								className={cn('p1 rounded mb1', {
									success: notification.type === NotificationType.SUCCESS,
									warning: notification.type === NotificationType.WARNING,
									alert: notification.type === NotificationType.ALERT
								})}
								style={{
									fontSize: '0.9em'
								}}
								key={i}
							>{notification.text}</div>
						)
					})
				}
			</ReactCSSTransitionGroup>
		)
	}
}

export default CSS(Notifications, styles)
