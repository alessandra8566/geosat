import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Footer from './footer'
import React from 'react'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mock routing Link (確保 i18n routing 正常運作)
jest.mock('@/lib/i18n/routing', () => ({
  Link: ({ children, href, onClick, className }: any) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault()
        onClick?.(e)
      }}
      className={className}
    >
      {children}
    </a>
  ),
}))

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

let isMenuOpen = false
let mockOnOpenChange: (open: boolean) => void
jest.mock('@radix-ui/react-dropdown-menu', () => {
  return {
    Root: ({ children, open, onOpenChange }: any) => {
      isMenuOpen = open
      mockOnOpenChange = onOpenChange
      return (
        <div data-testid="dropdown-root" data-open={open}>
          {children}
        </div>
      )
    },
    Trigger: ({ children }: any) => {
      // 這裡不渲染任何 <div> 或 <button>，避免 HTML 嵌套錯誤與 Sonar 警告
      if (React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
          'data-testid': 'dropdown-trigger',
          onClick: (e: React.MouseEvent) => {
            ;(children.props as any).onClick?.(e)
            mockOnOpenChange?.(true)
          },
        })
      }
      // 如果 children 不是 React 元素（雖然機率很低），才回傳一個基本的 fragment
      return <>{children}</>
    },
    Portal: ({ children }: any) => <>{children}</>,
    Content: ({ children }: any) => isMenuOpen && <div data-testid="dropdown-content">{children}</div>,
    Item: ({ children, onClick, className }: any) => (
      <div
        data-testid="dropdown-item"
        onClick={(e) => {
          onClick?.(e)
          mockOnOpenChange(false)
        }}
        className={className}
        role="menuitem"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick?.(e)
            mockOnOpenChange(false)
          }
        }}
      >
        {children}
      </div>
    ),
    Arrow: () => <div />,
  }
})

describe('Footer 組件', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(usePathname as any).mockReturnValue('/')
  })

  it('應該正確渲染 Logo 與基本聯絡資訊', () => {
    render(<Footer />)
    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText(/Geosat@geosat.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Copyright ©2025/i)).toBeInTheDocument()
  })

  it('當點擊產品選單時，應該顯示下拉內容 (Dropdown)，點擊項目後關閉選單', async () => {
    render(<Footer />)
    // 點擊打開選單
    const productMenu = screen.getByText('nav.product')
    fireEvent.click(productMenu)
    // 檢查下拉選單內容是否顯示
    const productItem = await screen.findByText('GEOSAT 2.5 PREMIUM')
    expect(productItem).toBeInTheDocument()
    expect(screen.getByText('GEOSAT 2.0')).toBeInTheDocument()
    // 點擊選單項目後應該關閉選單及overlay
    fireEvent.click(productItem)
    await waitFor(() => {
      expect(screen.queryByText('GEOSAT 2.5 PREMIUM')).not.toBeInTheDocument()
    })
  })
  it('當點擊 overlay 時，應該關閉下拉選單 (Dropdown)', async () => {
    render(<Footer />)
    // 點擊打開選單
    const productMenu = screen.getByText('nav.product')
    fireEvent.click(productMenu)
    // 確認下拉選單內容及overlay顯示
    expect(await screen.findByText('GEOSAT 2.5 PREMIUM')).toBeInTheDocument()
    const overlay = screen.getByTestId('footer-overlay')
    expect(overlay).toBeInTheDocument()

    // 點擊 overlay 關閉選單
    fireEvent.click(overlay)
    await waitFor(() => {
      expect(screen.queryByText('GEOSAT 2.5 PREMIUM')).not.toBeInTheDocument()
      expect(screen.queryByTestId('footer-overlay')).not.toBeInTheDocument()
    })
  })
})
