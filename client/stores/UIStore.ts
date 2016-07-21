import { observable, action } from 'mobx'
import objectAssign = require('object-assign')

class UIStore {
	constructor (data?) {
		if (data) {
			this.setData(data)
		}
	}

	@observable
	isMenuOpen = false

	@action('SET_UI_DATA')
	setData (data) {
		objectAssign(this, data)
	}

	@action('TOGGLE_PINNED_SIDEBAR')
	toggleMenuOpen () {
		this.isMenuOpen = !this.isMenuOpen
	}

	@action('CLOSE_MENU')
	closeMenu () {
		this.isMenuOpen = false
	}

	@action('OPEN_MENU')
	openMenu () {
		this.isMenuOpen = true
	}
}

export default UIStore
