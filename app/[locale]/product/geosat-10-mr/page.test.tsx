import { render, screen } from '@testing-library/react'
import Geosat10Mr from './page'

jest.mock('@/components/page-title')
jest.mock('@/components/product-main')

describe('Geosat10Mr Page', () => {
  it('應該正確渲染頁面標題、產品主體與描述區塊', () => {
    render(<Geosat10Mr />)
    // 檢查 PageTitle 組件
    expect(screen.getByTestId('page-title')).toBeInTheDocument()
    expect(screen.getByText('*GEOSAT* *10* *MR*')).toBeInTheDocument()
    expect(screen.getByText('Download')).toHaveAttribute('href', '/brochure/geosat-10-mr.pdf')
  })
})
