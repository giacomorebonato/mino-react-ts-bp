import React = require('react')
import { IStores } from '../../stores'
import { connect } from '../../lib/ContextProvider'
import { Container } from 'rebass'
import LoginCheck from '../components/LoginCheck'
import Dropzone = require('react-dropzone')
import firebase from '../../firebase'

class Profile extends React.Component<{stores: IStores}, any> {
	render () {
		const { stores } = this.props
		return (
			<Container>
				<Dropzone multiple={false} onDrop={onImageDrop(stores)}>
					Profile image
				</Dropzone>
			</Container>
		)
	}
}

function onImageDrop (stores: IStores) {
	const { authStore } = stores

	return (files: File[]) => {
		const storage = firebase.storage().ref()

		files.forEach((file) => {
			storage.child('images/' + authStore.user.uid).put(file)
		})
	}
}

export default connect(LoginCheck(Profile))
