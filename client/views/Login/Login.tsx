import React = require('react')
import LoginForm from './LoginForm'
import { Container } from 'rebass'

class Login extends React.Component<any, any> {
	render () {
		return (
			<Container>
				<LoginForm />
			</Container>
		)
	}
}

export default Login
