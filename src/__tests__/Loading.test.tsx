import { render, screen } from '@testing-library/react'
import { Loading, LoadingAttribute } from '@/components/Loading'
import { customTestId } from '@/__mock__/testid'
import React from 'react'
import { attributeMap } from '@/util/mapping'

describe('Loading Component', () => {
  it('render without crash', () => {
    render(<Loading />)
    expect(screen.getByTestId(customTestId.loadingSvg)).toBeInTheDocument()
  })

  it('render the circle element with correct attributes', () => {
    render(<Loading />)
    const circle = screen
      .getByTestId(customTestId.loadingSvg)
      .querySelector('circle')
    Object.entries(LoadingAttribute.circle).forEach(([key, value]) => {
      // React attribute 和實際 Render 到 HTML DOM 結構上有些會不一樣
      expect(circle).toHaveAttribute(attributeMap[key] || key, value)
    })
  })

  it('render the path element', () => {
    render(<Loading />)
    const path = screen
      .getByTestId(customTestId.loadingSvg)
      .querySelector('path')

    Object.entries(LoadingAttribute.path).forEach(([key, value]) => {
      expect(path).toHaveAttribute(attributeMap[key] || key, value)
    })
  })

  it('render animation', () => {
    render(<Loading />)
    expect(screen.getByTestId(customTestId.loadingSvg)).toHaveClass(
      ...LoadingAttribute.svg.className.split(' ')
    )
  })
})
