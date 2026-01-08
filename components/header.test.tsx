import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Header from './header'
import { usePathname } from 'next/navigation'
import useIsMobile from '@/utils/hooks/use-is-mobile'
import React from 'react'
import { useLocale } from 'next-intl'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('@/lib/i18n/routing', () => ({
  Link: ({
    children,
    href,
    onClick,
    className,
  }: React.PropsWithChildren<{
    href: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
    className?: string
  }>) => (
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
  useLocale: jest.fn(),
}))

jest.mock('@/utils/hooks/use-is-mobile', () => jest.fn(() => false))

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

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(usePathname as jest.Mock).mockReturnValue('/')
  })

  // --- 視覺渲染測試 ---
  describe('桌面版 (Desktop)', () => {
    beforeEach(() => {
      ;(useIsMobile as jest.Mock).mockReturnValue(false)
    })
    it('應該正確渲染 Logo 和導航選單', () => {
      render(<Header />)
      expect(screen.getByAltText('logo')).toBeInTheDocument()
      expect(screen.getByText('nav.home')).toBeInTheDocument()
      expect(screen.getByText('nav.product')).toBeInTheDocument()
      expect(screen.getByText('nav.solutions')).toBeInTheDocument()
      expect(screen.getByText('nav.about')).toBeInTheDocument()
    })

    it('當點擊產品選單時，應該顯示下拉內容 (Dropdown)，點擊項目後關閉選單', async () => {
      render(<Header />)
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
      render(<Header />)
      // 點擊打開選單
      const productMenu = screen.getByText('nav.product')
      fireEvent.click(productMenu)
      // 確認下拉選單內容及overlay顯示
      expect(await screen.findByText('GEOSAT 2.5 PREMIUM')).toBeInTheDocument()
      const overlay = screen.getByTestId('header-overlay')
      expect(overlay).toBeInTheDocument()

      // 點擊 overlay 關閉選單
      fireEvent.click(overlay)
      await waitFor(() => {
        expect(screen.queryByText('GEOSAT 2.5 PREMIUM')).not.toBeInTheDocument()
        expect(screen.queryByTestId('header-overlay')).not.toBeInTheDocument()
      })
    })
  })

  describe('行動版 (Mobile)', () => {
    beforeEach(() => {
      ;(useIsMobile as jest.Mock).mockReturnValue(true)
    })
    it('應該預設隱藏手機版選單，點擊hamburger按鈕後顯示/關閉', () => {
      render(<Header />)
      const menuButton = screen.getByTestId('mobile-hamburger')
      fireEvent.click(menuButton)
      expect(screen.getByText('nav.home')).toBeInTheDocument()
      expect(screen.getByText('nav.product')).toBeInTheDocument()
      expect(screen.getByTestId('mobile-menu')).toHaveClass('translate-x-0')
      // 再次點擊關閉選單
      fireEvent.click(menuButton)
      expect(screen.getByTestId('mobile-menu')).toHaveClass('translate-x-full')
    })
    it('點擊手機版選單中的home頁面應該跳轉及關閉選單', () => {
      render(<Header />)
      fireEvent.click(screen.getByTestId('mobile-hamburger'))
      fireEvent.click(screen.getByText('nav.home'))
      expect(screen.getByTestId('mobile-menu')).toHaveClass('translate-x-full')
    })
    it('點擊手機版選單中的產品頁面應該展開子選單，點擊子選單項目後關閉選單', () => {
      render(<Header />)
      fireEvent.click(screen.getByTestId('mobile-hamburger'))
      // 點擊產品選單展開子選單
      fireEvent.click(screen.getByText('nav.product'))
      expect(screen.queryByText('GEOSAT 2.5 PREMIUM')).toBeInTheDocument()

      // 點擊子選單項目後關閉整個選單
      fireEvent.click(screen.getByText('GEOSAT 2.5 PREMIUM'))
      expect(screen.getByTestId('mobile-menu')).toHaveClass('translate-x-full')
    })
    it('點擊Book Demo後，關閉選單', () => {
      render(<Header />)
      fireEvent.click(screen.getByTestId('mobile-hamburger'))
      fireEvent.click(screen.getByText('nav.book-demo'))
      expect(screen.getByTestId('mobile-menu')).toHaveClass('translate-x-full')
    })
  })

  // --- 邏輯測試 ---
  it('應該根據當前路徑正確標記選中的導航項目', () => {
    ;(useLocale as jest.Mock).mockReturnValue('en')
    ;(usePathname as jest.Mock).mockReturnValue('/en/solutions')
    render(<Header />)
    expect(screen.getByText('nav.solutions')).toHaveClass('font-extrabold', 'underline')
  })
})
