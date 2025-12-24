import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import CommonZh from '@/messages/zh/common.json'
import CommonEn from '@/messages/en/common.json'

const namespacesZh = {
  common: CommonZh,
}


const namespaceEn = {
  common: CommonEn,
}

const messages = {
  zh: namespacesZh,
  en: namespaceEn,
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) ?? 'en'
  if (!locale || !routing.locales.includes(locale as any)) locale = routing.defaultLocale
  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  }
})
