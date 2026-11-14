"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
] as const

const primaryActionClass =
  "h-11 rounded-full border border-transparent bg-[#6c5bf6] px-7 text-[15px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(108,91,246,0.9)] hover:bg-[#7d6ef8] focus-visible:ring-[#6c5bf6]/50 sm:h-12"

const secondaryActionClass =
  "h-11 rounded-full border border-transparent bg-white px-7 text-[15px] font-semibold text-[#4f46e5] hover:bg-white/90 focus-visible:ring-white/40 sm:h-12"

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center gap-4 rounded-2xl border border-white/[0.05] bg-[#101013] py-2 pr-2 pl-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:h-20 sm:rounded-[24px] sm:pr-3 sm:pl-8">
        <Link
          href="/"
          aria-label="HireLoop home"
          className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#6c5bf6]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101013]"
        >
          <Image
            src="/logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <NavigationMenu
            aria-label="Primary"
            className="hidden flex-none justify-end lg:flex"
          >
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => {
                const active = isActivePath(pathname, link.href)

                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      render={<Link href={link.href} />}
                      active={active}
                      aria-current={active ? "page" : undefined}
                      className="h-10 rounded-full px-3 text-base font-normal text-white/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#6c5bf6]/60 focus-visible:outline-none lg:px-4 data-active:font-semibold data-active:text-white"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <span
            aria-hidden="true"
            className="hidden h-7 w-px bg-white/20 lg:block"
          />

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/sign-in"
              className={cn(buttonVariants(), secondaryActionClass)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={cn(buttonVariants(), primaryActionClass)}
            >
              Get Started
            </Link>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="size-11 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white focus-visible:ring-[#6c5bf6]/50 lg:hidden"
                />
              }
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88%] max-w-sm border-white/10 bg-[#0b0b0c] p-0 text-white data-[side=right]:w-[88%] sm:max-w-sm"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5">
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <Link
                  href="/"
                  aria-label="HireLoop home"
                  className="w-fit rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#6c5bf6]/60"
                >
                  <Image
                    src="/logo.png"
                    alt="HireLoop"
                    width={154}
                    height={44}
                    className="h-9 w-auto"
                  />
                </Link>
              </SheetHeader>

              <nav
                aria-label="Mobile"
                className="flex flex-col gap-1 px-3 py-4"
              >
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-lg border-l-2 border-transparent px-4 py-3 text-base font-normal text-white/90 transition-colors hover:bg-white/[0.06] hover:text-white",
                        active &&
                          "border-[#6c5bf6] bg-white/[0.06] font-semibold text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <SheetFooter className="mt-auto gap-2 border-t border-white/10 p-4">
                <Link
                  href="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    buttonVariants(),
                    secondaryActionClass,
                    "w-full"
                  )}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className={cn(buttonVariants(), primaryActionClass, "w-full")}
                >
                  Get Started
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader, navLinks }
