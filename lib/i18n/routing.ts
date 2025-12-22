import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always', // 網址強制顯示語系 (例如 /zh/about)
})

// 導出封裝後的導航工具
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
