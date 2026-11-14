"use client"

import Link from "next/link"
import { Eye } from "lucide-react"

import {
  AuthDivider,
  AuthFooter,
  GoogleButton,
} from "@/components/auth/auth-ui"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { signIn } from "@/lib/auth-client"
import { userInfo } from "os"

const inputClass =
  "h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/40 focus-visible:border-[#6c5bf6]/60 focus-visible:ring-[#6c5bf6]/30"

const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = new FormData(e.currentTarget)
  const userInfo = Object.fromEntries(form.entries())

  const { data, error } = await signIn.email({
    email: userInfo.email as string,
    password: userInfo.password as string,
    rememberMe: true,
    callbackURL: "/",
  })

  console.log("User Login information", data, error)
}

function SignInPage() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101013] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-8">
      <div className="text-center">
        <h1 className="font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          Sign in to keep your job search moving.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <GoogleButton>Continue with Google</GoogleButton>
        <AuthDivider>or continue with email</AuthDivider>
      </div>

      <form onSubmit={handleSignIn} className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="password" className="text-white/80">
              Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#8f88ff] transition-colors hover:text-white"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className={cn(inputClass, "pr-11")}
            />
            <button
              type="button"
              aria-label="Show password"
              className="absolute inset-y-0 right-0 grid w-11 place-items-center text-white/50 transition-colors hover:text-white focus-visible:outline-none"
            >
              <Eye className="size-4.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Checkbox
            id="remember"
            name="remember"
            defaultChecked
            className="rounded-md border-white/20 bg-white/[0.04] data-checked:border-[#6c5bf6] data-checked:bg-[#6c5bf6]"
          />
          <Label
            htmlFor="remember"
            className="text-sm font-normal text-white/70"
          >
            Keep me signed in
          </Label>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-full bg-[#6c5bf6] text-[15px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(108,91,246,0.9)] hover:bg-[#7d6ef8] focus-visible:ring-[#6c5bf6]/50"
        >
          Sign in
        </Button>
      </form>

      <AuthFooter
        question="New to HireLoop?"
        href="/register"
        linkLabel="Create an account"
      />
    </div>
  )
}

export default SignInPage
