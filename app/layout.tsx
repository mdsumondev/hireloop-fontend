import { Geist, Geist_Mono, Manrope } from "next/font/google"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "bg-[#010103] antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        manrope.variable
      )}
    >
      <body className="min-h-svh bg-[#010103] text-white">
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
