import { observable, action } from 'mobx'
import objectAssign = require('object-assign')

class SampleStore {
	constructor () {
		if (window['data']) {
			let data = window['data'] as any

			if (data.sampleStore) {
				this.setData(data.sampleStore)
			}
		}
	}

	@observable title = 'Welcome to my BP!'

	@action('CHANGE_TITLE')
	setData (data) {
		objectAssign(this, data)
	}

	changeTitle = action((title: string) => {
		this.title = title
	})
}

export default SampleStore
