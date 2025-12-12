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
  "group inline-flex h-9 w-max items-center justify-center rounded-md p-2 font-bold cursor-pointer text-xl leading-1.3em text-white hover:underline focus:underline"
)



const Footer = () => {
  return (
    <div
      className="w-full flex flex-col justify-between h-75 px-15 pb-12 pt-[77px] relative"
      style={{
        background: `
          url('/background/footer_bk.png') center center / cover
        `,
      }}>
      <Link href="/" className="text-xl font-bold tracking-tight text-primary cursor-pointer">
        <Image
          src="/icons/logo_name.svg"
          alt="logo"
          width={120}
          height={46}
        />
      </Link>
      <div className="flex justify-between items-end">
        <div className="text-white text-sm tracking-1">
          <Image
            src="/icons/youtube.svg"
            alt="logo"
            width={32}
            height={23}
            className="mb-[15px]"
          />
          <p className="leading-1.3em">Email: Geosat@geosat.com</p>
          <p className="leading-1.3em">Phone: (+886) 6616-9999</p>
          <p className="leading-1.3em">Copyright ©2025 GEOSAT CORPORATION. All Rights Reserved.</p>
        </div>
        <div>
          <ShadcnNavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Home</NavigationMenu.Link>
              </NavigationMenuItem>
              <span className="w-0.5 h-3 bg-white" />
              <NavigationMenuItem>
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle())}>Products</NavigationMenu.Link>
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
                <NavigationMenu.Link className={cn(navigationMenuTriggerStyle(), "pr-0")}>Book Demo</NavigationMenu.Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </ShadcnNavigationMenu>
        </div>
      </div>
    </div>
  )
}

export default Footer