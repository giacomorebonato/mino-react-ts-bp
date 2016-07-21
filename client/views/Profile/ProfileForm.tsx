import React = require('react')

class ProfileForm extends React.Component<any, any> {
	render () {
		return (
			<form
				className='max-width-2 mx-auto'
				onSubmit={(e: Event) => {
					e.preventDefault()
				}}
			>
				<Input
					label='Display name'
					onChange={(e: { target: HTMLInputElement }) => {

					}}
					type='text'
				/>
				<Button theme='primary'>Save</Button>
			</form>
		)
	}
}

export default ProfileForm
