import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) ?? 'zh'
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }
  const namespaces = ['common', 'about', 'book-demo', 'product', 'solutions']
  const messages = {}
  for (const ns of namespaces) {
    try {
      const mod = await import(`../../messages/${locale}/${ns}.json`)
      ;(messages as any)[ns] = mod.default
    } catch (e) {
      console.warn(`找不到語系檔: ${locale}/${ns}.json`)
    }
  }

  return {
    locale,
    messages,
  }
})
