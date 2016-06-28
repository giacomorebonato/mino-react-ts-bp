import React = require('react')
import { observer } from 'mobx-react'
import { sampleStore } from '../stores'
const CSS = require('react-css-modules')
const styles = require('./dashboard.css')

@observer
class Dashboard extends React.Component<any, any> {
	render () {
		let { title } = sampleStore

		return (
			<div>
				<h1 className='p2' styleName='title'>{title}</h1>

				<div>
					<label>Change title</label>
					<input
						type='text'
						onChange={(e: Event) => {
							let input = e.target as HTMLInputElement
							sampleStore.changeTitle(input.value)
						}}
						value={title}
					/>
				</div>
			</div>
		)
	}
}

export default CSS(Dashboard, styles)
