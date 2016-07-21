import React = require('react')
import { connect } from '../../lib/ContextProvider'
import { History, Location } from '~react-router~history/history'
const { Link } = require('react-toolbox')


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
	router?: History
}

export default connect<ILinkContainerProps>(LinkContainer)
