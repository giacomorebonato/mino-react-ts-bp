import Root from './views/Root'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Profile from './views/Profile'
import Signup from './views/Signup'
import Logout from './views/components/Logout'

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
		},
		{
			component: Profile,
			path: '/profile'
		},
		{
			component: Logout,
			path: '/logout'
		}
	]
}
