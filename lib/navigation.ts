import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  Settings,
  BarChart3,
  Database,
  Shield,
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: any
  badge?: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Calendar",
        href: "/calendar",
        icon: Calendar,
      },
      {
        title: "Messages",
        href: "/messages",
        icon: MessageSquare,
        badge: "3",
      },
      {
        title: "Users",
        href: "/users",
        icon: Users,
      },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        title: "Reports",
        href: "/reports",
        icon: BarChart3,
      },
      {
        title: "Database",
        href: "/database",
        icon: Database,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Documents",
        href: "/documents",
        icon: FileText,
      },
      {
        title: "Security",
        href: "/security",
        icon: Shield,
      },
      {
        title: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
]
