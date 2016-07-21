import React = require('react')
import stores from '../../../stores'
import { Link } from 'react-router'
import { observer } from 'mobx-react'
const { Arrow, Dropdown, DropdownMenu, NavItem } = require('rebass')
const { uiStore } = stores

@observer
class Menu extends React.Component<any, any> {
	render () {
		return (
			<Dropdown>
				<NavItem
					onClick={() => {
						uiStore.toggleMenuOpen()
					}}
				>
					Menu <Arrow />
				</NavItem>
				<DropdownMenu
					right
					onDismiss={() => {
						uiStore.toggleMenuOpen()
					}}
					open={uiStore.isMenuOpen}
				>
					<ul className='list-reset'>
						<NavItem is={Link} to='/login'>Login</NavItem>
						<NavItem is={Link} to='/'>Dashboard</NavItem>
					</ul>
				</DropdownMenu>
			</Dropdown>
		)
	}
}

export default Menu
