import { observable, action } from 'mobx'
import objectAssign = require('object-assign')
import Firebase = require('firebase')
import { INotificationStore, NotificationType } from './NotificationsStore'

class AuthStore {
	constructor (notificationsStore: INotificationStore, data?: any) {
		this.notificationsStore = notificationsStore

		if (data) {
			this.setData(data)
		} else if (window['data']) {
			let wData = window['data'] as any

			if (wData.sampleStore) {
				this.setData(wData.authStore)
			}
		}
	}

	notificationsStore: INotificationStore

	@observable
	user: Firebase.User

	@observable
	signupForm: ISignupForm = {
		email: '',
		password: ''
	}

	@observable
	loginForm: ILoginForm = {
		email: '',
		password: ''
	}

	@action('CHANGE_LOGIN_EMAIL')
	changeLoginEmail (email: string) {
		this.loginForm.email = email
	}

	@action('CHANGE_LOGIN_PASSWORD')
	changeLoginPassword (password: string) {
		this.loginForm.password = password
	}

	@action('CHANGE_SIGNUP_EMAIL')
	changeSignupEmail (email: string) {
		this.signupForm.email = email
	}

	@action('CHANGE_SIGNUP_PASSWORD')
	changeSignupPassword (password: string) {
		this.signupForm.password = password
	}

	@action('SET_AUTH_DATA')
	setData (data) {
		objectAssign(this, data)
	}

	@action('SET_USER')
	setUser (user: Firebase.User) {
		this.user = user
	}

	signup (email: string, password: string) {
		const auth = Firebase.auth()

		auth.createUserWithEmailAndPassword(email, password).then((user) => {
			this.notificationsStore.createNotification('User registered')
		})
		.catch((err: Error) => {
			this.notificationsStore.createNotification(err.message, NotificationType.WARNING)
		})
	}

	signin (email: string, password: string) {
		const auth = Firebase.auth()
		auth.signInWithEmailAndPassword(email, password).then((user) => {
			this.setUser(user)
			this.notificationsStore.createNotification('Login successful')
		})
		.catch((err) => {
			this.notificationsStore.createNotification('Credentials error', NotificationType.WARNING)
		})
	}
}

interface ISignupForm {
	email: string,
	password: string
}

interface ILoginForm {
	email: string,
	password: string
}

export default AuthStore
