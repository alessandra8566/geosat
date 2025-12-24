import { render, screen } from '@testing-library/react'
import Geosat10Ev from './page'

jest.mock('@/components/page-title')
jest.mock('@/components/product-main')

describe('Geosat10Ev Page', () => {
  it('應該正確渲染頁面標題、產品主體與描述區塊', () => {
    render(<Geosat10Ev />)
    expect(screen.getByTestId('page-title')).toBeInTheDocument()
    expect(screen.getByText('*GEOSAT* *10* *EV*')).toBeInTheDocument()
    expect(screen.getByText('Download')).toHaveAttribute('href', '/brochure/geosat-10-ev.pdf')
  })
})
