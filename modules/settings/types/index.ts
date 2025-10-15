export interface SettingsSection {
  id: string
  title: string
  description: string
}

export interface ProfileSettings {
  name: string
  email: string
  bio: string
  avatar?: string
}

export interface NotificationSettings {
  emailNotifications: boolean
  pushNotifications: boolean
  weeklyReport: boolean
}
