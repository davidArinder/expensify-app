import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow' // library to render components in test; shallow won't render full DOM
import Header from '../../components/Header'

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})