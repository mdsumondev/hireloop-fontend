import Image from "next/image"
import {
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

const highlights: Array<{
  icon: LucideIcon
  title: string
  description: string
}> = [
  {
    icon: BriefcaseBusiness,
    title: "50,000+ active jobs",
    description: "Fresh roles across every industry, updated daily.",
  },
  {
    icon: Building2,
    title: "12,000+ companies hiring",
    description: "From fast-growing startups to global enterprises.",
  },
  {
    icon: ShieldCheck,
    title: "Verified employers",
    description: "Transparent salaries and scam-free listings.",
  },
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="relative flex w-full items-center justify-center lg:min-h-[calc(100svh-7.5rem)]">
      <div className="flex items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <Image
            src="/logo.png"
            alt="HireLoop"
            width={154}
            height={44}
            priority
            className="mx-auto mb-8 h-9 w-auto lg:hidden"
          />
          {children}
        </div>
      </div>
    </section>
  )
}
