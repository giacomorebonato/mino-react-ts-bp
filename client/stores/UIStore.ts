import { observable, action } from 'mobx'
import objectAssign = require('object-assign')

class UIStore {
	constructor (data?) {
		if (data) {
			this.setData(data)
		}

		if (window['data']) {
			let wData = window['data'] as any

			if (wData.sampleStore) {
				this.setData(wData.uiStore)
			}
		}
	}

	@observable
	isSideMenuVisible = false

	@action('SET_UI_DATA')
	setData (data) {
		objectAssign(this, data)
	}

	@action('TOGGLE_SIDE_MENU')
	toggleSideMenu () {
		this.isSideMenuVisible = !this.isSideMenuVisible
	}
}

export default UIStore
