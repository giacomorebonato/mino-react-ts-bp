import React = require('react')
import { IStores } from '../../stores'
import { Link } from 'react-router'
import { connect } from '../../lib/ContextProvider'
const { Button, Input } = require('react-toolbox')

class SignupForm extends React.Component<{stores: IStores}, any> {
	render () {
		let { authStore } = this.props.stores
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
				<legend>Signup</legend>
				<Input
					label='Email'
					name='email'
					onChange={(value: string) => {
						authStore.changeSignupEmail(value)
					}}
					type='email'
					value={email}
				/>
				<Input
					name='password'
					label='Password'
					type='password'
					onChange={(value: string) => {
						authStore.changeSignupPassword(value)
					}}
					value={password}
				/>
				<Button raised={true} primary={true}>Submit</Button>
				<Link to='/login'>
					<Button>Login</Button>
				</Link>
			</form>
		)
	}
}

export default connect(SignupForm)
