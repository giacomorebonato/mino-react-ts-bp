import test from 'ava'
import enzyme = require('enzyme')
import * as React from 'react'
import { Root } from '../Root'
import './setup'

const { shallow } = enzyme

test((t) => {
	const wrapper = shallow(<Root />)

	t.is(wrapper.find('div').length, 1)
})
