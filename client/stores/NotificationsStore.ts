import { observable, action } from 'mobx'

class NotificationsStore implements INotificationStore {
	@observable
	notification: INotification = {
		text: '',
		type: 'DEFAULT'
	}

	@observable
	isSnackbarVisible: boolean = false

	timeout: NodeJS.Timer

	@action('SHOW_SNACKBAR')
	showSnackbar () {
		this.isSnackbarVisible = true
	}

	@action('HIDE_SNACKBAR')
	hideSnackbar () {
		this.isSnackbarVisible = false
	}

	@action('CREATE_NOTIFICATION')
	createNotification (text: string, type: NotificationType = 'DEFAULT') {
		this.notification = { text, type }

		if (typeof this.timeout === 'number') {
			clearTimeout(this.timeout)
		}

		if (!this.isSnackbarVisible) {
			this.showSnackbar()
		}

		this.timeout = setTimeout(() => {
			this.hideSnackbar()
		}, 4000)
	}

	@action('DELETE_NOTIFICATION')
	deleteNotification (notification: INotification) {
		this.notification = null
	}
}

export interface INotificationStore {
	createNotification (text: string, type?: NotificationType): void
	deleteNotification (notification: INotification): void
	notification: INotification
}

export interface INotification {
	text: string,
	type: NotificationType
}

type NotificationType = 'DEFAULT' | 'SUCCESS' | 'WARNING' | 'ALERT'

export default NotificationsStore
