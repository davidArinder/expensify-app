import React from 'react'
import { shallow } from 'enzyme'  // library to render components in test; shallow won't render full DOM
import NotFoundPage from '../../components/NotFoundPage'

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})