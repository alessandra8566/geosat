'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/shadcn'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 text-[15px] leading-1.1em py-2 font-light cursor-pointer text-white hover:underline hover:font-bold focus:underline focus:outline-none'
)

const headerRoutes = [
  { title: 'HOME', path: '/' },
  {
    title: 'PRODUCT',
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
  { title: 'SOLUTIONS', path: '/solutions' },
  { title: 'ABOUT', path: '/about' },
]

const Navbar = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      {isOverlayOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOverlayOpen(false)} />}
      <header className="border-gradient-header-bottom sticky top-0 z-50 flex h-20 items-center justify-between bg-black px-14 py-2">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={95} height={29} />
        </Link>
        <div className="flex grow items-center justify-end gap-4">
          <ul className="flex">
            {headerRoutes.map((route, index) => {
              if (!!route.children) {
                return (
                  <li key={index}>
                    <DropdownMenu.Root onOpenChange={setOverlayOpen} open={isOverlayOpen}>
                      <DropdownMenu.Trigger asChild>
                        <button
                          className={cn(navigationMenuTriggerStyle(), {
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
                  </li>
                )
              }
              return (
                <li key={index}>
                  <Link
                    href={route.path}
                    className={cn(navigationMenuTriggerStyle(), {
                      'font-bold underline': pathname === route.path,
                    })}
                  >
                    {route.title}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link href="/book-demo">
            <Button size="lg" className="bg-primary tracking-1 cursor-pointer px-4 py-3 text-white">
              BOOK DEMO
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar
