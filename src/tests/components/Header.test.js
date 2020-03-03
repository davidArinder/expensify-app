import React from 'react'
import { shallow } from 'enzyme'  // library to render components in test; shallow won't render full DOM
import { Header } from '../../components/Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />)
    expect(wrapper).toMatchSnapshot()
})