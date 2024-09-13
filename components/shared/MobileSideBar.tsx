'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, UserButton } from "@clerk/nextjs"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function MobileSideBar() {
  return (
    <header className="header">
      <Link href='/' className="flex items-center gap-2 md:py-2">
      <Image src='/assets/images/logo-text.svg' alt="logo" width={180} height={28}/>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </SignedIn>

      </nav>
      </Link>
    </header>
  )
}

export default MobileSideBar
