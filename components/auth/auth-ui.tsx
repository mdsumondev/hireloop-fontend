import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

function GoogleButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-12 w-full rounded-full border-white/15 bg-white/[0.04] text-[15px] font-semibold text-white hover:bg-white/[0.08] hover:text-white focus-visible:ring-white/30"
    >
      <GoogleIcon />
      {children}
    </Button>
  )
}

function AuthDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4" role="separator">
      <Separator className="flex-1 bg-white/10" />
      <span className="text-xs tracking-[0.14em] whitespace-nowrap text-white/50 uppercase">
        {children}
      </span>
      <Separator className="flex-1 bg-white/10" />
    </div>
  )
}

function AuthFooter({
  question,
  href,
  linkLabel,
}: {
  question: string
  href: string
  linkLabel: string
}) {
  return (
    <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
      {question}{" "}
      <Link
        href={href}
        className="font-semibold text-[#8f88ff] transition-colors hover:text-white"
      >
        {linkLabel}
      </Link>
    </p>
  )
}

export { GoogleButton, AuthDivider, AuthFooter }
