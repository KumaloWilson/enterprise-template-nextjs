import { LoginForm } from "@/modules/auth/components/login-form"
import { AuthLayout } from "@/modules/auth/screen/auth-layout"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <LoginForm />
      </div>
    </AuthLayout>
  )
}
