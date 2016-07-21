import AuthStore from './AuthStore'
import NotificationsStore from './NotificationsStore'
import SiteStore from './SiteStore'
import UIStore from './UIStore'

export function getStores (data): IStores {
	const notificationsStore = new NotificationsStore()

	const stores = {
		notificationsStore,
		authStore: new AuthStore(notificationsStore, data['authStore']),
		uiStore: new UIStore(),
		siteStore: new SiteStore(data['siteStore'])
	}

	return stores
}

export interface IStores {
	notificationsStore: NotificationsStore
	authStore: AuthStore
	uiStore: UIStore
	siteStore: SiteStore
}
