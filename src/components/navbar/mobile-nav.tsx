import ISE_UL_LOGO from "/public/ise-ul-logo.png";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import { Menu } from "lucide-react";
import Link from "next/link";

export const MobileNavbar = () => {

  return (
    <Drawer>
      <DrawerTrigger className="fixed z-50 flex w-full flex-row items-center justify-between border-b-2 border-b-neutral-900/60 px-2 py-2 backdrop-blur-sm md:hidden">
        <Image
          src={ISE_UL_LOGO}
          width={150}
          alt="The ISE and University of Limerick logos, side-by-side."
          className="rounded-xl invert dark:invert-0"
        />
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="flex flex-col space-y-3 overflow-auto p-6">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Course Details</Link>
          <Link href="/">Partner With Us</Link>
          <Link href="/">Contact</Link>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
