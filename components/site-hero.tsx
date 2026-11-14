import Image from "next/image"
import Link from "next/link"
import {
  BriefcaseBusiness,
  ChartNoAxesColumn,
  MapPin,
  Search,
  Star,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const trendingPositions = [
  { label: "Product Designer", href: "/jobs?q=Product+Designer" },
  { label: "AI Engineering", href: "/jobs?q=AI+Engineering" },
  { label: "DevOps Engineer", href: "/jobs?q=DevOps+Engineer" },
] as const

const heroStats: Array<{ icon: LucideIcon; value: string; label: string }> = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: ChartNoAxesColumn, value: "12K", label: "Companies" },
  { icon: UserRoundSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

const searchFieldClass =
  "h-11 min-w-0 flex-1 border-0 bg-transparent px-0 text-base text-white shadow-none placeholder:text-white/80 focus-visible:border-transparent focus-visible:ring-0"

function SiteHero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-16 sm:pt-28 sm:pb-20 lg:pt-40">
      <div className="mx-auto flex w-full max-w-[816px] flex-col items-center px-4 text-center sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="w-10 border-t border-dashed border-white/25 sm:w-16"
          />
          <div className="flex h-10 items-center gap-2.5 rounded-full border border-white/15 bg-gradient-to-b from-[#2b2b2b] to-[#050506] pr-4 pl-2.5 sm:h-12 sm:gap-3 sm:pr-5 sm:pl-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-lg bg-orange-400/15 text-orange-300 sm:size-7">
              <BriefcaseBusiness className="size-3.5 sm:size-4" />
            </span>
            <p className="font-mono text-xs text-white sm:text-sm">
              <span className="font-semibold">50,000+</span>
              <span className="ml-2 tracking-[0.14em] text-white/60 uppercase">
                New jobs this month
              </span>
            </p>
          </div>
          <span
            aria-hidden="true"
            className="w-10 border-t border-dashed border-white/25 sm:w-16"
          />
        </div>

        <h1 className="mt-8 font-heading text-4xl font-bold tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-[56px] lg:leading-[1.15]">
          Find Your Dream Job Today
        </h1>

        <p className="mt-4 max-w-[784px] text-base leading-relaxed text-white/70 sm:text-xl sm:leading-[1.6]">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          action="/jobs"
          className="mt-8 flex w-full flex-col gap-2 rounded-2xl border border-white/20 bg-[#101010] p-2 sm:mt-12 sm:h-16 sm:flex-row sm:items-center sm:gap-0 sm:p-0"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 sm:px-6">
            <Search className="size-5 shrink-0 text-white/80" />
            <Input
              type="search"
              name="q"
              placeholder="Job title, skill or company"
              aria-label="Job title, skill or company"
              className={searchFieldClass}
            />
          </div>

          <span
            aria-hidden="true"
            className="hidden h-6 w-px shrink-0 bg-white/20 sm:block"
          />

          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 sm:px-6">
            <MapPin className="size-5 shrink-0 text-white/80" />
            <Input
              type="text"
              name="location"
              placeholder="Location or Remote"
              aria-label="Location or Remote"
              className={searchFieldClass}
            />
          </div>

          <Button
            type="submit"
            aria-label="Search jobs"
            className="size-11 shrink-0 self-end rounded-xl bg-[#5c53fe] text-white hover:bg-[#6c64ff] focus-visible:ring-[#5c53fe]/50 sm:size-12 sm:self-auto"
          >
            <Search className="size-5" />
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="text-sm text-white/70 sm:text-base">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trendingPositions.map((position) => (
              <Link key={position.href} href={position.href}>
                <Badge
                  variant="outline"
                  className="h-auto rounded-full border-white/10 bg-[#1a1a1b] px-3 py-1.5 text-sm font-normal text-white hover:border-white/25"
                >
                  {position.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 w-full max-w-[1180px] sm:-mt-[9%]">
        <Image
          src="/images/hero-globe.png"
          alt=""
          width={1180}
          height={731}
          priority
          aria-hidden="true"
          className="h-auto w-full"
        />
        <p className="absolute inset-x-0 top-[60%] mx-auto max-w-[600px] px-4 text-center font-heading text-2xl font-medium tracking-[-0.02em] text-white/70 sm:text-[32px] lg:text-[40px] lg:leading-[1.3]">
          Assisting over <span className="text-[#8f88ff]">15,000</span> job
          seekers find their dream positions.
        </p>
      </div>

      <div className="relative z-10 mx-auto -mt-8 grid w-full max-w-[1320px] grid-cols-2 gap-3 sm:-mt-16 sm:gap-6 lg:-mt-24 lg:grid-cols-4">
        {heroStats.map((stat) => (
          <Card
            key={stat.label}
            className="min-h-44 justify-between gap-0 rounded-2xl border-0 bg-gradient-to-b from-[#010102] to-[#313131] p-5 ring-white/10 sm:min-h-[254px] sm:p-6"
          >
            <stat.icon
              className="size-6 shrink-0 text-white"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="font-heading text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.15]">
                {stat.value}
              </p>
              <p className="mt-4 text-[15px] leading-normal text-white sm:text-lg">
                {stat.label}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export { SiteHero, heroStats, trendingPositions }
