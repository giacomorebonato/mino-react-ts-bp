import Root from './views/Root'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Signup from './views/Signup'

export default {
	path: '/',
	component: Root,
	indexRoute: {
		component: Dashboard
	},
	childRoutes: [
		{
			component: Signup,
			path: '/signup'
		},
		{
			component: Login,
			path: '/login'
		}
	]
}
