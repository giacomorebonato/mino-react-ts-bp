import AuthStore from './AuthStore'
import NotificationsStore from './NotificationsStore'
import SampleStore from './SampleStore'
import UIStore from './UIStore'

const notificationsStore = new NotificationsStore()

const stores = {
	notificationsStore,
	authStore: new AuthStore(notificationsStore),
	sampleStore: new SampleStore(),
	uiStore: new UIStore()
}

export default stores
