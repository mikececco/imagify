'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

function MobileSideBar() {
  const pathname = usePathname()

  return (
    <header className="header">
      <Link href='/' className="flex items-center gap-2 md:py-2">
        <Image src='/assets/images/logo-text.svg' alt="logo" width={180} height={28}/>
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <>
                <Image src='/assets/images/logo-text.svg'
                alt="logo" width={152} height={23} />
              </>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname

                  return (
                    <li
                      key={link.route}
                      className={`${
                      isActive &&  'gradient-text'
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image src={link.icon} alt={link.label} height={24} width={24}/>
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href='/sign-in'>
              Sign in
            </Link>
          </Button>
        </SignedOut>

      </nav>
    </header>
  )
}

export default MobileSideBar
