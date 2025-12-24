import { renderHook } from '@testing-library/react'
import useIsMobile from './use-is-mobile'
import { BREAKPOINTS } from './../constant'

describe('useIsMobile Hook', () => {
  const createMatchMedia =
    (matches: boolean) =>
    (query: string): MediaQueryList => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('當螢幕寬度小於斷點時，應回傳 true', () => {
    // 模擬符合 media query (是手機)
    globalThis.matchMedia = jest.fn().mockImplementation(createMatchMedia(true))

    const { result } = renderHook(() => useIsMobile(BREAKPOINTS.sm))
    expect(result.current).toBe(true)
  })

  it('當螢幕寬度大於斷點時，應回傳 false', () => {
    // 模擬不符合 media query (不是手機)
    globalThis.matchMedia = jest.fn().mockImplementation(createMatchMedia(false))

    const { result } = renderHook(() => useIsMobile(BREAKPOINTS.sm))
    expect(result.current).toBe(false)
  })
})
