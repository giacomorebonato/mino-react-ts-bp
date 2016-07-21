import * as React from 'react'
import { IStores } from '../../stores'
import { Link } from 'react-router'
import { connect } from '../../lib/ContextProvider'
const { Button, Input } = require('react-toolbox')

class LoginForm extends React.Component<{stores: IStores}, any> {
	render () {
		let { authStore } = this.props.stores
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
				<legend>Login</legend>
				<Input
					name='Email'
					label='Email'
					onChange={(value: string) => {
						authStore.changeLoginEmail(value)
					}}
					type='email'
					value={email}
				/>
				<Input
					name='Password'
					label='Password'
					onChange={(value: string) => {
						authStore.changeLoginPassword(value)
					}}
					type='password'
					value={password}
				/>
				<Button raised={true} primary={true}>Submit</Button>

				<Link to='/signup'>
					<Button>Signup</Button>
				</Link>
			</form>
		)
	}
}

export default connect(LoginForm)
