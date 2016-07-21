import firebase = require('firebase')

let config = {
	apiKey: 'AIzaSyC7df3s4ixJwraA11baGRwBTbgdqFgEoco',
	authDomain: 'to-do-list-3210f.firebaseapp.com',
	databaseURL: 'https://to-do-list-3210f.firebaseio.com',
	storageBucket: 'gs://to-do-list-3210f.appspot.com/'
}
firebase.initializeApp(config)

export default firebase
