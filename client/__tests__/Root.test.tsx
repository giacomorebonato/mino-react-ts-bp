import test from 'ava'
import enzyme = require('enzyme')
import React = require('react')
import { Root } from '../Root'
import './setup'

const { shallow } = enzyme

test((t) => {
	const wrapper = shallow(<Root />)

	t.is(wrapper.find('div').length, 1)
})
