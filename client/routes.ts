import ReactRouter = require('react-router')
import Root from './Root'
import Dashboard from './Dashboard'

export default {
	path: '/',
	component: Root,
	indexRoute: {
		component: Dashboard
	},
	childRoutes: []
}
