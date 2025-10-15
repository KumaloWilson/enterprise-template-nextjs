import type React from "react"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">{children}</div>
      </div>

      {/* Right side - Illustration */}
      <div className="relative hidden flex-1 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-md space-y-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-3xl mx-auto">
                E
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-balance">Enterprise Application Template</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Production-ready architecture with modular design, authentication, and scalable patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
