export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "admin" | "user"
  createdAt: Date
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

export interface ResetPasswordCredentials {
  email: string
}
