export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user" | "manager"
  status: "active" | "inactive"
  avatar?: string
  joinedAt: Date
}

export interface UserFilters {
  search?: string
  role?: string
  status?: string
}
