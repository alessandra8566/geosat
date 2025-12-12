"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/shadcn"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { usePathname } from "next/navigation"


const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 text-[15px] leading-1.1em py-2 font-light cursor-pointer text-white hover:underline hover:font-bold focus:underline focus:outline-none"
)


const headerRoutes = [
  { title: "HOME", path: "/" },
  {
    title: "PRODUCT", path: "/product", children: [
      {
        title: "GEOSAT 2.5 PREMIUM",
        path: "/product/geosat-2.5-premium",
      },
      {
        title: "GEOSAT 2.0",
        path: "/product/geosat-2.0",
      },
      {
        title: "GEOSAT 10 MR",
        path: "/product/geosat-10-mr",
      },
      {
        title: "GEOSAT 10 EV",
        path: "/product/geosat-10-ev",
      },
      {
        title: "GEOSAT 15 IH",
        path: "/product/geosat-15-ih",
      },
    ]
  },
  { title: "SOLUTIONS", path: "/solutions" },
  { title: "ABOUT", path: "/about" },
]

const Navbar = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const pathname = usePathname()
  return (
    <>
      {isProductMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsProductMenuOpen(false)}
        />
      )}
      <header className="h-20 px-14 py-2 flex items-center justify-between bg-black sticky top-0 z-50 border-gradient-header-bottom">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={95}
            height={29}
          />
        </Link>
        <div className="grow flex items-center justify-end gap-4">
          <ul className="flex">
            {
              headerRoutes.map((route, index) => {
                if (!!route.children) {
                  return (
                    <li key={index}>
                      <DropdownMenu.Root onOpenChange={setIsProductMenuOpen} open={isProductMenuOpen}>
                        <DropdownMenu.Trigger asChild>
                          <button className={cn(navigationMenuTriggerStyle(), {
                            "underline font-bold": pathname.split("/")[1] === route.path.split("/")[1],
                          })}>
                            {route.title}
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content
                            className="w-50 bg-black text-base text-nowrap text-white/70 box-content z-50"
                            sideOffset={22}
                          >
                            {
                              route.children.map((product, sub_index) => (
                                <DropdownMenu.Item
                                  key={sub_index}
                                  className={cn(`
                                    relative flex items-center
                                    focus:outline-none
                                    bg-[#24242499] hover:bg-black/90 hover:border-gradient-dropdown-item-hover hover:text-white
                                    border border-transparent
                                    cursor-pointer
                                  `, { "bg-hover-btn text-white font-semibold border border-gradient-card": pathname === product.path })}
                                >
                                  <Link href={product.path} className="px-5 py-4" onClick={() => setIsProductMenuOpen(false)}>{product.title}</Link>
                                </DropdownMenu.Item>
                              ))
                            }
                            <DropdownMenu.Arrow width={16} height={8} fill="var(--primary)" />
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    <Link
                      href={route.path}
                      className={cn(navigationMenuTriggerStyle(), {
                        "underline font-bold": pathname === route.path,
                      })}
                    >
                      {route.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <Link href="/book-demo">
            <Button size="lg" className="py-3 px-4 text-white bg-primary cursor-pointer tracking-1">
              BOOK DEMO
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar

