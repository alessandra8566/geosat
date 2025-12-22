'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/shadcn'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NavProps } from '@/utils/type'
import useIsMobile from '@/utils/hooks/use-is-mobile'
import { BREAKPOINTS } from '@/utils/constant'
import { Menu, X } from 'lucide-react'

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 text-15 leading-1.1em py-2 font-light cursor-pointer text-white hover:underline hover:font-bold focus:underline focus:outline-none'
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

const DesktopNav = (props: NavProps) => {
  const { isOverlayOpen, setOverlayOpen } = props
  const pathname = usePathname()
  return (
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
  )
}

const MobileNav = (props: NavProps) => {
  const { isOverlayOpen: isMenuOpen, setOverlayOpen: setMenuOpen } = props
  const pathname = usePathname()

  return (
    <div className="flex items-center">
      {/* Hamburger/Close Button */}
      <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!isMenuOpen)} className="cursor-pointer justify-end text-white hover:bg-transparent!">
        {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      {/* Mobile Menu Overlay */}

      <div
        className={cn(
          'fixed inset-0 top-15 z-40 flex transform flex-col overflow-y-auto bg-black p-4 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {headerRoutes.map((route) => (
          <div key={route.title} className="border-b border-gray-700">
            {route.children ? (
              <details className="py-3">
                <summary
                  className={cn('flex cursor-pointer items-center justify-between py-2 text-lg text-white/90 hover:text-white', {
                    'font-bold text-white': pathname.split('/')[1] === route.path.split('/')[1],
                  })}
                >
                  {route.title}
                </summary>
                <div className="pb-2 pl-4">
                  {route.children.map((product) => (
                    <Link
                      key={product.title}
                      href={product.path}
                      className={cn('block py-3 text-base text-white/70 transition-colors hover:text-white', { 'text-primary font-semibold underline': pathname === product.path })}
                      onClick={() => setMenuOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              // Simple Link for routes without children
              <Link
                href={route.path}
                className={cn('block py-5 text-lg text-white/90 transition-colors hover:text-white', { 'text-primary font-bold underline': pathname === route.path })}
                onClick={() => setMenuOpen(false)}
              >
                {route.title}
              </Link>
            )}
          </div>
        ))}

        {/* Book Demo Button for Mobile */}
        <div className="mt-6">
          <Link href="/book-demo" className="w-full" onClick={() => setMenuOpen(false)}>
            <Button size="lg" className="bg-primary tracking-1 w-full cursor-pointer py-3 text-white">
              BOOK DEMO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const isMobile = useIsMobile(BREAKPOINTS['3xl'])
  const [isOverlayOpen, setOverlayOpen] = useState(false)
  return (
    <>
      {isOverlayOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOverlayOpen(false)} />}
      <header className="border-gradient-header-bottom 3xl:h-20 4xl:px-14 3xl:px-7.5 3xl:py-2 sticky top-0 z-50 flex h-15 items-center justify-between bg-black px-4.5 py-5">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={95} height={29} className="4xl:w-[95px] w-20.5" />
        </Link>
        {isMobile ? <MobileNav isOverlayOpen={isOverlayOpen} setOverlayOpen={setOverlayOpen} /> : <DesktopNav isOverlayOpen={isOverlayOpen} setOverlayOpen={setOverlayOpen} />}
      </header>
    </>
  )
}

export default Navbar
