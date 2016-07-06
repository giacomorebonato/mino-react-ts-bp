import { observable, action } from 'mobx'
import objectAssign = require('object-assign')

class SampleStore {
	constructor (data?) {
		if (data) {
			this.setData(data)
			return
		}

		if (window['data']) {
			let wData = window['data'] as any

			if (wData.sampleStore) {
				this.setData(wData.sampleStore)
			}
		}
	}

	@observable
	title = 'Welcome to my BP!'

	@action('SET_DATA')
	setData (data) {
		objectAssign(this, data)
	}

	@action('CHANGE_TITLE')
	changeTitle (title: string) {
		this.title = title
	}
}

export default SampleStore
