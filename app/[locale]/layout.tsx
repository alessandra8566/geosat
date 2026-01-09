import Image from 'next/image'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Roboto_Flex, Roboto } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

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
            <div className="mx-auto max-w-360">
              <Navbar />
              {children}
              <Footer />
            </div>
            <Toaster
              position="top-center"
              style={
                {
                  '--normal-bg': 'black',
                  '--normal-text': '#FFFFFF80D9',
                  '--normal-border': '#FFFFFF80',
                  '--border-radius': 'var(--radius)',
                } as React.CSSProperties
              }
              icons={{
                success: <Image src="/icons/check_circle_success.svg" alt="SuccessIcon" width={16} height={16} />,
                error: <Image src="/icons/check_circle_fail.svg" alt="ErrorIcon" width={16} height={16} />,
              }}
            />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
