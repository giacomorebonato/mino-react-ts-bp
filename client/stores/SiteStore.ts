import { observable, action } from 'mobx'
import objectAssign = require('object-assign')

class SiteStore {
	constructor (data?) {
		if (data) {
			this.setData(data)
		}
	}

	@observable
	title = 'Mino Boilerplate'

	@action('SET_TITLE')
	setTitle (title: string) {
		this.title = title
	}

	@action('SET_SITE_DATA')
	setData (data) {
		objectAssign(this, data)
	}
}

export default SiteStore
