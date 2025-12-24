import { render, screen } from '@testing-library/react'
import ProductMain from './product-main'

describe('ProductMain 組件', () => {
  const mockSpecs = [
    { title: 'Spec 1', description: 'Desc 1' },
    { title: 'Spec 2', description: 'Desc 2' },
    { title: 'Spec 3', description: 'Desc 3' },
    { title: 'Spec 4', description: 'Desc 4' },
  ]

  const defaultProps = {
    src: '/test-product.png',
    specs: mockSpecs,
  }

  it('應該正確渲染主產品圖片', () => {
    render(<ProductMain {...defaultProps} />)
    const img = screen.getByAltText('Main Product')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/test-product.png')
  })

  it('應該渲染所有傳入的規格 (specs)', () => {
    render(<ProductMain {...defaultProps} />)
    for (const spec of mockSpecs) {
      expect(screen.getByText(spec.title)).toBeInTheDocument()
      expect(screen.getByText(spec.description)).toBeInTheDocument()
    }
  })
})
