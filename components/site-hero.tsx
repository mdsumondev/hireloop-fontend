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
  { label: "Dev-ops Engineer", href: "/jobs?q=Dev-ops+Engineer" },
] as const

const heroStats: Array<{ icon: LucideIcon; value: string; label: string }> = [
  { icon: BriefcaseBusiness, value: "50K", label: "Active Jobs" },
  { icon: ChartNoAxesColumn, value: "12K", label: "Companies" },
  { icon: UserRoundSearch, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

const searchFieldClass =
  "h-11 min-w-0 flex-1 border-0 bg-transparent px-0 text-base text-white shadow-none placeholder:text-white/70 focus-visible:border-transparent focus-visible:ring-0"

const nebulaStyle = {
  backgroundImage:
    "radial-gradient(42rem 20rem at 6% -4%, rgba(92,83,254,0.12), transparent 70%)," +
    "radial-gradient(46rem 22rem at 96% 2%, rgba(92,83,254,0.10), transparent 70%)," +
    "radial-gradient(60rem 34rem at 50% 88%, rgba(92,83,254,0.10), transparent 72%)",
}

const starFieldStyle = {
  backgroundImage:
    "radial-gradient(1.5px 1.5px at 24px 38px, rgba(255,255,255,0.75), transparent 100%)," +
    "radial-gradient(1px 1px at 120px 92px, rgba(255,255,255,0.5), transparent 100%)," +
    "radial-gradient(1.5px 1.5px at 190px 140px, rgba(255,255,255,0.35), transparent 100%)," +
    "radial-gradient(1px 1px at 70px 162px, rgba(255,255,255,0.4), transparent 100%)," +
    "radial-gradient(1px 1px at 300px 60px, rgba(255,255,255,0.5), transparent 100%)," +
    "radial-gradient(1.5px 1.5px at 390px 210px, rgba(255,255,255,0.3), transparent 100%)," +
    "radial-gradient(2px 2px at 210px 50px, rgba(255,255,255,0.55), transparent 100%)",
  backgroundSize: "260px 210px, 430px 340px",
}

function SiteHero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-16 sm:pt-28 sm:pb-20 lg:pt-44 lg:pb-28">
      {/* ambient nebula + star field */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={nebulaStyle}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-80"
        style={starFieldStyle}
      />

      <div className="mx-auto flex w-full max-w-[816px] flex-col items-center px-4 text-center sm:px-6">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-r from-transparent to-white/25 sm:w-16"
          />
          <div className="flex h-11 items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-b from-[#232326] to-[#0a0a0b] pr-4 pl-3 sm:h-12 sm:gap-3 sm:pr-5 sm:pl-3.5">
            <span aria-hidden="true" className="text-lg leading-none">
              💼
            </span>
            <p className="font-mono text-[13px] text-white sm:text-xl">
              <span className="font-bold">50,000+</span>
              <span className="ml-2 tracking-[0.12em] text-white/55 uppercase sm:ml-3">
                New jobs this month
              </span>
            </p>
          </div>
          <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-l from-transparent to-white/25 sm:w-16"
          />
        </div>

        <h1 className="mt-8 font-heading text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.15]">
          Find Your Dream Job Today
        </h1>

        <p className="mt-5 max-w-[784px] text-base leading-[1.55] text-white/70 sm:text-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of <br className="hidden lg:inline" />
          curated opportunities and land your next role — faster.
        </p>

        <form
          action="/jobs"
          className="mt-8 flex w-full flex-col gap-2 rounded-[16px] border border-white/20 bg-[#101010] p-2 sm:mt-[52px] sm:h-16 sm:flex-row sm:items-center sm:gap-0"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 sm:px-4">
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
            className="hidden h-6 w-px shrink-0 bg-white/15 sm:block"
          />

          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3 sm:px-4">
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
            className="h-11 shrink-0 self-stretch rounded-xl bg-[#5c53fe] text-white hover:bg-[#6c64ff] focus-visible:ring-[#5c53fe]/50 sm:size-12 sm:self-auto"
          >
            <Search className="size-5" />
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="text-sm text-white/60 sm:text-base">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trendingPositions.map((position) => (
              <Link key={position.href} href={position.href}>
                <Badge
                  variant="outline"
                  className="h-auto rounded-full border-white/10 bg-[#19191b] px-3 py-1.5 text-sm font-normal text-white hover:border-white/25"
                >
                  {position.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* globe artwork */}
      <div className="relative mx-auto mt-10 w-full max-w-[1152px] sm:mt-[4.2%]">
        <Image
          src="/images/hero-globe.png"
          alt=""
          width={1440}
          height={781}
          sizes="(max-width: 1152px) 100vw, 1152px"
          priority
          aria-hidden="true"
          style={{ width: "100%", height: "auto" }}
          className="w-full"
        />
        <p className="absolute inset-x-0 top-[48.3%] mx-auto max-w-[600px] px-4 text-center font-heading text-2xl font-medium tracking-[-0.02em] text-white/85 sm:text-[32px] lg:text-[40px] lg:leading-[1.3]">
          Assisting over <span className="text-[#8f88ff]">15,000</span> job
          seekers find their dream positions.
        </p>
      </div>

      <div className="relative z-10 mx-auto -mt-[8%] grid w-full max-w-[1320px] grid-cols-2 gap-3 sm:-mt-[11.6%] sm:gap-6 lg:grid-cols-4">
        {heroStats.map((stat) => (
          <Card
            key={stat.label}
            className="min-h-44 justify-between gap-0 rounded-[16px] border-0 bg-gradient-to-b from-[#010102] to-[#313131] p-5 ring-white/10 sm:min-h-[250px] sm:p-6"
          >
            <stat.icon
              className="size-6 shrink-0 text-white"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div>
              <p className="font-heading text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.15]">
                {stat.value}
              </p>
              <p className="mt-3 text-[15px] leading-normal text-white/55 sm:text-lg">
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
