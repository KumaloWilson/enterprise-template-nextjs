import { ForgotPasswordForm } from "@/modules/auth/components/forgot-password-form"
import { AuthLayout } from "@/modules/auth/screen/auth-layout"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Reset your password</h1>
          <p className="text-muted-foreground">Enter your email to receive reset instructions</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  )
}
