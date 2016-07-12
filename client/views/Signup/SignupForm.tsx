import React = require('react')
import { observer } from 'mobx-react'
import { Button, FormHelpers } from '../components'
import context from '../../stores'

const { FormGroup, Input, Label } = FormHelpers

@observer
class SignupForm extends React.Component<any, any> {
	context: {
		stores: typeof context
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}

	render () {
		let { authStore } = this.context.stores
		let { signupForm } = authStore
		let { email, password } = signupForm

		return (
			<form
				className='max-width-2 mx-auto'
				onSubmit={(e: Event) => {
					e.preventDefault()
					authStore.signup(email, password)
				}}
			>
				<FormGroup>
					<Label>Email</Label>
					<Input
						onChange={(e: Event) => {
							const input = e.target as HTMLInputElement
							authStore.changeSignupEmail(input.value)
						}}
						type='email'
						value={email}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Password</Label>
					<Input
						type='password'
						onChange={(e: Event) => {
							const input = e.target as HTMLInputElement
							authStore.changeSignupPassword(input.value)
						}}
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

export default SignupForm
