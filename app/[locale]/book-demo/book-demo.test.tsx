import { render } from '@testing-library/react'
import BookDemo from './page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

jest.mock('@/lib/api/email', () => ({
  apiSendBookDemoEmail: jest.fn(),
}))
jest.mock('@/components/page-title')

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  })

const renderWithClient = (ui: React.ReactElement) => {
  const queryClient = createTestQueryClient()
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  )
}

describe('BookDemo Page', () => {
  it('應該正確渲染頁面標題', () => {
    renderWithClient(<BookDemo />)
  })
})
