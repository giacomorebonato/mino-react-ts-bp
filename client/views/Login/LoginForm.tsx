import * as React from 'react'
import { Button, FormHelpers } from '../components'
import { observer } from 'mobx-react'
import context from '../../stores'

const { FormGroup, Input, Label } = FormHelpers

class LoginForm extends React.Component<any, any> {
	context: {
		stores: typeof context
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}

	render () {
		let { authStore } = this.context.stores
		let { loginForm } = authStore
		let { email, password } = loginForm

		return (
			<form
				className='max-width-2 mx-auto'
				onSubmit={(e: Event) => {
					e.preventDefault()
					authStore.signin(email, password)
				}}
			>
				<FormGroup>
					<Label>Email</Label>
					<Input 
						onChange={(e: Event) => {
							const input = e.target as HTMLInputElement
							authStore.changeLoginEmail(input.value)
						}}
						type='email'
						value={email}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input
						onChange={(e: Event) => {
							const input = e.target as HTMLInputElement
							authStore.changeLoginPassword(input.value)
						}}
						type='password'
						value={password}
					/>
				</FormGroup>
				<div className='flex justify-end'>
					<Button>Submit</Button>
				</div>
			</form>
		)
	}
}

export default observer(LoginForm)
