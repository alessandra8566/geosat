import { render, screen } from '@testing-library/react'
import Geosat15Ih from './page'

jest.mock('@/components/page-title')
jest.mock('@/components/product-main')

describe('Geosat15Ih Page', () => {
  it('應該正確渲染頁面標題、產品主體與描述區塊', () => {
    render(<Geosat15Ih />)
    // 檢查 PageTitle 組件
    expect(screen.getByTestId('page-title')).toBeInTheDocument()
    expect(screen.getByText('*GEOSAT* *15* *IH*')).toBeInTheDocument()
    expect(screen.getByText('Download')).toHaveAttribute('href', '/brochure/geosat-15-ih.pdf')
  })
})
