import Root from './views/Root'
import Dashboard from './views/Dashboard'

export default {
	path: '/',
	component: Root,
	indexRoute: {
		component: Dashboard
	},
	childRoutes: []
}
