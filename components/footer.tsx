'use client'

import { Link } from '@/lib/i18n/routing'
import Image from 'next/image'
import { cn } from '@/utils/shadcn'
import { cva } from 'class-variance-authority'
import { usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const footerRoutes = [
  { title: 'nav.home', path: '/' },
  {
    title: 'nav.product',
    path: '/product',
    children: [
      {
        title: 'GEOSAT 2.5 PREMIUM',
        path: '/product/geosat-2.5-premium',
      },
      {
        title: 'GEOSAT 2.0',
        path: '/product/geosat-2.0',
      },
      {
        title: 'GEOSAT 10 MR',
        path: '/product/geosat-10-mr',
      },
      {
        title: 'GEOSAT 10 EV',
        path: '/product/geosat-10-ev',
      },
      {
        title: 'GEOSAT 15 IH',
        path: '/product/geosat-15-ih',
      },
    ],
  },
  { title: 'nav.solutions', path: '/solutions' },
  { title: 'nav.about', path: '/about' },
  { title: 'nav.book-demo', path: '/book-demo' },
]

const navigationMenuTriggerStyle = cva(
  'group inline-flex w-max items-center justify-center rounded-md p-2 pb-0 cursor-pointer title-h-footer text-white hover:underline focus:underline focus-visible:outline-none'
)

const Footer = () => {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('common')

  return (
    <>
      {overlayOpen && <button data-testid="footer-overlay" className="fixed inset-0 z-40 bg-black/50" aria-label="Close menu" onClick={() => setOverlayOpen(false)} />}
      <div
        className="5xl:h-75 4xl:pt-[77px] 3xl:pt-7.5 5xl:gap-0 relative flex h-auto w-full flex-col justify-between gap-12.5 p-5 pt-10.5 xl:px-15 xl:pb-12"
        style={{
          background: `
          url('/background/footer_bk.png') center center / cover
        `,
        }}
      >
        <Link href="/">
          <Image src="/icons/logo_name.svg" alt="logo" width={120} height={46} quality={100} />
        </Link>
        <div className="item-start 5xl:gap-0 5xl:items-end 5xl:flex-row flex flex-col justify-between gap-4">
          <div className="title-g-footer flex flex-col gap-1 text-white">
            <Image src="/icons/youtube.svg" alt="youtube" width={32} height={23} quality={100} className="mb-3.75" />
            <p>Email: Geosat@geosat.com</p>
            <p>Phone: (+886) 6616-9999</p>
            <p>
              Copyright ©2025 GEOSAT CORPORATION. <br className="xl:hidden" />
              All Rights Reserved.
            </p>
          </div>
          <div className="hidden 2xl:block">
            <ul className="flex flex-wrap">
              {footerRoutes.map((route, index) => {
                if (route.children) {
                  return (
                    <li key={route.title} className="flex items-center justify-between">
                      <DropdownMenu.Root onOpenChange={setOverlayOpen} open={overlayOpen}>
                        <DropdownMenu.Trigger asChild>
                          <button
                            className={cn(navigationMenuTriggerStyle(), 'pb-1 pl-0', {
                              'font-bold underline': pathname.split('/')[1] === route.path.split('/')[1],
                            })}
                          >
                            {t(route.title)}
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content className="z-50 box-content w-50 bg-black text-base text-nowrap text-white/70" sideOffset={22}>
                            {route.children?.map((product) => (
                              <DropdownMenu.Item
                                key={product.title}
                                className={cn(
                                  `hover:border-gradient-dropdown-item-hover relative flex cursor-pointer items-center border border-transparent bg-[#24242499] hover:bg-black/90 hover:text-white focus:outline-none`,
                                  {
                                    'bg-hover-btn border-gradient-card border font-semibold text-white': pathname === product.path,
                                  }
                                )}
                              >
                                <Link href={product.path} className="w-full px-5 py-4" onClick={() => setOverlayOpen(false)}>
                                  {product.title}
                                </Link>
                              </DropdownMenu.Item>
                            ))}
                            <DropdownMenu.Arrow width={16} height={8} fill="var(--primary)" />
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                      <span className="mx-3 mt-1 mr-4 h-4 w-px bg-white" />
                    </li>
                  )
                }
                return (
                  <div key={route.title} className="flex items-center justify-between">
                    <li>
                      <Link
                        href={route.path}
                        className={cn(navigationMenuTriggerStyle(), 'pt-0 pl-0 2xl:pt-2', {
                          'font-bold underline': pathname === route.path,
                        })}
                      >
                        {t(route.title)}
                      </Link>
                    </li>
                    {index !== footerRoutes.length - 1 && <span className="mx-3 mt-1 mr-4 h-4 w-px bg-white" />}
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
