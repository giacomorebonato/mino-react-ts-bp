import { observable, action } from 'mobx'
import objectAssign = require('object-assign')
import firebase from '../firebase'
import { INotificationStore } from './NotificationsStore'

class AuthStore {
	constructor (notificationsStore: INotificationStore, data?: any) {
		this.notificationsStore = notificationsStore

		if (data) {
			this.setData(data)
		}

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setTimeout(() => {
					this.setUser(user)
				}, 1)
			}
		})
	}

	notificationsStore: INotificationStore

	@observable
	user: firebase.User

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
	setUser (user: firebase.User) {
		this.user = user
	}

	logout () {
		this.setUser(null)
		const auth = firebase.auth()
		auth.signOut()
	}

	signup (email: string, password: string) {
		const auth = firebase.auth()

		auth.createUserWithEmailAndPassword(email, password).then((user) => {
			this.notificationsStore.createNotification('User registered', 'SUCCESS')
		})
		.catch((err: Error) => {
			this.notificationsStore.createNotification(err.message, 'WARNING')
		})
	}

	signin (email: string, password: string) {
		const auth = firebase.auth()
		auth.signInWithEmailAndPassword(email, password).then((user) => {
			this.notificationsStore.createNotification('Login successful', 'SUCCESS')
		})
		.catch((err) => {
			this.notificationsStore.createNotification('Credentials error', 'WARNING')
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
