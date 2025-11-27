import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu as ShadcnNavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cn } from "@/utils/shadcn"
import { cva } from "class-variance-authority"

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 text-base py-2 font-bold cursor-pointer text-xl text-white hover:underline focus:underline"
)


const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between h-75 bg-footer-gradient px-16 pb-12 pt-16 relative">
      <div
        className="absolute inset-0 opacity-40 w-full h-full bg-cover"
        style={{ backgroundImage: "url('/background/Header_line_H300.png')" }}
      />
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
      <div className="flex justify-between items-end">
        <div className="text-white text-sm">
          <p>Email: Geosat@geosat.com</p>
          <p>Phone: (+886) 6616-9999</p>
          <p>Copyright ©2025 GEOSAT CORPORATION. All Rights Reserved.</p>
        </div>
        <div>
          <ShadcnNavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Home</NavigationMenu.Link>
              </NavigationMenuItem>
              <span className="w-0.5 h-3 bg-white" />
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Product</NavigationMenu.Link>
              </NavigationMenuItem>
              <span className="w-0.5 h-3 bg-white" />
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Solutions</NavigationMenu.Link>
              </NavigationMenuItem>
              <span className="w-0.5 h-3 bg-white" />
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>About</NavigationMenu.Link>
              </NavigationMenuItem>
              <span className="w-0.5 h-3 bg-white" />
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Book Demo</NavigationMenu.Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </ShadcnNavigationMenu>
        </div>
      </div>
    </div>
  )
}

export default Footer