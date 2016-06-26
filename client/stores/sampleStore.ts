import { observable, action } from 'mobx'

class SampleStore {
	@observable
	title: 'Welcome to my BP!'
}

export default new SampleStore()
