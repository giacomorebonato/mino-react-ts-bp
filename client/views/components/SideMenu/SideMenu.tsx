import React = require('react')
import { Link } from 'react-router'
import { Overlay } from '../index'
import context from '../../../stores'
const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const styles = require('./sideMenu.css')
const CSS = require('react-css-modules')

class SideMenu extends React.Component<ISideMenuProps, any> {
	context: {
		stores: typeof context
	}
	static contextTypes = {
		stores: React.PropTypes.object
	}

	render () {
		return (
			<div>
				<Overlay
					onClick={() => {
						this.context.stores.uiStore.toggleSideMenu()
					}}
					show={this.props.show}
				/>
				<ReactCSSTransitionGroup
					transitionName='sidemenu'
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{
						this.props.show ?
							<div
								key='sidemenu'
								styleName='sidemenu'
								className='fixed bg-white flex bottom-0 border-right p1 divider-color sidemenu'
								style={{width: this.props.width}}
							>
								<ul className='list-reset width-100'>
									{
										this.props.options.map((option, i) => {
											return (
												<li key={i}>
													<Link
														activeClassName='accent-color text-primary-color'
														className='text-decoration-none secondary-text-color pl2 pr2 pt1 pb1 mt1 flex items-center width-100 border-box rounded mr1'
														to={option.url}>
														<i className='material-icons mr2'>{option.icon}</i>
														<span>{option.text}</span>
													</Link>
												</li>
											)
										})
									}
								</ul>
							</div> : null
					}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}



export default CSS(SideMenu, styles)

interface ISideMenuProps {
	options: Array<ISideMenuOptions>,
	width: any,
	show: boolean
}

interface ISideMenuOptions {
	icon: string
	url: string
	text: string
}
