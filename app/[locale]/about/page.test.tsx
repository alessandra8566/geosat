import { render, screen } from '@testing-library/react'
import About from './page'

jest.mock('@/components/page-title')
jest.mock('@/components/product-main')
jest.mock('@/utils/hooks/use-is-mobile', () => jest.fn(() => false))

describe('About Page', () => {
  it('應該正確渲染頁面大標題', () => {
    render(<About />)
    expect(screen.getByTestId('page-title')).toHaveTextContent('*ABOUTS*')
  })

  it('應該渲染主視覺圖片與正確的 Alt 文字', () => {
    render(<About />)
    const mainImg = screen.getByAltText('About Main')
    expect(mainImg).toBeInTheDocument()
    expect(mainImg).toHaveAttribute('src', '/about_main_01.png')
  })
})
