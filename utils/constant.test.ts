import * as constant from './constant'

describe('斷點常數確認', () => {
  it('應該包含所有預期的斷點定義', () => {
    const expectedKeys = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl']
    expect(Object.keys(constant.BREAKPOINTS)).toEqual(expectedKeys)
  })
  it('BREAKPOINTS 物件應該與獨立導出的常數一致', () => {
    expect(constant.BREAKPOINTS.sm).toBe(constant.BREAKPOINT_SM)
    expect(constant.BREAKPOINTS.md).toBe(constant.BREAKPOINT_MD)
    expect(constant.BREAKPOINTS.lg).toBe(constant.BREAKPOINT_LG)
    expect(constant.BREAKPOINTS.xl).toBe(constant.BREAKPOINT_XL)
    expect(constant.BREAKPOINTS['2xl']).toBe(constant.BREAKPOINT_2XL)
    expect(constant.BREAKPOINTS['3xl']).toBe(constant.BREAKPOINT_3XL)
    expect(constant.BREAKPOINTS['4xl']).toBe(constant.BREAKPOINT_4XL)
    expect(constant.BREAKPOINTS['5xl']).toBe(constant.BREAKPOINT_5XL)
    expect(constant.BREAKPOINTS['6xl']).toBe(constant.BREAKPOINT_6XL)
    expect(constant.BREAKPOINTS['7xl']).toBe(constant.BREAKPOINT_7XL)
    expect(constant.BREAKPOINTS['8xl']).toBe(constant.BREAKPOINT_8XL)
    expect(constant.BREAKPOINTS['9xl']).toBe(constant.BREAKPOINT_9XL)
    expect(constant.BREAKPOINTS['10xl']).toBe(constant.BREAKPOINT_10XL)
  })
})
