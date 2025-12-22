import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Roboto_Flex, Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '@/components/providers'

const robotoFontSemiCondensed = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  axes: ['wdth'],
})
const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Geosat Jingwei',
  description: 'Geosat Jingwei Official Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${robotoFontSemiCondensed.variable} ${robotoFont.variable} bg-background text-foreground`}>
        <NextIntlClientProvider>
          <Providers>
            <div className="mx-auto max-w-[1440px]">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
