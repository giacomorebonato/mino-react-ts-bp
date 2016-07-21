import React = require('react')
import { connect } from '../../lib/ContextProvider'
const { Link } = require('react-toolbox/lib/link')


class LinkContainer extends React.Component<ILinkContainerProps, any> {
	render () {
		const { children, icon, router, to } = this.props

		return (
			<Link
				onClick={(e: Event) => {
					e.preventDefault()
					router.push(to)
				}}
				active={window.location.pathname === to}
				href={to}
				icon={icon}
				label={children}
			/>
		)
	}
}

interface ILinkContainerProps {
	icon?: string
	children?: Node
	location?: Location
	to: string,
	router?: any
}

export default connect<ILinkContainerProps>(LinkContainer)
