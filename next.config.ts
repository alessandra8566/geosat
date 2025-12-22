import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
}
const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')
export default withNextIntl(nextConfig)
