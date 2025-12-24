jest.mock('next-intl/server', () => ({
  // 讓 getRequestConfig 變成一個「傳入什麼就回傳什麼」的透明函式
  getRequestConfig: jest.fn((fn) => fn),
}))

import request from './request'
import { routing } from './routing'

jest.mock('./routing', () => ({
  routing: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
}))

jest.mock('@/messages/zh/common.json', () => ({ nav: { home: '首頁' } }))
jest.mock('@/messages/en/common.json', () => ({ nav: { home: 'Home' } }))

describe('i18n Request', () => {
  it('當 requestLocale 為 "en" 時，應回傳 en 語系與對應訊息', async () => {
    const configResult = await request({ requestLocale: Promise.resolve('en') })
    expect(configResult.locale).toBe('en')
    expect(configResult.messages?.common).toEqual({ nav: { home: 'Home' } })
  })

  it('當 requestLocale 沒有初始值時，應回傳預設語系與對應訊息', async () => {
    const configResult = await request({ requestLocale: Promise.resolve(undefined) })
    expect(configResult.locale).toBe(routing.defaultLocale)
    expect(configResult.messages?.common).toEqual({ nav: { home: 'Home' } })
  })

  it('當 requestLocale 為不支援的語系時，應回傳預設語系與對應訊息', async () => {
    const configResult = await request({ requestLocale: Promise.resolve('fr') })
    expect(configResult.locale).toBe(routing.defaultLocale)
    expect(configResult.messages?.common).toEqual({ nav: { home: 'Home' } })
  })
})
