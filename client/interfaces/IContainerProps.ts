import context from '../stores'
import { IRouterProps } from 'react-router'

interface IContainerProps extends IRouterProps {
	children?: any
	stores: typeof context
	styles: Object
}

export default IContainerProps
