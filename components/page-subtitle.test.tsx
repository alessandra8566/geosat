import { render, screen } from '@testing-library/react'
import PageSubTitle from './page-subtitle'

describe('PageSubtitle Component', () => {
  const mockTitle = 'Hello *World* Test'
  it('應該正確解析標題並為帶有星號的單字應用粗體樣式', () => {
    render(<PageSubTitle title={mockTitle} />)

    // 檢查 "Hello" 是否為輕量字體
    const normalWord = screen.getByText('Hello')
    expect(normalWord).toHaveClass('font-light')

    // 檢查 "World" (已去星號) 是否為中等粗體
    const boldWord = screen.getByText('World')
    expect(boldWord).toHaveClass('font-medium')
    expect(boldWord).not.toHaveTextContent('*World*')
  })
})
