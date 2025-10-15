import { ProfileSettings } from "../components/profile-settings"
import { NotificationSettings } from "../components/notification-settings"

export function SettingsScreen() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProfileSettings />
        <NotificationSettings />
      </div>
    </div>
  )
}
