"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

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
import { signUp } from "@/lib/auth-client"

const inputClass =
  "h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/40 focus-visible:border-[#6c5bf6]/60 focus-visible:ring-[#6c5bf6]/30"

type UserRole = "seeker" | "recruiter" | "admin"

interface FormErrors {
  name?: string
  email?: string
  password?: string
  terms?: string
}

function RegisterPage() {
  const [role, setRole] = useState<UserRole>("seeker")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const validateForm = (data: {
    [k: string]: FormDataEntryValue
  }): FormErrors => {
    const newErrors: FormErrors = {}
    const name = (data.name as string)?.trim()
    const email = (data.email as string)?.trim()
    const password = data.password as string
    const terms = data.terms

    if (!name) {
      newErrors.name = "Full name is required"
    }

    if (!email) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!terms) {
      newErrors.terms = "You must agree to the terms and privacy policy"
    }

    return newErrors
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})

    const form = new FormData(e.currentTarget)
    const userInfo = Object.fromEntries(form.entries())

    const validationErrors = validateForm(userInfo)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      setLoading(true)
      const { data, error } = await signUp.email({
        name: userInfo.name as string,
        email: userInfo.email as string,
        password: userInfo.password as string,
        role: role as string,
        callbackURL: "/",
      })

      if (data?.token) {
        console.log("Register Success")
      } else if (error) {
        console.log(error)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#101013] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-8">
      <div className="text-center">
        <h1 className="font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-white/60 sm:text-base">
          Join HireLoop — it only takes a minute.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <GoogleButton>Sign up with Google</GoogleButton>
        <AuthDivider>or sign up with email</AuthDivider>
      </div>

      <form onSubmit={handleRegister} className="mt-6 space-y-5" noValidate>
        {/* Role Selector */}
        <div className="space-y-2">
          <Label className="text-white/80">I am joining as a</Label>
          <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1">
            <button
              type="button"
              onClick={() => setRole("seeker")}
              className={cn(
                "rounded-lg px-3 py-2 text-xs font-medium transition-all sm:text-sm",
                role === "seeker"
                  ? "bg-[#6c5bf6] text-white shadow-md"
                  : "text-white/60 hover:text-white"
              )}
            >
              Job Seeker
            </button>
            <button
              type="button"
              onClick={() => setRole("recruiter")}
              className={cn(
                "rounded-lg px-3 py-2 text-xs font-medium transition-all sm:text-sm",
                role === "recruiter"
                  ? "bg-[#6c5bf6] text-white shadow-md"
                  : "text-white/60 hover:text-white"
              )}
            >
              Recruiter
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={cn(
                "rounded-lg px-3 py-2 text-xs font-medium transition-all sm:text-sm",
                role === "admin"
                  ? "bg-[#6c5bf6] text-white shadow-md"
                  : "text-white/60 hover:text-white"
              )}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white/80">
            Full name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Jane Cooper"
            autoComplete="name"
            className={cn(
              inputClass,
              errors.name && "border-red-500/80 focus-visible:border-red-500"
            )}
          />
          {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
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
            className={cn(
              inputClass,
              errors.email && "border-red-500/80 focus-visible:border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white/80">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
              className={cn(
                inputClass,
                "pr-11",
                errors.password &&
                  "border-red-500/80 focus-visible:border-red-500"
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 grid w-11 place-items-center text-white/50 transition-colors hover:text-white focus-visible:outline-none"
            >
              {showPassword ? (
                <EyeOff className="size-4.5" />
              ) : (
                <Eye className="size-4.5" />
              )}
            </button>
          </div>
          {errors.password ? (
            <p className="text-xs text-red-400">{errors.password}</p>
          ) : (
            <p className="text-xs text-white/50">
              Must be at least 8 characters.
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="space-y-1.5">
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="terms"
              name="terms"
              className="mt-0.5 rounded-md border-white/20 bg-white/[0.04] data-checked:border-[#6c5bf6] data-checked:bg-[#6c5bf6]"
            />
            <Label
              htmlFor="terms"
              className="text-sm leading-relaxed font-normal text-white/70"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-semibold text-[#8f88ff] transition-colors hover:text-white"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#8f88ff] transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </Label>
          </div>
          {errors.terms && (
            <p className="text-xs text-red-400">{errors.terms}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-full bg-[#6c5bf6] text-[15px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(108,91,246,0.9)] hover:bg-[#7d6ef8] focus-visible:ring-[#6c5bf6]/50 disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <AuthFooter
        question="Already have an account?"
        href="/sign-in"
        linkLabel="Sign in"
      />
    </div>
  )
}

export default RegisterPage
