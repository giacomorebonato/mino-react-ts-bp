import { observable, action } from 'mobx'

class NotificationsStore implements INotificationStore {
	@observable
	notifications: Array<INotification> = []

	@action('CREATE_NOTIFICATION')
	createNotification (text: string, type: NotificationType = NotificationType.SUCCESS) {
		const notification = { text, type }

		this.notifications.push(notification)
		setTimeout(() => {
			this.deleteNotification(notification)
		}, 5000)
	}

	@action('DELETE_NOTIFICATION')
	deleteNotification (notification: INotification) {
		this.notifications = this.notifications.filter((not: INotification) => {
			return not !== notification
		})
	}
}

export interface INotificationStore {
	createNotification (text: string, type?: NotificationType): void
	deleteNotification (notification: INotification): void
	notifications: INotification[]
}

export interface INotification {
	text: string,
	type: NotificationType
}

export enum NotificationType {
	SUCCESS,
	WARNING,
	ALERT
}

export default NotificationsStore
