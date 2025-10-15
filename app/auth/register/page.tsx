import { RegisterForm } from "@/modules/auth/components/register-form"
import { AuthLayout } from "@/modules/auth/screen/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
          <p className="text-muted-foreground">Get started with your enterprise application</p>
        </div>
        <RegisterForm />
      </div>
    </AuthLayout>
  )
}
