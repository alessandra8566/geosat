"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/shadcn"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { useState } from "react"


const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 text-base py-2 font-light cursor-pointer text-white hover:underline hover:font-bold focus:underline"
)

const products = [
  {
    title: "GEOSAT 2.5 PREMIUM",
    path: "/product/geosat-2.5-premium",
  },
  {
    title: "GEOSAT 2.0",
    path: "/product2",
  },
  {
    title: "GEOSAT 10 MR",
    path: "/product3",
  },
  {
    title: "GEOSAT 10 EV",
    path: "/product4",
  },
  {
    title: "GEOSAT 10 IH",
    path: "/product5",
  },
]

const Navbar = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  return (
    <>
      {isProductMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsProductMenuOpen(false)}
        />
      )}
      <header className="h-20 px-10 py-2 flex items-center justify-between bg-black sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          <Image
            className="invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </Link>
        <div className="grow flex items-center justify-end gap-4">
          <ul className="flex">
            <li>
              <Link href="/" className={cn(navigationMenuTriggerStyle())}>HOME</Link>
            </li>
            <li>
              <DropdownMenu.Root onOpenChange={setIsProductMenuOpen}>
                <DropdownMenu.Trigger asChild>
                  <button className={cn(navigationMenuTriggerStyle(), "focus:outline-none")}>
                    PRODUCT
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="w-50 bg-dropdown-menu-gradient text-base text-nowrap text-white/70 box-content z-50"
                    sideOffset={22}
                  >
                    {
                      products.map((product, index) => (
                        <DropdownMenu.Item
                          key={index}
                          className="
                            relative flex items-center 
                            hover:font-semibold focus:outline-none hover:text-white hover:bg-[#2b0202cc]
                            border border-transparent
                            hover:border hover:border-gradient-card
                            cursor-pointer
                          ">
                          <Link href={product.path} className="px-5 py-4" onClick={() => setIsProductMenuOpen(false)}>{product.title}</Link>
                        </DropdownMenu.Item>
                      ))
                    }
                    <DropdownMenu.Arrow width={16} height={8} fill="var(--primary)" />
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </li>
            <li>
              <Link href="/" className={cn(navigationMenuTriggerStyle())}>SOLUTIONS</Link>
            </li>
            <li>
              <Link href="/" className={cn(navigationMenuTriggerStyle())}>ABOUT</Link>
            </li>
          </ul>
          <Button className="py-3 px-4 text-white bg-primary"  >
            BOOK DEMO
          </Button>
        </div>
      </header>
    </>
  )
}

export default Navbar

