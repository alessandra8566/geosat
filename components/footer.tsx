'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils/shadcn'
import { cva } from 'class-variance-authority'
import { usePathname } from 'next/navigation'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'

const footerRoutes = [
  { title: 'Home', path: '/' },
  {
    title: 'Product',
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
  { title: 'Solutions', path: '/solutions' },
  { title: 'About', path: '/about' },
  { title: 'Book Demo', path: '/book-demo' },
]

const navigationMenuTriggerStyle = cva(
  'group inline-flex w-max items-center justify-center rounded-md p-2 pb-0 font-bold cursor-pointer text-lg leading-1em tracking-1 text-white hover:underline focus:underline'
)

const Footer = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      {isOverlayOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOverlayOpen(false)} />}
      <div
        className="relative flex h-75 w-full flex-col justify-between px-15 pt-[77px] pb-12"
        style={{
          background: `
          url('/background/footer_bk.png') center center / cover
        `,
        }}
      >
        <Link href="/" className="text-primary cursor-pointer text-xl font-bold tracking-tight">
          <Image src="/icons/logo_name.svg" alt="logo" width={120} height={46} />
        </Link>
        <div className="flex items-end justify-between">
          <div className="tracking-1 text-sm text-white">
            <Image src="/icons/youtube.svg" alt="logo" width={32} height={23} className="mb-[15px]" />
            <p className="leading-1.3em">Email: Geosat@geosat.com</p>
            <p className="leading-1.3em">Phone: (+886) 6616-9999</p>
            <p className="leading-1.3em">Copyright ©2025 GEOSAT CORPORATION. All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex">
              {footerRoutes.map((route, index) => {
                if (!!route.children) {
                  return (
                    <li key={index} className="flex items-center justify-between">
                      <DropdownMenu.Root onOpenChange={setOverlayOpen} open={isOverlayOpen}>
                        <DropdownMenu.Trigger asChild>
                          <button
                            className={cn(navigationMenuTriggerStyle(), 'pb-1', {
                              'font-bold underline': pathname.split('/')[1] === route.path.split('/')[1],
                            })}
                          >
                            {route.title}
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content className="z-50 box-content w-50 bg-black text-base text-nowrap text-white/70" sideOffset={22}>
                            {route.children.map((product, sub_index) => (
                              <DropdownMenu.Item
                                key={sub_index}
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
                      <span className="mx-2 mt-1 h-4 w-0.5 bg-white" />
                    </li>
                  )
                }
                return (
                  <div key={index} className="flex items-center justify-between">
                    <li>
                      <Link
                        href={route.path}
                        className={cn(navigationMenuTriggerStyle(), {
                          'font-bold underline': pathname === route.path,
                        })}
                      >
                        {route.title}
                      </Link>
                    </li>
                    {index !== footerRoutes.length - 1 && <span className="mx-2 mt-1 h-4 w-0.5 bg-white" />}
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
