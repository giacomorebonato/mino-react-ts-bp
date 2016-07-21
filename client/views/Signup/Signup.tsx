import React = require('react')
import { Container } from 'rebass'
import SignupForm from './SignupForm'

class Signup extends React.Component<any, any> {
	render () {
		return (
			<Container>
				<SignupForm />
			</Container>
		)
	}
}

export default Signup
