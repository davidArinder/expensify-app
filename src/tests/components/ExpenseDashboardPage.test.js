import React from 'react'
import { shallow } from 'enzyme'  // library to render components in test; shallow won't render full DOM
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should render Header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})